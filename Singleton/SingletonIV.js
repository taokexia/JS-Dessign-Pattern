// 通用的惰性单例
getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
};

var Singleton = function (name) {
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function () {
    console.log(this.name);
}
// 创建对象函数
var createSingleton = function(name){
    var single = new Singleton(name);
    return single;
}
// 返回单例的构造函数
var single = getSingle(createSingleton);
var a = single('sven1');
var b = single('sven2');
a.getName();
b.getName();
console.log(a === b);