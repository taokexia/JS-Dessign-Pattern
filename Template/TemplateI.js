// 定义模板 Beverage
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
    console.log( '把水煮沸' );
};

Beverage.prototype.brew = function(){}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function(){}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function(){}; // 空方法，应该由子类重写
// 定义模板方法
Beverage.prototype.init = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};


// 定义咖啡类
var Coffee = function(){};
Coffee.prototype = new Beverage();

Coffee.prototype.brew = function(){
    console.log( '用沸水冲泡咖啡' );
};
Coffee.prototype.pourInCup = function(){
    console.log( '把咖啡倒进杯子' );

};
Coffee.prototype.addCondiments = function(){
    console.log( '加糖和牛奶' );
};
var Coffee = new Coffee();
Coffee.init();


// 定义茶类
var Tea = function(){};
Tea.prototype = new Beverage();
Tea.prototype.brew = function(){
    console.log( '用沸水浸泡茶叶' );
};
Tea.prototype.pourInCup = function(){
    console.log( '把茶倒进杯子' );
};
Tea.prototype.addCondiments = function(){
    console.log( '加柠檬' );
};
var tea = new Tea();
tea.init();
