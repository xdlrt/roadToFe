# 双飞翼布局
## 2015.11.27

在研究负边距时发现始于淘宝UED的双飞翼布局，其中主列优先加载的思想很有借鉴意义，故自己尝试实现。

>### 双飞翼布局实现效果
>左右宽度固定，中间主体部分自适应

>### 双飞翼布局的优点
>- 布局调整方便
>- 主要内容优先加载
>- 兼容包括IE6在内的主流浏览器

### 具体说明：

一般情况下，左中右三列布局时我的做法是

		<div class="left"></div>
		<div class="center"></div>
		<div class="right"></div>
分别设置好宽度和边距即可。

但是对于双飞翼布局来说，三列布局是这样实现。

		<div class="center"></div>
		<div class="left"></div>
		<div class="right"></div>
可以实现优先渲染主列的目的。

### html结构：

		<div class = "container">
			<div class="center col">
				<div class="main"></div>
			</div>
			<div class="left col"></div>
			<div class="right col"></div>
		</div>
首先让这三列浮动起来

		.col{
			float: left;
		}

设置center部分宽度为100%，即屏幕的整个宽度。

		.container{
			width: 100%;
		}
		.center{
			width: 100%;
		}
设置left部分宽度，利用负边距覆盖在center部分之上且居左。

		.left{
			margin-left: -100%;
			width: 300px;
		}
设置right部分宽度，利用负边距覆盖在center部分智商且居右。

		.right{
			margin-left: -200px;
			width: 200px;
		}
此时如果加上背景色已经可以看出三列布局，但是此时center也就是主体部分被两边遮住了，这个时候main就派上了用场。

		.main{
			margin-left: 310px;
			margin-right: 210px;
		}
这个时候就实现了左右宽度固定，中间部分自适应且优先加载的双飞翼布局。

完整源码：

### html

		<div class = "container">
			<div class="center col">
				<div class="main">这是一行字</div>
			</div>
			<div class="left col">这是一行字</div>
			<div class="right col">这是一行字</div>
		</div>

### css

		*{
			margin: 0;
			padding: 0;
		}
		body{
			color: red;
			text-align: center;
			font-weight: bold;
		}
		.container{
			width: 100%;
		}
		.col{
			float: left;
		}
		.center{
			width: 100%;
			min-height: 500px;
			background: #000;
		}
		.main{
			margin-left: 310px;
			margin-right: 210px;
			min-height: 500px;
		}
		.left{
			/*利用负边距覆盖在center上且居左*/
			margin-left: -100%;
			width: 300px;
			min-height: 500px;
			background: blue;
		}
		.right{
			margin-left: -200px;
			min-height: 500px;
			width: 200px;
			background: yellow;
		}