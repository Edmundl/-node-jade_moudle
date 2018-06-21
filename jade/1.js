const jade=require('jade');

var str=jade.renderFile('./6.jade',{pretty:true,name:'blue'});  //pretty是美化选项
console.log(str);