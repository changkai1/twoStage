// 1.获取元素
function $id(id){
    return document.getElementById(id);
}
// 2.获取任意区间的整数值
function rand(min,max){
    return Math.round( Math.random() * (max-min) + min );
}
// 3.随机获取十六位进制颜色值
function getColor(){
    var str = "0123456789abcdef";
    var color = "#";
    for(var i = 1; i <= 6; i++){
        color += str.charAt( rand(0,15) );
    }
    return color;
}
// 4.随机获取rgb颜色值
function getRgb(){
    return "rgb(" + rand(0,255) + "," + rand(0,255) + "," + rand(0,255) + ")";
}
// 5.自定义日期时间格式  转字符串
function dateToString(now){
    var y = now.getFullYear();
    var m = toTwo(now.getMonth()+1);
    var date = toTwo(now.getDate());
    var h = toTwo(now.getHours());
    var mte = toTwo(now.getMinutes());
    var s = toTwo(now.getSeconds()); 
    return y + "-" + m + "-" + date + " " + h + ":" + mte + ":" + s;
}
function toTwo(num){
    return num < 10 ? "0"+num : num;
}
// 6.字符串转日期时间格式
function stringToDate(str){
	return new Date(str);
}
// 7.封装时间差函数
function diff(start,end){
	 return (end.getTime() - start.getTime())/1000;
}
// 8.定义一个函数，功能返回创建的元素
function create(ele){
    return document.createElement(ele);
}










