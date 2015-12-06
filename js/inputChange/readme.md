# 文本框即时变化的研究
## 2015.12.6

最近项目中需要用到搜索框，并实现改变关键字实时更新搜索结果的功能。
因此研究了一下oninput,onpropertychange,onchange的区别和用法，以及onpropertychange在ie浏览器下的一个bug。 

###oninput,onpropertychange,onchange的用法
- onchange触发事件必须满足两个条件：
 - 当前对象属性改变，并且是由键盘或鼠标事件触发的（脚本触发无效）。
 - 当前对象失去焦点(onblur)；
- onpropertychange的话，只要当前对象属性发生改变，都会触发事件，但是它是**IE专属**的；
- oninput是onpropertychange的非IE浏览器版本，但不同的是，它只在对象value值发生改变时奏效，并非该对象所有属性改变都能触发事件。

在文本框和文本域中，如果想捕获用户的键盘输入，用onkeyup事件检查就可以了，但是onkeyup时间不支持复制和粘贴，因此需要动态监测文本框和文本域中值的变化，这就需要onpropertychange（用在IE浏览器）和oninput（非IE浏览器）结合在一起使用了。


onpropertychange的bug
在代码实现时，发现在响应用户onclick了textarea时，如果使用obj.className="XX";来改变textarea输入框中字体的样式，会导致在ie下会有在输入第一个字符的时候onpropertychange不会触发的bug，因此需要这样设置：obj.style.color="#000";