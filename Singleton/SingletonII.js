// 透明的单例模式
var Singleton = (function(){
    var instance;

    var Singleton = function(name) {
        if(instance) {
            return instance;
        }
        this.name = name;
        return instance = this;
    };

    Singleton.prototype.getName = function() {
        console.log(this.name);
    };

    return Singleton;
})();

// 测试单例模式
var a = new Singleton('sven1');
var b = new Singleton('sven2');
a.getName();
b.getName();
console.log(a.instance); // undefined
console.log(a === b);