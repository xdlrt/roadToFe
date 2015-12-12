# css画三角形
## 2015.12.12

很多地方会用到类似QQ对话框中的小三角，今天学习一下原理，并做简单实现。

> 当元素**宽、高为零**，设置一边的颜色，且**其他边为透明颜色**时，可以形一个三角形。

设置border-left-color可实现一个**朝右**的黑色小三角形。

		<div class = "div1"></div>
		.div1{
			border:10px solid #fff;
			border-left-color:#000; 
			width: 0;
			height: 0;
		}

实际应用时可使用伪类before和after配合绝对定位来在其他图形外添加小三角。

以下代码可实现灰色内容填充黑色外边框，并带有相同类型朝右三角。

		<div class="div2"></div>
		.div2 {
		  width: 100px;
		  height: 100px;
		  background-color: #ccc;
		  position: relative;
		  border: 4px solid #333;
		} 
		.div2:after, .div2:before {
		  border: solid transparent;
		  content: ' ';
		  height: 0;
		  left: 100%;
		  position: absolute;
		  width: 0;
		} 
		.div2:before {
		  border-width: 14px;
		  border-left-color: #333;
		  top: 10px;
		}
		.div2:after {
		  border-width: 9px;
		  border-left-color: #ccc;
		  top: 15px;
		}
