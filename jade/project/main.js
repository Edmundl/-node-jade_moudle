const jade=require('jade');
const fs=require('fs');

var str=jade.renderFile('./index.jade',{pretty:true});
fs.writeFile('./index.html',str,function(err){
	if(err){
		console.log('编译失败！');
	}else{
		console.log('编译成功！');
	}
});