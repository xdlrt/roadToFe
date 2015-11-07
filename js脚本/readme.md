# 2015.11.07
### 收集到的一些JS脚本
-----------------

### 1.addLoadEvent（func）
该函数可实现网页加载完成后执行该函数

解决了一些window.onload的局限性

源码如下：

```javascript
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
```

来源：javascript Dom编程艺术
### 2.insertAfter(newElement,targetElement)

该函数可实现在某元素后添加元素节点

解决了js中只有insertBefore函数可在某元素前添加的局限性

源码如下：

```javascript
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
```
来源：javascript Dom编程艺术