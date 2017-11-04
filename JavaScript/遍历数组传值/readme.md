# 遍历数组传值
## 2015.12.15

今天写项目的时候遇到了要把遍历数组中符合条件的的值传入另一数组中并输出，但是由于方法不得当，出现不符合条件的值占位的问题，故作修改，实现这样一种效果。

> 实现思路：以数组的长度为下标，可实现传入的时候按索引值的顺序来储存数据，不会造成空元素储存在数组中。

首先是html源码：

		<label for = "para1">111</label>
		<input type="checkbox" id = "para1">
		<label for = "para2">222</label>
		<input type="checkbox" id = "para2">
		<label for = "para3">333</label>
		<input type="checkbox" id = "para3">
		<label for = "para4">444</label>
		<input type="checkbox" id = "para4">
		<button id = "Abutton">显示选中值</button>
		<p id = "para"></p>

js源码：

		var button = document.getElementById('Abutton');
		var checkbox = document.getElementsByTagName('input');
		var label = document.getElementsByTagName('label');
		var text = new Array();
		// 给button绑定onclick事件
		button.onclick = function(){
			// 清空数组，避免多次点击数组使text数据不断增加
			text = [];
			// 遍历复选框
			for(var i = 0;i<checkbox.length;i++){
				// 复选框被选中时将label中文本存入text数组
				if(checkbox[i].checked == true){
					text[text.length] = label[i].innerText;
				}
			}
			var p = document.getElementById('para');
			// text数组内容写入p标签中
			p.innerText = text;
		}