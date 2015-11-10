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

function displayCitations(){
	//取得所有引用
	var quote = document.getElementsByTagName('blockquote');
	//遍历引用数组
	for(var i = 0;i<quote.length;i++){
		//如果当前引用没有cite属性，跳出当前循环继续下个循环
		if(!quote[i].getAttribute('cite')) continue;
		//取得并保存引用的cite属性
		var url = quote[i].getAttribute('cite');
		//取得引用中所有元素节点
		var quoteChildren = quote[i].getElementsByTagName('*');
		//如果引用中元素节点数<1，跳出当前循环继续下个循环
		if (quoteChildren.length<1) continue;
		//取得引用中的最后一个元素节点
		var elem = quoteChildren[quoteChildren.length-1];
		//创建标记
		var link = document.createElement('a');
		var link_text = document.createTextNode("source");
		var superscript = document.createElement('sup');
		link.appendChild(link_text);
		link.setAttribute('href',url);
		superscript.appendChild(link);
		//把标记添加到引用中最后一个元素节点
		elem.appendChild(superscript);
	}
}

	addLoadEvent(displayCitations);