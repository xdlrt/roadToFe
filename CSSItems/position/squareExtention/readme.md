# 绝对定位和相对定位实现方块延伸效果
## 2015.12.1

在网上看到的一道前端面试题，做一下尝试。

思路是先把最大的div放在中间，然后对其中子元素设置绝对定位，相对于各方向进行定位。

初始思路是：

### demo1.html
html结构：

	<div class = "center">
		<div class = "box leftUp">
			<div class="box leftUp">
				<div class="box leftUp"></div>
			</div>
		</div>
		<div class="box leftDown">
			<div class="box leftDown">
				<div class="box leftDown">
					<div class="box leftDown"></div>
				</div>
			</div>
		</div>
		<div class = "box rightUp">
			<div class="box rightUp">
				<div class="box rightUp"></div>
			</div>
		</div>
		<div class="box rightDown">
			<div class="box rightDown">
				<div class="box rightDown">
					<div class="box rightDown"></div>
				</div>
			</div>
		</div>
	</div>

css源码：

		* {
			margin: 0;
			padding: 0;
		}
		.center {
			position: absolute;
			left: 50%;
			margin-left: -125px;
			top: 50%;
			margin-top: -125px;
			width: 250px;
			height: 250px;
			background: red;
		}
		.box {
			position: absolute;
			width: 50%;
			height: 50%;
			background: red;
		}
		.leftUp {
			top: -50%;
			left: -50%;
		}
		.leftDown {
			bottom: -50%;
			left: -50%;
		}
		.rightUp {
			top: -50%;
			right: -50%;
		}
		.rightDown {
			bottom: -50%;
			right: -50%;
		}

感觉略显繁琐，后经优化来实现嵌套div的css定义，html结构清晰了许多。


### demo2.html
html结构：

		<div class = "center">
		<div class = "leftUp"><div><div><div></div></div></div></div>
		<div class="leftDown"><div><div><div></div></div></div></div>
		<div class = "rightUp"><div><div><div></div></div></div></div>
		<div class="rightDown"><div><div><div></div></div></div></div>
		</div>

css源码：

		* {
			margin: 0;
			padding: 0;
		}
		.center {
			position: absolute;
			left: 50%;
			margin-left: -125px;
			top: 50%;
			margin-top: -125px;
			width: 250px;
			height: 250px;
			background: red;
		}
		div{
			position: absolute;
			background: red;
		}
		.leftUp,.leftUp div{
			width: 50%;
			height: 50%;
			top: -50%;
			left: -50%;
		}
		.leftDown,.leftDown div{
			width: 50%;
			height: 50%;
			bottom: -50%;
			left: -50%;
		}
		.rightUp,.rightUp div{
			width: 50%;
			height: 50%;
			top: -50%;
			right: -50%;
		}
		.rightDown,.rightDown div{
			width: 50%;
			height: 50%;
			bottom: -50%;
			right: -50%;
		}