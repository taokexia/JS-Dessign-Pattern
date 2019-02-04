// 正常的输出数据
var guangdongCity = {
    shenzhen: 11,
    guangzhou: 12,
    zhuhai: 13
};
// 要适配的输出数据
var getGuangdongCity = function(){
    var guangdongCity = [
    {
        name: 'shenzhen',
        id: 11,
    }, {
        name: 'guangzhou',
        id: 12,
    }

    ];
    return guangdongCity;
};
var render = function( fn ){
    console.log( '开始渲染广东省地图' );
    console.log( JSON.stringify( fn() ) );
};
// 修改数据格式的适配器
var addressAdapter = function( oldAddressfn ){
    var address = {},
    oldAddress = oldAddressfn();
    for ( var i = 0, c; c = oldAddress[ i++ ]; ){
        address[ c.name ] = c.id;
    }
    return function(){
        return address;
    }
};
render( addressAdapter( getGuangdongCity ) );
