// 内部迭代器
var each = function(ary, callback) {
    for(var i = 0, l = ary.length; i < l; i++) {
        callback.call(ary[i], i, ary[i]); // 把下标和元素作为参数传给callback函数
    }
}

// 缺点是不易修改迭代的规则
// 比如比较两个数组是否相同
var compare = function(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        throw new Error('arr1和arr2不相等');
    }
    each(arr1, function(i, n) {
        if(n !== arr2[i])
            throw new Error('arr1和arr2不相等');
    });
    console.log('arr1和arr2相等');
}

compare([1, 2, 3], [1, 2, 4]);