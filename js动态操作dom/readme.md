# js动态创建并显示定义列表和文档来源
## 2015.11.08
### displayCitations.js

在引用元素的最后一个子节点处添加`source`链接

使用方法：
`getElementsByTagName`

`getAtrribute`

`setAttribute`

`document.createElement`

`document.createTextNode`

`parent.append()`


### displayAbbreviation.js

在body中添加h1元素节点和dl元素节点

使用方法：
`getElementsByTagName`

`getAtrribute`

`document.createElement`

`document.createTextNode`

`parent.append()`

`for(variable in array)`
即for/in循环：进入循环时，variable变量会依次对数组array元素的下标赋值，直到遍历完数组array里所有元素。本例中`for(key in defs)`即把key的值给defs的下标。

`abbreviation[i].lastchild.nodeValue`
即abbreviation节点中最后一个文本节点的值。在本例中，firstchild和lastchild作用相同。若<abbr>标签为
`<abbr title = "Document Object Modal"><em>DOM</em></abbr>`
则firstchild为`em`节点而不是文本节点

