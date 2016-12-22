$(document).ready(function(){
	$(".menu-trigger").click(function() {
		$("nav ul").slideToggle(500);
	});
	 $(window).resize(function() {		
		if ( $(window).width() > 680 ) {			
			$('nav ul').removeAttr('style');
		 }
	});
	$('.slider__top').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	});
});