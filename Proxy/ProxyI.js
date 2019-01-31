// 简单的代理模式
var Flower = function(){};
var xiaoming = {
    sendFlower: function( target){
        var flower = new Flower();
        target.receiveFlower( flower );
    }
};
// 代理：可以用于过滤请求，这是保护代理
var B = {
    receiveFlower: function( flower ){
        A.receiveFlower( flower );
    }
};
var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    }
};
xiaoming.sendFlower( B );
