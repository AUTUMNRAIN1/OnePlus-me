$(function(){
	/*头部吸顶*/
	$(window).scroll(function(){
		if($(document).scrollTop()>=$('.mian-body .nav-bar').height()){
			$('.mian-body .nav-bar').addClass('navbar-fixed-top')
		}else{
			$('.mian-body .nav-bar').removeClass('navbar-fixed-top')
		}
	})	
	//轮播图的封装函数
	function carselClick(liBtn,liImg){
		$(liBtn).click(function(){
			let idex = $(this).index();
			$(liImg).eq(idex).fadeIn().siblings().fadeOut();
			$(this).addClass('bgchanged').siblings().removeClass('bgchanged cq_active');
		})
	}
	carselClick(".section-design .sub-btn-ul li",".section-design .sub-img-ul .sub-item");
	carselClick(".section-design .sub-btn-ul li",".section-design .img-box li");
	carselClick(".section-dual-camera .first-content ol li",".first-content .con-progress li");
	carselClick(".section-dual-camera .first-content ol li",".section-dual-camera .phone-box li");
	carselClick(".section-charge .charge-pic .lineNav li",".section-charge .charge-pic .line-box div");
	carselClick(".section-charge .charge-btn li",".section-charge .charge-text li");
	
	//图片大小不一的轮播
//	$('.btn-ul li').click(function(){
//		var idx = $(this).index();
//		$('.img-ul').animate({'margin-left':idx*(-960)},1000)
//		$(this).addClass('bgchanged').siblings().removeClass('bgchanged cq_active');
//	})
	//图片大小不一的轮播
	$('.btn-ul li').click(function(){
		let idx = $(this).index();
//		var thisPicWidth = $('.img-ul li').eq(idx).find('img').width();
//		var prePicWidth = $('.img-ul li').eq(idx-1).find('img').width();
//		var nextPicWidth = $('.img-ul li').eq(idx+1).find('img').width();
//		var moveWidth = prePicWidth/2 + thisPicWidth/2 + 138; 
//		console.log(thisPicWidth+"this");
//		console.log(prePicWidth+"prev");
//		console.log(moveWidth+"move");
		$('.img-ul').animate({'margin-left':idx*(-960)},1000)
		$(this).addClass('bgchanged').siblings().removeClass('bgchanged cq_active');
	})
		
//	var clickNum = 0;
//	$('.third .casel_left').click(function(){
//		clickNum++;
//		if(clickNum<9&&clickNum>0){
//				$('.img-ul').animate({'margin-left':clickNum*(960)},1000);			
//		}
//							
//	})
//	$('.third .casel_right').click(function(){
//		clickNum--;
//		if(clickNum>-10){
//				$('.img-ul').animate({'margin-left':clickNum*(960)},1000);	
//		}
//									
//	})	
	
	/*section-design部分的按钮切换图片*/
	$('.section-design .sub-box .ul-slient li').click(function(){
		$(this).addClass('bgchanged').siblings().removeClass('bgchanged cq_active');
		let idex = $(this).index();
		if(idex == 0){
			$('.section-design .img-box li:last-child').css('background-image','url(img/phone2-silent.png)');
		}
		if(idex == 1){
			$('.section-design .img-box li:last-child').css('background-image','url(img/phone2-priority.png)');
		}
		if(idex == 2){
			$('.section-design .img-box li:last-child').css('background-image','url(img/phone2-all.png)');
		}
	})	
	
	/*section-color部分的按钮切换图片*/
	$('.section-color .color-gray').click(function(){
		$(this).toggleClass('changedPic1');
		$(".section-color .color-black").toggleClass('colorHidden');
	})
	$('.section-color .color-black').click(function(){
		$(this).toggleClass('changedPic2');
		$(".section-color .color-gray").toggleClass('colorHidden');
	})
	
	/*按钮的点击旋转*/
	$('.section-test .wrap .cq_down').click(function(){
		$(this).toggleClass('rotat');
		$('.section-test .wrap .wrap_h2').toggle(1000);
		$('.section-test .slideContent').slideToggle(1000);
	})
	
	/*.section-charge部分的轮播切换*/
	$('.section-charge .charge-btn li').click(function(){
		let idx = $(this).index();	
		$(this).addClass('changedBtn').siblings().removeClass('changedBtn');
		if(idx == 0){
			$('.section-charge').css('background','#fff');
			$('.section-charge .charge-pic .pic1').fadeIn(1000);
			$('.section-charge .ant1').css('color','#000');
			$('.section-charge .ant2').css('color','#000');
			$('.section-charge .p-text').css({'color':'#000','opacity':'0.7'});						
		}
		if(idx == 1){
			$('.section-charge').css('background-image','url(img/smart-bg.jpg)');
			$('.section-charge .charge-pic .pic1').fadeOut();
			$('.section-charge .ant1').css('color','#fff');
			$('.section-charge .ant2').css('color','#fff');
			$('.section-charge .p-text').css({'color':'#fff','opacity':'0.7'});						
		}
		if(idx == 2){
			$('.section-charge').css('background-image','url(img/cooler-bg.jpg)');
			$('.section-charge .charge-pic .pic1').fadeOut();
			$('.section-charge .ant1').css('color','#fff');
			$('.section-charge .ant2').css('color','#fff');
			$('.section-charge .p-text').css({'color':'#fff','opacity':'0.7'});						
		}
	})	
	
	/*.section-experience的简单轮播事件*/
	$('.section-experience .second-exp .ox-Nav li').click(function(){
		let idx = $(this).index();
		let wid = $('.section-experience .second-exp .slide-wrap li').width();
		$('.section-experience .second-exp .slide-wrap ul').animate({'margin-left':-wid*idx},1000);
		$(this).toggleClass('changed').siblings().removeClass('changed cq_active');
	})
				
	/*.section-experience的input range(变透明度)的监听方法*/
	$('.js_range').bind('input propertychange', function() {  
		let valDis = $(this).val(); 
		$('.section-experience .second-exp .slide-wrap li .mode-gray').css('opacity',valDis/100);
	}); 
	
	
	
	/*鼠标滚动，整个页面的动画效果*/
	$('.section-hero .abs-fadeout p').css('transform','translateY(-20px)');
	$('.section-hero .bg').css('transform','translateY(-85px)');
				
	$(window).scroll(function(){
		let scrollTop = $(document).scrollTop();
		let videoHeight = $('.section-video').offset().top;
		let cameraHeight = $('.section-dual-camera').offset().top;
		let imgBoxHeight = $('.section-dual-camera .second .img-box').offset().top;
		let thirdHeight = $('.section-dual-camera .third').offset().top+$('.section-dual-camera .third').height()/2;
		let designHeight = $('.section-design').offset().top+$('.section-design').height()/2;
		let testHeight = $('.section-test').offset().top;
		let chargeHeight = $('.section-charge').offset().top+$('.section-charge').height()/2;
		let experienceHeight = $('.section-experience .first-exp').offset().top+$('.section-experience .first-exp').height()/2;
		if(scrollTop>=(videoHeight-100)){
			$('.section-dual-camera .first .first-top').css('transform','translateY(-45px)');
			$('.section-dual-camera .first .con-progress').css('transform','translateY(-5vw)');
		}
		if(scrollTop>=(cameraHeight-100)){
			$('.section-dual-camera .second .img-box').css('transform','translateY(-50px)');
		}
		if(scrollTop>=(imgBoxHeight-200)){
			$('.section-dual-camera .second .text-box .thumbnail img').css('transform','translateY(-3vw)');
			$('.section-dual-camera .second .text-box .thumbnail .caption h3').css('transform','translateY(-3vw)');
			$('.section-dual-camera .second .text-box .thumbnail .caption p').css('transform','translateY(-3vw)');
			$('.section-dual-camera .third h2').css('transform','translateY(-3vw)');
		}
		if(scrollTop>=(thirdHeight)){
			$('.section-design .main-box h2').css('transform','translateY(-3vw)');
			$('.section-design .main-box p').css('transform','translateY(-3vw)');
			$('.section-design .img-box li').css('transform','translateX(-7vw)');
			$('.section-design .sub-box .sub-img-ul .sub-item').css('transform','translateY(-3vw)');
			$('.section-design .sub-btn-ul').css('transform','translateY(-3vw)');
		}
		if(scrollTop>=(designHeight)){
			$('.section-color .color-gray').css('transform','translate(5vw,-3vw)');
		}
		if(scrollTop>=(testHeight)){
			$('.section-charge .charge-text ul').css('transform','translateY(-5vw)');
			$('.section-charge .charge-btn').css('transform','translateY(-5vw)');
			$('.section-charge .charge-pic').css('transform','translateY(-6vw)');
			$('.section-charge .charge-pic .line-box .lineImg1').css('width','100%');
		}
		if(scrollTop>=(chargeHeight)){
			$('.section-experience .first-exp h1').css('transform','translateY(-5vw)');
			$('.section-experience .first-exp p').css('transform','translateY(-5vw)');
			$('.section-experience .first-exp').css('transform','translateY(-10vw)');
		}
		if(scrollTop>=(experienceHeight)){
			$('.section-experience .second-exp .pc-box').css('transform','translateY(-5vw)');
		}
										
	})
})
