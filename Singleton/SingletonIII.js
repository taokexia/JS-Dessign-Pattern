// 用代理实现单例模式
var Singleton = function(name) {
    this.name = name;
}

Singleton.prototype.getName = function() {
    console.log(this.name);
}

// 引入代理类 proxySingleton
var ProxySingleton = (function(){
    var instance;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

var a = new ProxySingleton('seven1');
var b = new ProxySingleton('seven2');
a.getName();
b.getName();
console.log(a === b);