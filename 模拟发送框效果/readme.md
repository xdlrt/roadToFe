# 简单实现模拟发送框效果

----------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;做一个移动端的小项目，需要用到发送信息的功能。添加联系框和输入内容区域如下图所示，基本需求是点击文本框，文本框中对象和内容字样不可修改且光标在冒号后显示。

![](http://i.imgur.com/foA6fwc.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尝试使用`input`中`value`和`placeholder`两个属性，均无法实现需求。`value`属性中在点击后对象和内容字样可修改，`placeholder`中提示文本在点击文本框后消失，均不能满足需求。后经研究发现一种实现方法，下面详细说明。
 
## 实现思路：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用**独立标签**，如`<span>`、`<label>`，将文本框和独立标签包裹在同一个父级div中，父级div相对定位，独立标签相对父级div绝对定位，实现修改文本框内容时独立标签内容不可修改。对文本框设置`text-intent`，可实现光标在冒号后显示。

### demo：

- 先创建一个文本框

```html
<div class="main">
	<input type="text" class = "horizontal">
</div>
``` 

- div中添加一个span标签

```html
<div class="main">
	<span class = "in_input">对象：</span>
    <input type="text" class = "horizontal">
</div>
```
 
- 此时span标签在文本框的上方。css中写入
```css
.main{position: relative;}
.in_input{position: absolute;}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于绝对定位的元素会从文档流中删除，且相对于父级元素定位
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时需要通过定位来美化span标签的效果，在`in_input`类中写入`top: 9px;left: 8px;`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到已经实现点击文本框中span标签始终存在且不能修改，但光标仍处于文本框的最左端。此时向`horizontal`类中写入`text-indent: 45px;`

-----------
### 完整源码：
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<style>
		.main{
			position: relative;
		}
		.horizontal{
			display: block;
			height: 30px;
			text-indent: 45px;
		}
		.in_input{
			position: absolute;
			font-size: 15px;
			top: 9px;
			left: 8px;
		}
	</style>
</head>
<body>
	<div class="main">
		<span class = "in_input">对象：</span>
		<input type="text" class = "horizontal">
	</div>
</body>
</html>
```