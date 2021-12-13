$(document).ready(function(){
		$(window).scroll(function(){

		var top_scroll = $(document).scrollTop();
		var top_fix = $('#main').offset().top;

		if (top_scroll > top_fix) {
			$('.main-header').css('top', '-80px').addClass('fix').animate({top: '0'}, 100);
		} else {
			$('.main-header').removeClass('fix');
		};

	});

	$('.main-slide').slick({
		
	});
	$('.works-slide').slick({
		dots: true,
		arrows: false,
		asNavFor: '.works-slide-phone'
	});
	$('.works-slide-phone').slick({
		dots: false,
		arrows: false
	});

	$('#subs-input').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			email: {
				required: "Please enter your email",
				email: "Please enter your email correctly"
			}
		}
	});

	$('#contact-input').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			name:{
				required: "Please enter your name"
			},
			email: {
				required: "Please enter your email",
				email: "Please enter your email correctly"
			}
		}
	});

	var open_modal = $('.open_modal');
	var overlay = $('.overlay');
	var modal = $('.modal');
	var close = $('.close, .overlay');

	open_modal.click(function(event){
		event.preventDefault;

		var current_modal = $(this).attr('href');
		overlay.fadeIn(500, function(){
			$(current_modal).css('display', 'block').animate({top: '35px'}, 400);
		});
	});

	close.click(function(){

		modal.fadeOut(700, function(){
			modal.css('top', '20%');
		});
		overlay.fadeOut(700);
	});

	$("#estimate").slider();
	$("#estimate").on("slide", function(slideEvt) {
		$("#estimateSliderVal").text(slideEvt.value);
	});
	$("#frame").slider();
	$("#frame").on("slide", function(slideEvt) {
		$("#frameSliderVal").text(slideEvt.value);
	});

	var estimate = $('.project-estimate');
	$('.close-btn').click(function(){
		estimate.css('display', 'none');
	});

	$('.nav').on('click', 'a', function(event){
		event.proventDefault;
		var id = $(this).attr('href');
		var top = $(id).offset().top;

		$('body, html').animate({scrollTop: top},2000);
	});

});