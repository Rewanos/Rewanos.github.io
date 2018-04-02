$(function() {

		$(window).on('load', function() {
	    	$('.loader').fadeOut('slow', function() {});
	  	});

	
		/* меню */
		$("#my-menu").mmenu({

			extensions: ['effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: 'Uberlang school',
			},
			offCanvas: {
				position: 'right',
			},

		});


		var api = $('#my-menu').data('mmenu');
		api.bind('open:start', function() {
			$('.hamburger').addClass('is-active');
		});
		api.bind('close:before', function() {
			$('.hamburger').removeClass('is-active');
		})


	$(".light").waypoint(function() {


		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".comp-stats h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".comp-stats h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "30",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '80%'
	});

	
	new WOW().init();

	function timer() {
		var nowDate = new Date();
		var achiveDate = new Date(2018,03,04,17,29,59); //Задаем дату, к которой будет осуществляться обратный отсчет
		var result = (achiveDate - nowDate)+1000;
		if (result < 0) {
			$('#info').addClass('hidden');
			var elmnt = document.getElementById('timer');
			elmnt.innerHTML = 'Акция завершена ';
			return undefined;
		}
		var seconds = Math.floor((result/1000)%60);
		var minutes = Math.floor((result/1000/60)%60);
		var hours = Math.floor((result/1000/60/60)%24);
		var days = Math.floor(result/1000/60/60/24);
		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		var elmnt = document.getElementById('timer');
		elmnt.innerHTML = days + ' ' + ':' + ' '  + hours + ' ' + ':' + ' ' + minutes + ' ' + ':' + ' ' + seconds;
		setTimeout(timer, 1000);
	}
	window.onload = function() {
		timer();
	}

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
});
