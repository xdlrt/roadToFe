# 学习积累
## 平时学到的一些知识暂时记录下来，之后整理。

### meta标签
```css
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

width - viewport的宽度
height - viewport的高度
initial-scale - 初始的缩放比例
user-scalable - 用户是否可以手动缩放
minimum-scale - 允许用户缩放到的最小比例
maximum-scale - 允许用户缩放到的最大比例

```css
<meta name="format-detection" content="telephone=no"/>
<meta name="format-detection" content="email=no"/>
```

content 里面的参数：telephone=no 是禁止浏览器自动识别手机号码，email=no 是禁止浏览器自动识别Email。

```css
body {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif; /*使用无衬线字体*/
}
```

### 定义苹果图标

在网站文件根目录放一个 apple-touch-icon.png 文件，苹果设备保存网站为书签或桌面快捷方式时，就会使用这个文件作为图标，文件尺寸建议为：180px × 180px。

### 自定义favicon：
```css
<link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
```

### 定义浏览器点击行为：
```css
<a href="tel:020-10086">打电话给:020-10086</a>
<a href="sms:10086">发短信给: 10086</a>
<a href="mailto:me@22278.club">发送邮件: me@22278.club</a>
```

### 定义上传文件类型和格式
```css
<input type=file accept="image/*">
```

上面的文件上传框中，accept 可以限制上传文件的类型，参数为 image/\* 是所有图片类型，点击会弹出图库，也可以指定图片格式，参数设置成 image/png 则可以限制图片类型为png；参数如果为 video/* 则是选择视频的意思；accept 还可以设置多个文件格式，语法为 accept="image/gif, image/jpeg" ；

### rem
相对于根元素的字体大小,css中为html设置
```css
html {
    font-size:10px;
}
```

即1rem = 10px

### 在高版本IE浏览器中`<input type="text">`的问题。
会自动生成一个小叉号，方便用户清空数据，但是一般我们会用js实现，所以显得有些画蛇添足了。可以用微软特有的属性进行清除。
```css
input::-ms-clear{
    display:none;
}
```
类似的有`<input type="password">`会出现一个眼睛样式的图标，可以以如下代码清除：
```css
input::-ms-reveal{
    display:none;
}
```
## 消除chrome自动填充表单的黄色背景
通过查看开发者工具发现原因是chrome的autofill这个私有属性为input设置了背景色等一系列属性。
```css
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
```

## 按钮的一个小小的浏览器差异
请始终为button规定 type 属性。Internet Explorer的默认类型是 "button",而其他浏览器中（包括 W3C 规范）的默认值是"submit"。

## img标签需要src属性
在不设置src的情况下，img标签在chrome下会出现一个灰色边框，就是如果显示图片时所占的区域。
一种方法是不设置img的宽高。
另一种方法是设置一个透明的背景图以覆盖。
如果不事先设置src，最好不要使用img标签。

> 出现一次这样的标签会导致向你的服务器多做一次请求。
在IE中，这样做会请求一次当前页面所在的目录。如在http://playgoogle.com/demo/a.html 中出现这种空src的标签，会导致重新请求一次://playgoogle.com/demo/
在Safari 和 Chrome中，将请求当前页面本身。
在Firefox 3.5以前的版本中，有和Safari同样的问题，但是在3.5中修正了这个BUG。
在Opera 中，不会做额外的请求。
在一个访问量不高的网站中，多一个这样的请求也无所谓（甚至可以让你的网站浏览看上去翻番），但在一个千万级访问量甚至更高的WEB站点里，这样会导致你的服务器和带宽的成本显著增加。 另外一个隐患是，重新请求某个页面可能会导致用户的一些信息被无意中修改，例如cookies，或者ajax操作。

## 清除浮动
父级元素后加
````css
a:after {
    display: block;
    clear: both;
    width: 0;
    height: 0;
    visibility: hidden;
    overflow: hidden;
    content: " ";
}
````

## 溢出滚动
CSS中`overflow:scroll`默认是左右，上下都滚动
如果左右没有超出内容时，用`overflow:auto`
如果左右有超出内容，用`overflow-x: hidden`

### 中文字体
```
@ 宋体    SimSun
@ 黑体    SimHei
@ 微信雅黑    Microsoft Yahei
@ 微软正黑体    Microsoft JhengHei
@ 新宋体    NSimSun
@ 新细明体    MingLiU
@ 细明体    MingLiU
@ 标楷体    DFKai-SB
@ 仿宋    FangSong
@ 楷体    KaiTi
@ 仿宋_GB2312    FangSong_GB2312
@ 楷体_GB2312    KaiTi_GB2312  
@
@ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica
```

### 美化表单元素
- 使用appearance改变webkit浏览器的默认外观
```css
input,select { -webkit-appearance:none; appearance: none; }
```

- 禁用radio和checkbox默认样式，::-ms-check修改表单复选框或单选框默认图标，设置隐藏并使用背景图片来修饰
```css
input[type=radio]::-ms-check,
input[type=checkbox]::-ms-check { display:none; }
```

- 禁用pc端表单输入框默认清除按钮，::-ms-clear修改清除按钮，设置隐藏并使用背景图片来修饰
```css
input[type=text]::-ms-clear,
input[type=tel]::-ms-clear,
input[type=number]::-ms-clear { display:none; }
```

### 去掉webkit的滚动条

```css
//其他参数
::-webkit-scrollbar //滚动条整体部分
::-webkit-scrollbar-thumb   //滚动条内的小方块
::-webkit-scrollbar-track   //滚动条轨道
::-webkit-scrollbar-button  //滚动条轨道两端按钮
::-webkit-scrollbar-track-piece  //滚动条中间部分，内置轨道
::-webkit-scrollbar-corner       //边角，两个滚动条交汇处
::-webkit-resizer            //两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
```


### 禁止长按链接与图片弹出菜单
```css
a,img {
    -webkit-touch-callout: none
}
```

### 禁止ios和android用户选中文字
```css
html,body {
    -webkit-user-select:none;
    user-select: none;
}
```

### 改变输入框placeholder的颜色值
```css
::-webkit-input-placeholder { 
    color: #999;
}
:-moz-placeholder {
    color: #999;
}
::-moz-placeholder {
    color: #999;
}
:-ms-input-placeholder {
    color: #999;
}
input:focus::-webkit-input-placeholder{
    color:#999;
}
```

### android上去掉语音输入按钮
```css
input::-webkit-input-speech-button {
    display: none
}
```


### 屏幕旋转的事件和样式
```js
//JS处理
function orientInit(){
    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight ? 'landscape' : 'portrait';
    if(orientChk == 'lapdscape'){
        //这里是横屏下需要执行的事件
    }else{
        //这里是竖屏下需要执行的事件
    }
}

orientInit();
window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
    setTimeout(orientInit, 100);
}, false);

//CSS处理
//竖屏时样式
@media all and (orientation:portrait){   }
//横屏时样式
@media all and (orientation:landscape){   }
```

### audio元素和video元素在ios和andriod中无法自动播放

```js
//音频，写法一
<audio src="music/bg.mp3" autoplay loop controls>你的浏览器还不支持哦</audio>

//音频，写法二
<audio controls="controls">
    <source src="music/bg.ogg" type="audio/ogg"></source>
    <source src="music/bg.mp3" type="audio/mpeg"></source>
    优先播放音乐bg.ogg，不支持在播放bg.mp3
</audio>

//JS绑定自动播放（操作window时，播放音乐）
$(window).one('touchstart', function(){
    music.play();
})

//微信下兼容处理
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);
```

**小结**
1. audio元素的autoplay属性在IOS及Android上无法使用，在PC端正常
2. audio元素没有设置controls时，在IOS及Android会占据空间大小，而在PC端Chrome是不会占据任何空间