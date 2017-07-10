$(function(){
	$('.section-dual-camera .first-content ol li').click(function(e){
		var idx = $(this).index();
//		alert(idx)
		$('.first-content .con-progress li').eq(idx).fadeIn().siblings().fadeOut();
		$(this).addClass('bgchanged').siblings().removeClass('bgchanged cq_active');
		$('.section-dual-camera .phone-box li').eq(idx).fadeIn().siblings().fadeOut();
//		e.preventDefault();
	})
})
