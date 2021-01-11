function compareOrder(attr){ // 根据属性升序排序
    return function(a, b){
        var value1 = a[attr];
        var value2 = b[attr];
        return value1 - value2;
    }
}
var data = [{name: 'liu',age: 34},{name: 'guan',age: 30},{name: 'zhang',age: 40}];
data.sort(compareOrder('age'));
//[ { name: 'guan', age: 30 },{ name: 'liu', age: 34 },{ name: 'zhang', age: 40 } ]







