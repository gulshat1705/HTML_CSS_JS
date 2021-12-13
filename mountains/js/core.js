$(document).ready(function(){
	$('#registr-form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			digits: {
				number: true,
				required: true,
				minlength: 8,
				maxlength: 40
			}
		},
		messages: {
			name:{
				required: "Введите ваше имя"
			},
			email: {
				required: "Введите ваш email адрес",
				email: "заполните email правильно"
			},
			digits: {
				required: "введите ваш номер телефона",
				number: "введите ваш номер телефона цифрами",
				minlength: "Минималное количество символов должно быть 8",
				maxlength: "Минималное количество символов должно быть 20"
			},
		}
	});	


	var open_modal = $('.open_modal');
	var overlay = $('.overlay');
	var modal = $('.modal');
	var close = $('.close, .overlay');
	$('#contact-form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			digits: {
				number: true,
				required: true,
				minlength: 8,
				maxlength: 40
			}
		},
		messages: {
			name:{
				required: "Введите ваше имя"
			},
			email: {
				required: "Введите ваш email адрес",
				email: "заполните email правильно"
			},
			digits: {
				required: "введите ваш номер телефона",
				number: "введите ваш номер телефона цифрами",
				minlength: "Минималное количество символов должно быть 8",
				maxlength: "Минималное количество символов должно быть 20"
			},
		}
	});

	open_modal.click(function(event){
		event.preventDefault;

		var current_modal = $(this).attr('href');
		overlay.fadeIn(700, function(){
			$(current_modal).css('display', 'block').animate({top: '285px'}, 400);
		});
	});

	close.click(function(){

		modal.fadeOut(700, function(){
			modal.css('top', '20%');
		});
		overlay.fadeOut(700);
	});

	$('.nav').on('click', 'a', function(event){
		event.proventDefault;
		var id = $(this).attr('href');
		var top = $(id).offset().top;

		$('body, html').animate({scrollTop: top},2000)
	});

	$(window).scroll(function(){

		var top_scroll = $(document).scrollTop();
		var top_fix = $('#gallery').offset().top - 5;

		if (top_scroll > top_fix) {
			$('header').css('top', '-80px').addClass('fix').animate({top: '0'}, 1000);
		} else {
			$('header').removeClass('fix');
		};

	});

});