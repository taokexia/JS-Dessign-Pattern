// 实现单例模式
var Singleton = function (name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function () {
    console.log(this.name);
}

Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}

// 测试单例模式
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();
console.log(a === b);