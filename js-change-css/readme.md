# 利用js控制css
## 2015.11.16
### js-change-css.js

html文档结构是h1标签下有多个p标签，实现改变标题下第一个p标签的样式，实质是改变该标签的内联样式。

关键是nextSibling，子节点选择的使用。

		function getNextElement(node){
			//判断节点类型是否为元素节点
			if(node.nodeType == 1){
				return node;
			}
			//判断当前节点下一个节点是否为元素节点，如果是则再次调用getNextElement函数
			if(node.nextSibling){
				return getNextElement(node.nextSibling);
			}
			return null;
		}

因父元素节点下有很多类型的节点，而我希望实现的是选择p元素节点，则使用getNextElement函数实现选择的下个节点为元素节点。
		
		function styleHeaderSiblings(){
		//获取所有h1元素节点
		var header = document.getElementsByTagName('h1');
		var para;
		//遍历所有h1元素节点
		for(var i = 0;i<header.length;i++){
			//调用函数获取p元素节点
			para = getNextElement(header[i].nextSibling);
			//设置p元素样式
			para.style.color = "red";
			para.style.fontWeight = "bold";
			}
		}

附html结构：
		
		<h1>Hold the front page.</h1>
		<p>This first paragragh leads you in.</p>
		<p>Now you get the nitty-gritty of the story.</p>
		<p>The most important information is delivered first.</p>
		<h1>Extra!Extra!</h1>
		<p>Further developments are unfolding.</p>
		<p>You can read all it here.</p>