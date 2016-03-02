var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',	    
		// 如果需要分页器
		pagination: '.swiper-pagination',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
})
window.onload = function(){
	var loading = document.getElementById("loading");
	loading.style.display = "none";
	console.log("生日快乐");
}