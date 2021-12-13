$(document).ready(function(){

	$('#main-nav-btn').click(function(){
			$('.main-nav').slideToggle(700);
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
			if($(window).innerWidth() > 640)
			{
					$('.main-nav').css('display','block');
			}
			else{
					$('.main-nav').css('display','none');
				setTimeout(function(){
					$('.active').addClass('not-active').removeClass('active');
				},600);

				}
		}

	
});

