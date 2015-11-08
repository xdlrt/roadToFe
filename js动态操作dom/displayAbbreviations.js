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

function displayAbbreviation(){
	//取得所有缩略词
	var abbreviation = document.getElementsByTagName('abbr');
	if(abbreviation.length<1)return false; 
	var defs = new Array();
	//遍历取得的缩略词
	for(var i = 0;i<abbreviation.length;i++){
		//保存缩略词标签的title属性和内容
		var defination = abbreviation[i].getAttribute('title');
		var key = abbreviation[i].lastChild.nodeValue;
		//关联数组保存title和内容
		defs[key] = defination;
	}
		//创建定义列表
		var dlist = document.createElement('dl');


		//添加类名
		dlist.className = "the_dlist";
		

		//for/in循环
		for (key in defs){
			var defination2 = defs[key];
			//创建定义描述
			var ddesc = document.createElement('dd');
			var ddesc_text = document.createTextNode(defination2);
			ddesc.appendChild(ddesc_text);
			//创建定义标题
			var dtitle = document.createElement('dt');
			var dtitle_text = document.createTextNode(key);
			dtitle.appendChild(dtitle_text);
			//把他们添加到定义列表
			dlist.appendChild(dtitle);
			dlist.appendChild(ddesc);
		}
	//创建标题
	var header = document.createElement('h1');
	var header_text = document.createTextNode("Abbreviation");
	header.appendChild(header_text);
	//标题添加到body
	document.body.appendChild(header);
	//列表添加到body
	document.body.appendChild(dlist);
}
	addLoadEvent(displayAbbreviation);