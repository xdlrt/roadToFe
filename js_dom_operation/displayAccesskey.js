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
	var links = document.getElementsByTagName('a');
	var defs = new Array();
	for(var i = 0;i<links.length;i++){
		akeys = links[i].getAttribute('accesskey');
		if(!akeys)continue;
		var text = links[i].lastChild.nodeValue;
		defs[akeys] = text;
		var list = document.createElement('ul');
		for(akeys in defs){
			var text = defs[akeys];
			var str = akeys + ":" + text;
			var item = document.createElement('li');
			var item_text = document.createTextNode(str);
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
