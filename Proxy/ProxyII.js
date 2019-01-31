var Flower = function(){};
var xiaoming = {
    sendFlower: function( target){
        var flower = new Flower();
        target.receiveFlower( flower );
    }
};
// 虚拟代理：把开销大的对象，延迟到真正执行的时候
var B = {
    receiveFlower: function( flower ){
        A.listenGoodMood(function(){ // 监听A 的好心情
            A.receiveFlower( flower );
        });
    }
};

var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    },
    listenGoodMood: function( fn ){
        setTimeout(function(){ // 假设10 秒之后A 的心情变好
            fn();
        }, 10000 );
    }
};

xiaoming.sendFlower( B );
