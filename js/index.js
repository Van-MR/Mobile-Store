/*index start*/
window.onload = function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 4000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});
	var mySwiper1 = new Swiper('.secskill-content', {
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		slidesPerView : 3,//'auto'
	});
	var mySwiper2 = new Swiper('.int_nav', {
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		pagination : '.swiper-pagination',//下面的图标跟随切换
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		slidesPerView : 1,//'auto'
	});
	var mySwiper3= new Swiper('.inner_pages', {
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		slidesPerView : 3,//'auto'
	});
	var mySwiper4 = new Swiper('.edmond_child', {
		autoplay: 4000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
		autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
		initialSlide :0,//初始显示的li的索引
		speed : 1000,//滑动的速度
		observer:true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		pagination : '.swiper-pagination',//下面的图标跟随切换
		loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
	});
}	
/*
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop; 
    var top_div = document.getElementById( "back_top" );
    if( t >= 300 ) {
        top_div.style.display = "inline";
    } else {
        top_div.style.display = "none";
    }
}
*/