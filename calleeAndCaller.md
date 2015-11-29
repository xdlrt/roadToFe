# js中的caller和callee属性
## 20151.11.25

### callee

函数内部存在arguments对象，这个对象包含一个callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数。

functionName.arguments.callee

functionName 对象是所执行函数的名称

**可选**项 function 参数是当前正在执行的 Function 对象的名称。

**说明**

callee 属性的初始值就是正被执行的 Function 对象。

> @愚人码头
> callee 属性是 arguments 对象的一个成员，它表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性，例如下边示例的递归计算1到n的自然数之积。该属性仅当相关函数正在执行时才可用。还有需要注意的是callee拥有length属性。

**范例1：递归算法**

		function sum(sum){
			if(sum <= 1){
				return 1;
			}
			else{
				return sum*arguments.callee(sum-1);//减少耦合的写法
			}	
		}
		console.log(sum(5)); //120

**范例2：参数验证**

		function validateLength(arg1,arg2) {
			if(arguments.length == arguments.callee.length){
				console.log("correct!");
			}
			else{
				console.log("实参:" + arguments.length);
				console.log("形参:" + arguments.callee.length);
			}
		}
		validateLength(1,2);//correct!
		validateLength(1);//实参:1 形参:2
### caller

返回一个对函数的引用，该函数调用了当前函数。

functionName.caller

functionName 对象是所执行函数的名称。

**说明**

对于函数来说，caller 属性只有在函数执行时才有定义。该属性中保存着调用当前函数的**函数的引用**，如果是在全局作用域中调用当前函数，它的值为null。

下面的例子说明了 caller 属性的用法：
		
		//1
		function callerDemo() {
    		if (arguments.callee.caller) {
       			var a = callerDemo.caller.toString();
        		console.log(a);
    		} 
			else {
        	console.log("this is a top function");
    		}
		}
		function handleCaller() {
	 	   callerDemo();
		}
		handleCaller();
		//function handleCaller() {
	 	   callerDemo();
		}
		
		//2
		function callerDemo() {
    		if (arguments.callee.caller) {
				var a = callerDemo.caller.toString();
        		console.log(a);
    		} 
			else {
        		console.log("this is a top function");
    		}
		}
		callerDemo();//this is a top function