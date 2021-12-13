$(document).ready(function(){

	$('.main-nav__link-base-w-sub').mouseover(
	function(){
		$('.promo').css("margin-top", "-90px"),
		$('.header').css("height", "161px")
	});
	$('.main-nav__link-base-w-sub').mouseout(
	function(){
		$('.header').css("height", "71px"),
		$('.promo').css("margin-top", "0px")
	});
	$('.main-nav__sub-nav').mouseover(
	function(){
		$('.header').css("height", "161px"),
		$('.promo').css("margin-top", "-90px")
	});
	$('.main-nav__sub-nav').mouseout(
	function(){
		$('.header').css("height", "71px"),
		$('.promo').css("margin-top", "0px")
	});

	$('.quotes__slider').slick({
		dots: true
	});

	$('#main-nav-btn').click(function(){
			$('.main-nav-btn-act').slideToggle(700);
			if($('#main-nav-btn').hasClass('not-active')) {
				$('#main-nav-btn').addClass('active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.active').addClass('not-active').removeClass('active');
				},600)
			}
		});

	$(window).bind("resize load", checkPosition);

	function checkPosition()
		{
			if($(window).innerWidth() < 1050)
			{
					$('#header').addClass('header-for-vert-menu').removeClass('header');
					$('#promo').addClass('promo-vert').removeClass('promo');
					$('#main-nav').addClass('main-nav-vert').removeClass('main-nav');
					$('.main-nav-vert').css('display','none')
			}
			else{
					$('#header').addClass('header').removeClass('header-for-vert-menu');
					$('#promo').addClass('promo').removeClass('promo-vert');
					$('#main-nav').addClass('main-nav').removeClass('main-nav-vert');
					$('.main-nav').css('display','block')
				}
		}

});

