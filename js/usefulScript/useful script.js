
//添加页面加载完成后需要执行的函数
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

//相对于insertBefore  实现在节点后插入节点
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//生成随机整数，方便从数组中取任意项
//值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
function selectFrom(min,max){
	var choices = max-min+1;
	return Math.floor(Math.random()*choices+min);
}

// 添加类
function addClass(id,className){
	var element = document.getElementById(id);
	if(element.className == ""){
		element.className = className;
	}
	else{
		element.className += " "+className;
	}
}