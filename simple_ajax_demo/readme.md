# Ajax的简单入门
### 2015.11.11

- 创建XMLHttpRequest对象，其用于和服务器交换数据
	`var xmlhttp = new XMLHttpRequest();`
	注：
	所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。

- 向服务器发送请求
	使用XMLHttpRequest对象的open()和send()方法
		xmlhttp.open(method,url,async);
		xmlhttp.send();
	注：
	method是请求的类型，包括GET和POST
	url是文件在服务器上的位置
	async有两个参数，true(异步)和false(同步)
	
	如demo中的
		xmlhttp.open("GET","test.txt",true);
		xmlhttp.send();

	### POST方法和GET方法细节待补充。

- 服务器响应
	需要使用XMLHttpRequest对象的responseText或responseXML属性
	来自服务器的响应为非XML时，使用responseText属性，且返回字符串形式的响应
	如demo中的
		document.getElementById('ajax_div').innerHTML = xmlhttp.responseText;
	### reponseXM待补充
- onreadystatechange事件
	readyState储存有XMLHttpRequest的状态信息，属性值如下：
> 从 0 到 4 发生变化。
> 0: 请求未初始化
> 1: 服务器连接已建立
> 2: 请求已接收
> 3: 请求处理中
> 4: 请求已完成，且响应已就绪

	每当readyState改变时就会触发onreadystatechange事件
	另一个重要属性是readystatus，属性值如下：
> 200:"OK"
> 404:未找到页面

	如demo中的
		xmlhttp.onreadystatechange = function()｛
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				document.getElementById('ajax_div').innerHTML = xmlhttp.responseTEXT;
			}		
		}

- 完整js源码
			function getDoc(){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					document.getElementById('ajax_div').innerHTML=xmlhttp.responseText;
				}
			}
            xmlhttp.open("GET","test.txt",true);
			xmlhttp.send();
			}