"use strict";

//const a;报错　必须初始化
var a = 2;
console.log(a);

//a = 3; 不能二次赋值


//引用类型不能改变的是引用地址
var obj = {
	name: "larry"
};
obj.name = 'terry';

//obj = {};
console.log(obj.name);