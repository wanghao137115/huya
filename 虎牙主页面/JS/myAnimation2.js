//动画的函数
//obj 当前的对象  attr 当前元素对象的属性  endTarget末尾的位置
var speed=0
function startAnimation(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        //透明化处理
        var cur=0;
        var flag=true;//标杆 如果为true，证明所有的事情都到达终点值
        for(var attr in json){
            if(attr==='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur=parseInt(getStyle(obj,attr));
            }
            //获取样式属性
            var cur=parseInt(getStyle(obj,attr));
            speed=(json[attr]-cur)/20;
            speed = json[attr]>cur?Math.ceil(speed):Math.floor(speed);
            if(json[attr]!==cur){
                flag=false;
            }
            //3.运动起来
            if(attr=='opacity'){
                obj.style[attr]=`alpha(opacity:${cur + speed})`;
                obj.style[attr]=(cur+speed)/100;
            }else{
                obj.style[attr] = (cur + speed) +"px";
            }

        }
        if(flag){
            clearInterval(obj.timer)
            if(fn){
                fn();
            }
            return;
        }
    },30);
}
function getStyle(obj,attr) {
    return  getComputedStyle(obj,null)[attr];
}