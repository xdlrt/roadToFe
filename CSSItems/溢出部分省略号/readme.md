# 单行文字溢出省略
## 2015.12.9
### demo
		<p>把我隐藏了吧把我隐藏了吧把我隐藏了吧把我隐藏了吧</p>
### css

		p{
			width: 300px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
### 以下为解释：
### text-overflow: ellipsis; 
- 实现这个效果的重点样式是  text-overflow: ellipsis; 
- 低版本opera不支持text-overflow，可用-o-text-overflow：ellipsis；
- firefox浏览器不支持这种方法。更多方法可见[张鑫旭大神的博客](http://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)。
- text-ellipsis是一个特殊的样式。官方解释是这样的：text-overflow属性仅是注解，当文本溢出时**是否显示省略标记**。并不具备其它的样式属性定义。
- 要实现溢出时产生省略号的效果还须定义：**强制文本在一行内显示（white-space:nowrap）及溢出内容为隐藏（overflow:hidden）**，只有这样才能实现溢出文本显示省略号的效果。

**我的理解是：**
- 首先要把文本限制在一行（white-space: nowrap;），这一行的宽度是有限制的(width)，并且实现溢出隐藏（overflow: hidden；），然后出现省略号（ text-overflow: ellipsis）。

### white-space
- white-space属性声明建立布局过程中如何处理元素中空白符。
- 这里的空白符应该指我们用键盘敲入的空格或回车，因为用 或<br>无论white-space设置什么都会有空格或回车。
- 下面是wschool上white-space可能的值：
 - normal 默认。空白会被浏览器忽略。
 - pre 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。
 - nowrap 文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。
 - pre-wrap 保留空白符序列，但是正常地进行换行。
 - pre-line 合并空白符序列，但是保留换行符。
 - inherit 规定应该从父元素继承 white-space 属性的值。