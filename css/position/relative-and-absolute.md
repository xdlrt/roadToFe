# 相对定位和绝对定位应用
## 2015.11.27

### 要求：
4块内容相对浏览器水平垂直居中，4张图片始终水平对齐，上下内容高度自适应分别向各自方向延伸。

work1.html 网上找到的范例。

work2.html 自己尝试写出的效果。

html结构：

		<div class = "container">
			<div class="list">
				<div class="top"><p></p></div>
				<img src="" alt="">
				<div class="bottom"><p></p></div>
			</div>
			<div class="list">
				...
			</div>
			<div class="list">
				...
			</div>
			<div class="list">
				...
			</div>
		</div>

其中container包裹着所有元素，用绝对定位设置在页面中水平垂直居中。

		.container{
			position: absolute;
			top: 50%;
			margin-top: -85px;
			left: 50%;
			/*本机全屏宽度*/
			margin-left: -607px;
			width: 90%;
		}
通过浮动，设置图片水平排列，相对定位。

		.list{
			position: relative;
			float: left;
			width: 22%;
			height: 170px;
		}
		.list img{
			width: 100%;
			height: 100%;
			position: relative;
		}
上下内容自适应通过对top和bottom绝对定位实现，分别对图片下方和上方距离100%。

		.top{
			position: absolute;
			bottom: 100%;
			width: 100%;
		}
		.bottom{
			position: absolute;
			top: 100%;
			width: 100%;
		}
-------------------------------------------------------------------------