function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function displayAccesskey(){
	//取得所有链接
	var links = document.getElementsByTagName('a');
	//定义新数组
	var defs = new Array();
	//遍历链接数组
	for(var i = 0;i<links.length;i++){
		//取得数组元素的accesskey属性
		akeys = links[i].getAttribute('accesskey');
		//判断accesskey属性是否存在，如果不存在跳出当前循环
		if(!akeys)continue;
		//取得链接数组内容
		var text = links[i].lastChild.nodeValue;
		//创建关联数组
		defs[akeys] = text;
		//创建ul元素
		var list = document.createElement('ul');
		//遍历关联数组
		for(akeys in defs){
			var text = defs[akeys];
			var str = akeys + ":" + text;
			var item = document.createElement('li');
			//创建文本节点
			var item_text = document.createTextNode(str);
			//添加子节点
			item.appendChild(item_text);
			list.appendChild(item);
		}
	}
	var header = document.createElement('h1');
	var header_text = document.createTextNode("The Accesskey");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}
addLoadEvent(displayAccesskey);
