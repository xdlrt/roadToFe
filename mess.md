# 学习积累
### 平时学到的一些知识暂时记录下来，之后整理。

- ### meta标签
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
width - viewport的宽度
height - viewport的高度
initial-scale - 初始的缩放比例
user-scalable - 用户是否可以手动缩放
minimum-scale - 允许用户缩放到的最小比例
maximum-scale - 允许用户缩放到的最大比例

		<meta name="format-detection" content="telephone=no"/>
		<meta name="format-detection" content="email=no"/>
content 里面的参数：telephone=no 是禁止浏览器自动识别手机号码，email=no 是禁止浏览器自动识别Email。

		body {
   			font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/
		}

- ### 定义苹果图标

在网站文件根目录放一个 apple-touch-icon.png 文件，苹果设备保存网站为书签或桌面快捷方式时，就会使用这个文件作为图标，文件尺寸建议为：180px × 180px。

- ### 自定义favicon：

		<link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
- ### 定义浏览器点击行为：

		<a href="tel:020-10086">打电话给:020-10086</a>
		<a href="sms:10086">发短信给: 10086</a>
		<a href="mailto:me@22278.club">发送邮件: me@22278.club</a>
- ### 定义上传文件类型和格式

		<input type=file accept="image/*">
上面的文件上传框中，accept 可以限制上传文件的类型，参数为 image/\* 是所有图片类型，点击会弹出图库，也可以指定图片格式，参数设置成 image/png 则可以限制图片类型为png；参数如果为 video/* 则是选择视频的意思；accept 还可以设置多个文件格式，语法为 accept="image/gif, image/jpeg" ；
- ### js绑定onclick事件：
注意是**onclick**不是**onClick**。
		var link = document.getElementsByTagName('a');
		for(var i = 0;i<link.length;i++){
			link[i].onclick = function(){
				function XXX();
			}
		}
或者在标签中，如
		
		<a href = "##" onclick = "functionName()"></a>
又或者使用W3C dom中的addEventListener()方法，如

		node.addEventListener("click", functionName, captureFlag);
方法的第一个参数是声明事件类型的字符串（不带"on"前缀），比如click，mousedown，和keypress。
第二个参数是函数引用，**不能加括号**。
第三个参数是一个 Boolean 值，指明该结点是否以DOM中的捕捉模式来侦听事件。对于一个典型的事件侦听器来说，第三个参数应该为false（假）。
IE中只能用attachEvent即node.attachEvent(type, listener); 
node： dom节点 。
type： 字符串，事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等。 
listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
- ### rem
相对于根元素的字体大小,css中为html设置

		html{font-size:10px;}
即1rem = 10px
- ### focus事件和blur事件

		link[i].onfocus = function(){
				function XXX();
			}
		link[i].blur = function(){
				function XXX();
			}
- ### window.onload
window.onload是在dom文档树和所有文件加载完之后执行一个函数。

- ### json2html jquery实现

		var json ={
    	"title":"xxx",
    	"context":"demodemodemo",
    	"author":"ringotc" 
		}

		$('<div class="post"> <h1>'+json.title+'</h1> <div class="context">'+json.context+'</div> <p>'+json.author+'</p> </div>').append('body')
- ### 清除浮动
父级元素后加

		a:after {
			display: block;
			clear: both;
			width: 0;
			height: 0;
			visibility: hidden;
			overflow: hidden;
			content: " ";
		}

- ### 溢出滚动
CSS中"overflow:scroll"默认是左右，上下都滚动
如果左右没有超出内容时，用overflow:auto;
如果左右有超出内容，用overflow-x: hidden;

- ### ifame隐藏，解决上传刷新的问题。（未测试）

- ### 遮罩层半透明
如果遮罩层中有其它元素，可以只设置background-color的第四个参数使背景实现半透明。
如果没有，可以直接设置opacity的值。

- ### 模拟input
把原始input的opacity值设置为0；