# js+css实现弹出遮罩层
## 2015.11.28

> 我们经常在网站上看到这样的效果，点击某个按钮弹出一个小窗口，其中可包括任何信息，例如输入信息和各种选项等等。曾经可以用弹出另一个网页的方式来实现，但是使用遮罩层可以避免页面的切换，美观且优雅。

### 基本的实现思路：
- 遮罩层包括两部分
 - 背景层：设置颜色和透明度，覆盖整个页面，防止点击其他控件导致误操作且美观。
 - 主体层：显示模态框，实现各种功能。
- css美化背景层和主体层，主体层需使用position：fixed实现无论在何处点击均可显示在合适的视觉位置。
- js控制遮罩层display属性来实现显示隐藏。通过遍历a标签和绑定onclick函数实现和结构分离。

### html结构

		<a href="##" class = "click">点击弹出遮罩层</a>
		<div id="pop">
			<div class="bg"></div>
			<div class="main">
				<h3 class="head">这是标题</h3>
				<hr>
				<div class="main_body">
					<input type="text" placeholder = "请输入用户名">
					<input type="password" placeholder = "请输入密码">
					<input type="checkbox">
					<input type="radio">
				</div>
					<a href = "##" class = "button no">关闭</a>
					<a href = "##" class = "button yes">确定</a>
			</div>
		</div>

### css源码：

		*{
			margin: 0;
			padding: 0;
		}
		html{
			height: 100%
		}
		body{
			height: 100%;
			font-family: "Microsoft Yahei";
		}
		/*三个模拟按钮通用样式*/
		.click,.button{
			display: block;
			text-align: center;
			text-decoration: none;
			color: #fff;
			background: #f88888;
			border-radius: 10px;
		}
		.click{
			width: 150px;
			margin: 20px;
			padding: 10px 10px;			
		}
		.button{
			position: absolute;
			width: 30%;
			height: 40px;
			/*文字垂直居中*/
			line-height: 40px;
		}
		#pop{
			/*遮罩层默认隐藏*/
			display: none;
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
		}
		.bg{
			/*第一层*/
			position: relative;
			z-index: 1;
			width: 100%;
			height: 100%;
			opacity: 0.4;
			background: #000;
		}
		.main{
			/*第二层*/
			position: fixed;
			z-index: 2;
			width: 400px;
			min-height: 200px;
			top: 25%;
			/*水平居中*/
			left: 50%;
			margin-left: -200px;
			background: #fff;
			border-radius: 10px;
			padding: 20px 20px;
		}
		.no{
			right: 140px;
			bottom: 10px;
			margin-right: 20px;
		}
		.yes{
			right: 20px;
			bottom: 10px;
		}
		/*边距等修饰*/
		h3{
			margin-bottom: 10px;
		}
		.main_body{
			padding: 10px 0;
		}
		input{
			display: block;
			line-height: 20px;
			margin-bottom: 10px;
		}