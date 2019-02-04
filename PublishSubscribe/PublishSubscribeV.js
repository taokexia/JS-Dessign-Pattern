// 更新Event，使得可以在订阅之前存储发布的内容
var Event = (function(){
    var global = this,
    Event,
    _default = 'default';
    Event = function(){
        var _listen,
        _trigger,
        _remove,
        _slice = Array.prototype.slice, // 绑定原生Array函数
        _shift = Array.prototype.shift, // 绑定原生Array函数
        _unshift = Array.prototype.unshift, // 绑定原生Array函数
        namespaceCache = {},
        _create,
        find,
        each = function( ary, fn ){  // 迭代器
            var ret;
            for ( var i = 0, l = ary.length; i < l; i++ ){
                var n = ary[i];
                ret = fn.call( n, i, n);
            }
            return ret;
        };
        _listen = function( key, fn, cache ){ // 添加监听
            if ( !cache[ key ] ){
                cache[ key ] = [];
            }
            cache[key].push( fn );
        };
        _remove = function( key, cache ,fn){ // 移除监听
            if ( cache[ key ] ){
                if( fn ){
                    for( var i = cache[ key ].length; i >= 0; i-- ){
                        if( cache[ key ] === fn ){
                            cache[ key ].splice( i, 1 );
                        }
                    }
                }else{
                    cache[ key ] = [];
                }
            }
        };
        _trigger = function(){ // 触发事件
            var cache = _shift.call(arguments),
            key = _shift.call(arguments),
            args = arguments,
            _self = this,
            ret,
            stack = cache[ key ];
            if ( !stack || !stack.length ){
                return;
            }
            return each( stack, function(){
                return this.apply( _self, args );
            });
        };
        _create = function( namespace ){ // 创建命名空间
            var namespace = namespace || _default;
            var cache = {},
            offlineStack = [], // 离线事件
            ret = {
                listen: function( key, fn, last ){
                    _listen( key, fn, cache );
                    if ( offlineStack === null ){
                        return;
                    }
                    if ( last === 'last' ){
                    }else{
                        each( offlineStack, function(){
                            this();
                        });
                    }
                    offlineStack = null;
                },
                one: function( key, fn, last ){
                    _remove( key, cache );
                    this.listen( key, fn ,last );
                },
                remove: function( key, fn ){
                    _remove( key, cache ,fn);
                },
                trigger: function(){
                    var fn,
                    args,
                    _self = this;
                    _unshift.call( arguments, cache );
                    args = arguments;
                    fn = function(){
                        return _trigger.apply( _self, args );
                    };
                    if ( offlineStack ){
                        return offlineStack.push( fn );
                    }
                    return fn();
                }
            };
            return namespace ?
            ( namespaceCache[ namespace ] ? namespaceCache[ namespace ] :
                namespaceCache[ namespace ] = ret )
            : ret;
        };
        return {
            create: _create,
            one: function( key,fn, last ){
                var event = this.create( );
                event.one( key,fn,last );
            },
            remove: function( key,fn ){
                var event = this.create( );
                event.remove( key,fn );
            },
            listen: function( key, fn, last ){
                var event = this.create( );
                event.listen( key, fn, last );
            },
            trigger: function(){
                var event = this.create( );
                event.trigger.apply( this, arguments );
            }
        };
    }();
    return Event;
})();

/******************************** 先发布后订阅 **************************************/ 
Event.trigger('click', 1);
Event.listen('click', function(a) {
    console.log(a);     
});


/******************************** 使用命名空间 ***************************************/ 
Event.create('namespace1').listen('click', function(a) {
    console.log(a);
})

Event.create('namespace1').trigger('click', 1);

Event.create('namespace2').listen('click', function(a) {
    console.log(a);
})

Event.create('namespace2').trigger('click', 2);