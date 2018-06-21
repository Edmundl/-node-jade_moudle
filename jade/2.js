const jade=require('jade');

console.log(jade.renderFile('./9.jade',{pretty:true,
	arr:['aaa','asfsfa','flksajf','45645'],
	content:"<h2>你好啊</h2><p>放年假是否可是你</p>"
}));