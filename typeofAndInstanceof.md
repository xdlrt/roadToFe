# typeof and instanceof
## 2015.11.24
### instanceof运算符:
此运算符可以判断一个变量是否是某个对象（类）的实例，返回值是布尔类型的。

		var str=new String("antzone");  
		console.log(str instanceof String);//true

以上代码会输出true，因为str是对象String的对象实例。
一般说来只有使用构造函数创建的对象才会返回true，否则返回false，不过数组是一个例外，都会返回true。
### typeof运算符:
此运算符可以返回一个字符串，用语说明元算数的类型，它的返回值有如下可能:

**number,boolean,string,function,object,undefined**

		var str=new String("antzone");
		var strTwo="antzone";  
		console.log(typeof str); //object
		console.log(typeof strTwo);//string

在以上代码中，第一个输出"object"，第二个确是"string"，并不精准。
一般来说使用typeof的操作是基础类型量的话能够返回准确的结果，如果是使用构造函数创建的对象则会返回"object"，不过对于数组来说是个例外，无论是否是基础类型量都会返回"object"。
