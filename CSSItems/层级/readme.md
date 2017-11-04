# 美化上传文件效果
## 2015.11.17

主要用到两个css属性：opacity和z-index，来实现选择文件框隐藏在美化过的按钮或链接下。

> ### z-index 属性设置元素的堆叠顺序。
> 拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前     面。
> 该属性设置一个定位元素沿 z 轴的位置，z 轴定义为垂直延伸到显示区的轴。
> 如果为正数，则离用户更近，为负数则表示离用户更远。

> 注释：元素可拥有负的 z-index 属性值。
> 注释：Z-index 仅能在定位元素上奏效（例如 position:absolute;）！

> ### opacity设置元素的透明度
> 规定不透明度。从 0.0 （完全透明）到 1.0（完全不透明）。

通过设置input的透明度为0和绝对定位配合z-index将其隐藏在button下。

html源码：

		<button class = "the_img">上传文件</button>
		<input type="file" class = "the_input">

css源码：

		.the_img{
			position: absolute;
			z-index: 1;
			left: 10px;
			background: #fccccc;
			border:2px solid #fcc3cd;
			border-radius: 5px;
			color: red;
			width: 150px;
			height: 50px;
		}
		.the_input{
			position: absolute;
			opacity: 0;
			z-index: 2;
			/*避免input文字溢出按钮*/
			left: -60px;
			height: 50px;
		}

## 2015.11.18
### 利用after伪元素和z-index实现类fieldset标签效果

关键是令after伪类的content属性，设置背景色和高度来模拟线条。

html源码：

		<div class="container">
			<p class="line">
				<span>我在上面</span>
			</p>
		</div>

css源码：

		//maybe need width
		.container{
			position: relative;
			width: 60%;
			margin: 150px auto;
		}
		.container p::after{
			/*比span的值小即可*/
			z-index: 0;
			top: 10px;
			left: 0;
			right: 0;
			/*决定线条粗细*/
			height: 2px;
			/*内容为空*/
			content: "";
			/*绝对定位使伪元素处于正下方*/
			position: absolute;
			background-color: #f3f3f3;
		}
		.line{
			text-align: center;
		}
		.line span{
			padding: 0 10px;
			position: relative;
			z-index: 1;
			color: #a3a3a3;
			/*需要和背景色一致*/
			background: black;	
		}

### no-z-index实现

来自杨文强