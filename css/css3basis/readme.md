# css3初探
## 2016.12.11

目前的小项目虽然用不到css3，但是对我来说页面定动起来更有交互感。
一直都没有时间来系统的总结一下css3的相关知识，趁着周末充充电。
### css3demo.html

## css3边框
- ### border-redius
 - 浏览器支持：IE9+、Firefox 4+、Chrome、Safari 5+ 以及 Opera。
 - 这是一个我一直认为是做圆角理所当然的属性，因为平时做浏览器兼容比较少。今天更正了一个概念，这个属性是css3中的，需要注意兼容。
 - 例如：`border-radius:25px;`意思就是设置25px的圆角边框。
 - 还可以分开四个角来写：
 
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;

- ### box-shadow
 - 浏览器支持：IE9+、Firefox 4、Chrome、Opera 以及 Safari 5.1.1。
 - 此属性用于添加一个或多个阴影。
 - 用法：`box-shadow: h-shadow v-shadow blur spread color inset;`
 - h-shadow	必需。水平阴影的位置。允许负值。
v-shadow	必需。垂直阴影的位置。允许负值。
blur	可选。模糊距离。
spread	可选。阴影的尺寸。
color	可选。阴影的颜色。请参阅 CSS 颜色值。
inset	可选。将外部阴影 (outset) 改为内部阴影。

## css3 2D变换
- ### transform：对元素进行移动、缩放、转动、拉长或拉伸。
 - 浏览器支持：Internet Explorer 10、Firefox 以及 Opera 支持 transform 属性。
Chrome 和 Safari 需要前缀 -webkit-。
Internet Explorer 9 需要前缀 -ms-。
 - 2D转换方法：
   - **tanslate()**:元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数.
   - 例如：`transform:translate(200px,100px);`
   - 值 translate(200px,100px) 把元素从当前位置自左向右移动 200 像素，从上到下移动 100 像素。
   - 第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
   - **rotate()**:元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。括号中的值要加度数单位deg。 
   - 例如：`transform:rotate(220deg);`
   - 表示元素顺时针旋转220度
   -  **scale()**:元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数。
   -  例如：`transform:scale(2,1);`
   -  其中第一个参数是x轴缩放倍数，第二个参数是y轴缩放倍数。如果第二个参数未提供，则默认取第一个参数的值
   -  **skew()**:元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数。与rotate3d()翻转方式不同。
   -  例如：`transform:skew(200deg,200deg);`
   -  第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
- ### transition：是元素从一种样式逐渐改变为另一种的效果。
 - 浏览器支持：Internet Explorer 10、Firefox、Chrome 以及 Opera 支持 transition 属性。
Safari 需要前缀 -webkit-。
Internet Explorer 9 以及更早的版本，不支持 transition 属性。
Chrome 25 以及更早的版本，需要前缀 -webkit-。
 - 所有属性：
   - **transition**	简写属性，用于在一个属性中设置四个过渡属性。
   - **transition-property**	 规定应用过渡的 CSS 属性的名称。
     - none  没有属性会获得过渡效果。
     - all  所有属性都将获得过渡效果。
     - property  定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。	
   - **transition-duration**	  定义过渡效果花费的时间。默认是 0。**应始终设置，否则动画不会执行。**
   - **transition-timing-function**	规定过渡效果的时间曲线。默认是 "ease"。
     - linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
     - ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
     - ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
     - ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
     - ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
     - cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
   - **transition-delay**	规定过渡效果开始之前需要等待的时间，以秒或毫秒计。默认是 0。