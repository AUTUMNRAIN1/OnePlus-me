$(function(){
//	if($(window).width>"766px"){
//		$('.cq_navbar_header .collapse li a').hover(function(){
//			$(this).parent().animate({"border-bottom-width":"4px"});
//		},function(){
//			$(this).parent().animate({"border-bottom-width":"0px"});
//		});
		$(".main_img3 .img3_content li").hover(function(){
			$(".main_img3 .img3_content_mark").animate({"width":"100%"},100);
			$('.main_img3 .img3_content li a').css("color","#000");
		},function(){
			$(".main_img3 .img3_content_mark").animate({"width":"0%"},100);
			$('.main_img3 .img3_content li a').css("color","#fff");
		})
//	}
	$('.footA_left_xs div ul li:nth-child(1)').click(function(){
		$(this).siblings().slideToggle();
		$(this).find('span').toggleClass('arrow_down arrow_up');
	})
	//导航的搜索框箭头
	$('.cq_navbar_header .input-group .form-control').click(function(){
		$('.cq_navbar_header #cq_navbar').slideUp();
		$('.i-show-menu').toggleClass('i_show');
	})
	$('.i-show-menu i').click(function(){
		$(this).toggleClass('changed');
		$('.cq_navbar_header #cq_navbar').slideDown();
		$('.i-show-menu').removeClass('i_show');
//		alert(1)

	})
	
})
