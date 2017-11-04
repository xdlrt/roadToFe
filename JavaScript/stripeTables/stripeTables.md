# 斑马式表格
## 2015.12.23

两种方式实现奇数行和偶数行背景不同的斑马式表格。

- 第一种是利用css3选择器nth-child来实现。
  缺点：兼容至IE8之后。

- 第二种利用js操作dom来实现。

html源码：

		<table>
			<thead>
				<tr>
					<td>When</td>
					<td>Where</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Odd</td>
					<td>Oddline</td>
				</tr>
				<tr>
					<td>Even</td>
					<td>Evenline</td>
				</tr>
				<tr>
					<td>Odd</td>
					<td>Oddline</td>
				</tr>
				<tr>
					<td>Even</td>
					<td>Evenline</td>
				</tr>
			</tbody>
		</table>

js：

		// 获取所有的tbody元素
		var tbody = document.getElementsByTagName('tbody');
		// 遍历tbody元素
		for(var i = 0;i < tbody.length;i++){
			// 定义计步器odd
			var odd = true;
			// 获取tbody中的tr元素
			var tr = tbody[i].getElementsByTagName('tr');
			// 遍历tr元素
			for(var j = 0;j < tr.length;j++){
				// 如果odd计步器为true则odd赋值false,使下次循环进入else
				if(odd == true){
					odd = false;
					tr[j].style.backgroundColor = "rgba(255,0,0,0.5)";
				}
				else{
					odd = true;
					tr[j].style.backgroundColor = "rgba(0,255,0,0.5)";
				}
			}
		}