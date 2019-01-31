// 策略模式思想：定义一系类算法，把它们一个个封装起来，并且使它们可以相互替换
// 初步实现
// 定义不同的策略
var performanceS = function(){};
performanceS.prototype.calculate = function(salary) {
    return salary * 4;
}
var performanceA = function(){};
performanceA.prototype.calculate = function(salary) {
    return salary * 3;
}
var performanceB = function(){};
performanceB.prototype.calculate = function(salary) {
    return salary * 2;
}

// 定义奖金类
var Bonus = function() {
    this.salary = null; // 原始工资
    this.strategy = null; // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function(salary) {
    this.salary = salary;
}
Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bonus.prototype.getBonus = function() { // 获取奖金数
    return this.strategy.calculate(this.salary); // 把计算奖金的操作委托给对应的对象
}

// 测试
var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());