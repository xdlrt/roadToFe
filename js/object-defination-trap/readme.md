# 对象创建陷阱
## 2015.11.20

在学习indexOf方法的时候对变量创建产生的疑问，例子如下：

		var person = {name:"Nicholas"};
		var people = [{name:"Nicholas"}];
		//控制台输出值
		console.log(people[0]);//Object {name: "Nicholas"}
		console.log(person);//Object {name: "Nicholas"}

此时我认为person和people[0]是同一个对象。

对people对象使用indexOf方法
		
		console.log(people.indexOf(person));
结果却是-1，也就是说people[0]对象和person对象不同。

后经查阅资料，发现person和people[0]只是值相同，但是分属两个不同的对象。
定义一个新的变量：

		var mpeople = [person];
		console.log(mpeople.person);//0

表示mpeople对象中存在person对象。