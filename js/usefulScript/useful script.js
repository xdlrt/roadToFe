
//添加页面加载完成后需要执行的函数
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

//相对于insertBefore  实现在节点后插入节点
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//生成随机整数，方便从数组中取任意项
//值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
function selectFrom(min,max){
	var choices = max-min+1;
	return Math.floor(Math.random()*choices+min);
}

// 添加类
function addClass(id,className){
	var element = document.getElementById(id);
	if(element.className == ""){
		element.className = className;
	}
	else{
		element.className += " "+className;
	}
}
// 插入body中可自适应高分屏分辨率
var screenHeight = window.screen.width
if(window.screen.width > 1400) {
    document.body.style.zoom = (screenHeight * 0.874) / 1200;
}

// 倒计时
var wait = 30;
function countDown(button) {
    if (button.html() == '0s后重新发送') {
        button.prop("disabled", false);
        button.html("发送验证码");
        wait = 30;
    } else {
        button.prop("disabled", true);
        button.html(wait + 's后重新发送');
        wait--;
        setTimeout(function() {
            countDown(button);
        },
        1000);
    }
}
// 获取url中参数值
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null){
		return  decodeURI(r[2])
	}
	return null;
}

var scrollFunc = function (e) {
	var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚
        }
        if (e.detail< 0) { //当滑轮向下滚动时
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', function(){
	setTimeout("scrollFunc()",5000);
}, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;
  //滚动滑轮触发scrollFunc方法
if(window.onmousewheel){
    window.onmousewheel = scrollFunc;
}else{
    document.onmousewheel = scrollFunc;
}


// underscore节流函数
var throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = _.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

// 生成随机十六进制色值
// parseInt("ffffff", 16) === 16777215 === 2^24-1
// 1<<24 = 2^24
// Math.random()生成(0,1)随机数
// ~~两次取反得整数部分
// ~ 会返回32位整数，这是 ~~ 能工作的根本原因。
// 因为位运算速度很快，所以 ~~ 经常作为Math.floor() 的快速实现。
// parseInt 在实际使用过程中需要注意进制的问题，比如 parseInt('011') 并不是我们一般期望的结果。
// 将所得数字转成16进制
var color = (~~(Math.random()*(1 << 24))).toString(16);


// font-size --> fontSize
// 利用正则处理
function camelize(attr) {
    // /\-(\w)/g 正则内的 (\w) 是一个捕获
		// 捕获的内容对应后面 function 的 letter
    // 意思是将 匹配到的 -x 结构的 x 转换为大写的 X
    return attr.replace(/\-(\w)/g, function(all, letter) {
        return letter.toUpperCase();
    });
}

function loading(){

    function Load(){}

    Load.prototype.loadImgs = function(urls,callback) {
        this.urls = urls;
        this.imgNumbers = urls.length;
        this.loadImgNumbers = 0;
        var that =this;
        for(var i=0;i<urls.length;i++){
            var obj = new Image();
            obj.src = urls[i];
            obj.onload = function(){
                that.loadImgNumbers++;
                callback(parseInt((that.loadImgNumbers/that.imgNumbers)*100));
            }
        }
    };

    var loader = new Load();

    loader.loadImgs([
        // 将所有需要加载的图片地址写于此处
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png"
    ],function(percent){
        // 假设显示百分比的元素为 $(".percent")
        $(".percent").text(percent+'%');

        // 加载结束后，隐藏相应的 loading 或遮罩
        if(percent==100) {
            $(".mask").css('display','none');
        }
    });
}
