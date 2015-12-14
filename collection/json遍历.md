# json遍历
## 2015.12.14

json数组有长度`json.abc.length`,如果单纯是json格式，那么不能直接使用`json.length`方式获取长度，而应该使用其他方法。

最近在修改一个html页面的JS的时候遍历JSON对象，却怎么也调试不通过。在获取`json.length`的时候总是undefined，以为自己定义的json方法不对。

第二天晚上静下心来仔细查原因。自己新建一个空的HTML文件在其中测试，发现**JSON对象根本没有length属性**。

以前我使用json的这样的结构：

		var json1={"abc":[{"name":"txt1"},{"name","txt2"}]};
遍历的方法是：

		for(var i=0;i<json1.abc.length;i++){alert(json1.abc[i].name);}
这里的`json1.abc`是一个数组，数组是由2个子json组成的，数组是有length属性的，所以说能工作。

而我这一次的json是这样的：

		var json2={"name":"txt1","name2":"txt2"};
而json本身没有length属性，所以用length属性自然会出错：

		for(var i=0;i<json2.length;i++){alert(json2[i].text);}

既然json没有length属性，如果要知道他的长度怎么办呢？很简单，把上面的遍历改一下就是了：

		var jslength=0;
		for(var js2 in json2){
			jslength++;
		}
把这段代码写成一个方法，以后调用就行了：

		function getJsonLength(jsonData){
			var jsonLength = 0;
			for(var item in jsonData){		
				jsonLength++;		
			}		
			return jsonLength;		
		}
