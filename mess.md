# 学习积累
### 平时学到的一些知识暂时记录下来，之后整理。

- ### meta标签
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
width - viewport的宽度
height - viewport的高度
initial-scale - 初始的缩放比例
user-scalable - 用户是否可以手动缩放
minimum-scale - 允许用户缩放到的最小比例
maximum-scale - 允许用户缩放到的最大比例

- ### js绑定onclick事件：
注意是**onclick**不是**onClick**。
		var link = document.getElementsByTagName('a');
		for(var i = 0;i<link.length;i++){
			link[i].onclick = function(){
				function XXX();
			}
		}

- ### rem
相对于根元素的字体大小,css中为html设置

		html{font-size:10px;}
即1rem = 10px

- web语义化