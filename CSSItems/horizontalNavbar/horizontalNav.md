# 横向导航的三种实现方式
## 2015.12.7

平时我们经常会用到横向的导航，今天做个小小的总结。
目前我所知道的有三种方式可以实现横向导航，分别是浮动、inline-block、table-cell来实现，以下展开叙述。

- ### 浮动
将列表中的li标签进行浮动，实现li中元素排成一横行。

		<ul class = "nav1">
			<li><a href="##">选项1</a></li>
			<li><a href="##">选项2</a></li>
			<li><a href="##">选项3</a></li>
			<li><a href="##">选项4</a></li>
		</ul>

其中主要css样式为：

		.nav1 li{
			list-style: none;
			float: left;
		}
即可实现横向文字导航。

- ### inline-block
对div设置inline-block属性，使其处于一横行之中。

		<div class="nav2">
			<div><a href="##">选项1</a></div><!--
		 --><div><a href="##">选项2</a></div><!--
		 --><div><a href="##">选项3</a></div><!--
		 --><div><a href="##">选项4</a></div>
		</div>

其中主要css样式为：

		.nav2 div{
			display: inline-block;
		}
使用inline-block的方法存在一个问题，各个div之间会存在边距。如果我们想要消除这个默认边距，有多种方法。根本原因是标签端之间存在空格。我使用注释用来清除元素之间的空格实现消除inline-block的默认空隙。
其余方法及详解见[张鑫旭大神博文](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)。

- ### table-cell
对div设置table-cell属性，使其处于一横行之中。

		<div class="nav3">
			<div><a href="##">选项1</a></div>
			<div><a href="##">选项2</a></div>
			<div><a href="##">选项3</a></div>
			<div><a href="##">选项4</a></div>
		</div>

主要css样式为：

		.nav3 div{
			display: table-cell;
		}
即可实现横向导航。

- tips：这三种方法有个共同的问题，在浏览器缩小时，导航会乱掉。其中浮动和inline-block会出现宽度小于导航宽度时最右方元素掉入第二行。table-cell不会换行，但是宽度会变小，其中文字会因挤压换行。**待解决**