$(document).ready(function(){
	
	win_w = $(window).width();
	if ( win_w > 1400 ){
	
		$(document).on('click', '.menu5', function(){
			$.fn.fullpage.moveTo(7);
			$('.high_wrap').addClass('on');
			setTimeout(function() {
				$('.high_wrap').addClass('end');
			}, 800);
			$('.high_wrap').removeClass('active2 active3 end2 end3 on2 on3')
		});
		$(document).on('click', '.main_footer_bt', function(){
			$.fn.fullpage.moveTo(1);
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
			$('.navi,.ham').removeClass('black');
			$('.main_wrap').addClass('on');
			$('.brand_wrap,.ach_wrap,.sea_wrap,.amenity_wrap,.amenity_wrap2,.high_wrap').removeClass('active2 active3 end2 end3 on2 on3')
		});



		$('.main_mouse>div span').delay(4000).animate({'top':'70%','opacity':'0'},1200,function a(){
			$(this).css({'top':'20%','opacity':'1'})
			$(this).delay(500).animate({'top':'70%','opacity':'0'},1200,a)
		})
		$('.pop_wrap').delay(3800).animate({'opacity':'1'},0,function(){
			$('.pop_wrap').addClass('pop')
		})
		$('.pop_close').click(function(){
			$('.pop_wrap').removeClass('pop')
		})
		/*
		$('.banner_wrap').delay(3800).animate({'opacity':'1'},0,function(){
			$('body.main .banner_wrap').addClass('pop')
			$('body.main .navi').addClass('pop')
			$('body.main .ham').addClass('pop')
		})
		$('.banner_close').click(function(){
			$('body.main .banner_wrap').removeClass('pop')
			$('body.main .navi').removeClass('pop')
		})*/
		$('.main_wrap').delay(0).animate({'opacity':'1'},0,function(){
			$('.main_wrap').addClass('on');
		})
		
		

	//brand
		var full_move = true;
		$("#section2").on("DOMMouseScroll mousewheel wheel", function(event,delta){

			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);

			if (delta > 0) {
				if($('.brand_wrap').hasClass('end2') == true){
					$('.navi,.ham').addClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.brand_wrap').removeClass('end2 active2').addClass('on');
					setTimeout(function() {
						$('.brand_wrap').removeClass('on2').addClass('end');
					}, 800);
				} else if($('.brand_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(1);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
				}
				if($('.brand_wrap').hasClass('end3') == true){
					$('.navi,.ham').removeClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.brand_wrap').removeClass('end3 active3').addClass('active2 on2');
					setTimeout(function() {
						$('.brand_wrap').removeClass('on3').addClass('end2');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.brand_wrap').hasClass('end2') == true){
					$('.navi,.ham').addClass('black');
					$('.brand_wrap').removeClass('end2 active2').addClass('active3 on3');
					setTimeout(function() {
						$('.brand_wrap').removeClass('on2').addClass('end3');
					}, 800);
				} else if($('.brand_wrap').hasClass('end') == true){
					$('.navi,.ham').removeClass('black');
					$('.brand_wrap').removeClass('end').addClass('active2 on2');
					setTimeout(function() {
						$('.brand_wrap').removeClass('on').addClass('end2');
					}, 800);
				}
				if ($('.brand_wrap').hasClass('end3') == true){
					$.fn.fullpage.moveTo(3);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.brand_wrap').removeClass('end3');
					setTimeout(function() {
						$('.brand_wrap').removeClass('on3');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section2').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section2').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.brand_wrap').hasClass('end2') == true){
						$('.navi,.ham').addClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.brand_wrap').removeClass('end2 active2').addClass('on');
						setTimeout(function() {
							$('.brand_wrap').removeClass('on2').addClass('end');
						}, 800);
					} else if($('.brand_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(1);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
					}
					if($('.brand_wrap').hasClass('end3') == true){
						$('.navi,.ham').removeClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.brand_wrap').removeClass('end3 active3').addClass('active2 on2');
						setTimeout(function() {
							$('.brand_wrap').removeClass('on3').addClass('end2');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.brand_wrap').hasClass('end2') == true){
						$('.navi,.ham').addClass('black');
						$('.brand_wrap').removeClass('end2 active2').addClass('active3 on3');
						setTimeout(function() {
							$('.brand_wrap').removeClass('on2').addClass('end3');
						}, 800);
					} else if($('.brand_wrap').hasClass('end') == true){
						$('.navi,.ham').removeClass('black');
						$('.brand_wrap').removeClass('end').addClass('active2 on2');
						setTimeout(function() {
							$('.brand_wrap').removeClass('on').addClass('end2');
						}, 800);
					}
					if ($('.brand_wrap').hasClass('end3') == true){
						$.fn.fullpage.moveTo(3);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.brand_wrap').removeClass('end3');
						setTimeout(function() {
							$('.brand_wrap').removeClass('on3');
						}, 800);
					}
				}
		});

		//ach
		$("#section3").on("DOMMouseScroll mousewheel wheel", function(event,delta){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if($('.ach_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(2);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.ach_wrap,.brand_wrap').removeClass('end');
					setTimeout(function() {
						$('.ach_wrap').removeClass('on');
						$('.brand_wrap').addClass('end3');
					}, 800);
				} else if($('.ach_wrap').hasClass('end2') == true){
					$('.ach_wrap').removeClass('end2 active2').addClass('on');
					setTimeout(function() {
						$('.ach_wrap').removeClass('on2').addClass('end');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.ach_wrap').hasClass('end2') == true){
					$.fn.fullpage.moveTo(4);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.ach_wrap').removeClass('end2');
					setTimeout(function() {
						$('.ach_wrap').removeClass('on2');
					}, 800);
				} else if($('.ach_wrap').hasClass('end') == true){
					$('.ach_wrap').removeClass('end').addClass('active2 on2');
					setTimeout(function() {
						$('.ach_wrap').removeClass('on').addClass('end2');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section3').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section3').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.ach_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(2);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.ach_wrap,.brand_wrap').removeClass('end');
						setTimeout(function() {
							$('.ach_wrap').removeClass('on');
							$('.brand_wrap').addClass('end3');
						}, 800);
					} else if($('.ach_wrap').hasClass('end2') == true){
						$('.ach_wrap').removeClass('end2 active2').addClass('on');
						setTimeout(function() {
							$('.ach_wrap').removeClass('on2').addClass('end');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.ach_wrap').hasClass('end2') == true){
						$.fn.fullpage.moveTo(4);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.ach_wrap').removeClass('end2');
						setTimeout(function() {
							$('.ach_wrap').removeClass('on2');
						}, 800);
					} else if($('.ach_wrap').hasClass('end') == true){
						$('.ach_wrap').removeClass('end').addClass('active2 on2');
						setTimeout(function() {
							$('.ach_wrap').removeClass('on').addClass('end2');
						}, 800);
					}
				}
		});


	//sea
		$("#section4").on("DOMMouseScroll mousewheel wheel", function(event,delta){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if($('.sea_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(3);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.ach_wrap').removeClass('on end').addClass('active2 end2');
					$('.sea_wrap').removeClass('end');
					setTimeout(function() {
						$('.sea_wrap').removeClass('on');
						$('.premium_wrap').addClass('end2');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.sea_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(5);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.amenity_wrap').removeClass('end3');
					$('.sea_wrap').removeClass('end');
					setTimeout(function() {
						$('.sea_wrap').removeClass('on');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section4').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section4').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.sea_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(3);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.ach_wrap').removeClass('on end').addClass('active2 end2');
						$('.sea_wrap').removeClass('end');
						setTimeout(function() {
							$('.sea_wrap').removeClass('on');
							$('.premium_wrap').addClass('end2');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.sea_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(5);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.amenity_wrap').removeClass('end3');
						$('.sea_wrap').removeClass('end');
						setTimeout(function() {
							$('.sea_wrap').removeClass('on');
						}, 800);
					}
				}
		});

	//amenity
		$("#section5").on("DOMMouseScroll mousewheel wheel", function(event,delta){

			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);

			if (delta > 0) {
				if($('.amenity_wrap').hasClass('end2') == true){
					$('.navi,.ham').removeClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.amenity_wrap').removeClass('end2 active2').addClass('on');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on2').addClass('end');
					}, 800);
				} else if($('.amenity_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(4);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.premium_wrap').removeClass('on end').addClass('active2 end2');
					$('.amenity_wrap').removeClass('end');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on');
						$('.sea_wrap').addClass('end');
					}, 800);
				}
				if($('.amenity_wrap').hasClass('end3') == true){
					$('.navi,.ham').addClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.amenity_wrap').removeClass('end3 active3').addClass('active2 on2');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on3').addClass('end2');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.amenity_wrap').hasClass('end2') == true){
					$('.navi,.ham').removeClass('black');
					$('.amenity_wrap').removeClass('end2 active2').addClass('active3 on3');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on2').addClass('end3');
					}, 800);
				} else if($('.amenity_wrap').hasClass('end') == true){
					$('.navi,.ham').addClass('black');
					$('.amenity_wrap').removeClass('end').addClass('active2 on2');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on').addClass('end2');
					}, 800);
				}
				if ($('.amenity_wrap').hasClass('end3') == true){
					$.fn.fullpage.moveTo(6);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.amenity_wrap').removeClass('end3');
					setTimeout(function() {
						$('.amenity_wrap').removeClass('on3');
					}, 800);
				}
			}
		});
	//
		$('#section5').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section5').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.amenity_wrap').hasClass('end2') == true){
						$('.navi,.ham').removeClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.amenity_wrap').removeClass('end2 active2').addClass('on');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on2').addClass('end');
						}, 800);
					} else if($('.amenity_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(4);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.premium_wrap').removeClass('on end').addClass('active2 end2');
						$('.amenity_wrap').removeClass('end');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on');
							$('.sea_wrap').addClass('end');
						}, 800);
					}
					if($('.amenity_wrap').hasClass('end3') == true){
						$('.navi,.ham').addClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.amenity_wrap').removeClass('end3 active3').addClass('active2 on2');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on3').addClass('end2');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.amenity_wrap').hasClass('end2') == true){
						$('.navi,.ham').removeClass('black');
						$('.amenity_wrap').removeClass('end2 active2').addClass('active3 on3');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on2').addClass('end3');
						}, 800);
					} else if($('.amenity_wrap').hasClass('end') == true){
						$('.navi,.ham').addClass('black');
						$('.amenity_wrap').removeClass('end').addClass('active2 on2');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on').addClass('end2');
						}, 800);
					}
					if ($('.amenity_wrap').hasClass('end3') == true){
						$.fn.fullpage.moveTo(6);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.amenity_wrap').removeClass('end3');
						setTimeout(function() {
							$('.amenity_wrap').removeClass('on3');
						}, 800);
					}
				}
		});
		

	//amenity2
		$("#section6").on("DOMMouseScroll mousewheel wheel", function(event,delta){

			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);

			if (delta > 0) {
				if($('.amenity_wrap2').hasClass('end2') == true){
					$('.navi,.ham').addClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.amenity_wrap2').removeClass('end2 active2').addClass('on');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on2').addClass('end');
					}, 800);
				} else if($('.amenity_wrap2').hasClass('end') == true){
					$.fn.fullpage.moveTo(5);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.amenity_wrap').removeClass('on end').addClass('active3 end3');
					$('.amenity_wrap2').removeClass('end');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on');
						$('.sea_wrap').addClass('end');
					}, 800);
				}
				if($('.amenity_wrap2').hasClass('end3') == true){
					$('.navi,.ham').removeClass('black');
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
					$('.amenity_wrap2').removeClass('end3 active3').addClass('active2 on2');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on3').addClass('end2');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.amenity_wrap2').hasClass('end2') == true){
					$('.navi,.ham').addClass('black');
					$('.amenity_wrap2').removeClass('end2 active2').addClass('active3 on3');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on2').addClass('end3');
					}, 800);
				} else if($('.amenity_wrap2').hasClass('end') == true){
					$('.navi,.ham').removeClass('black');
					$('.amenity_wrap2').removeClass('end').addClass('active2 on2');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on').addClass('end2');
					}, 800);
				}
				if ($('.amenity_wrap2').hasClass('end3') == true){
					$.fn.fullpage.moveTo(7);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.amenity_wrap2').removeClass('end3');
					setTimeout(function() {
						$('.amenity_wrap2').removeClass('on3');
					}, 800);
				}
			}
		});
	//
		$('#section6').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section6').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.amenity_wrap2').hasClass('end2') == true){
						$('.navi,.ham').addClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.amenity_wrap2').removeClass('end2 active2').addClass('on');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on2').addClass('end');
						}, 800);
					} else if($('.amenity_wrap2').hasClass('end') == true){
						$.fn.fullpage.moveTo(5);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.amenity_wrap').removeClass('on end').addClass('active3 end3');
						$('.amenity_wrap2').removeClass('end');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on');
							$('.sea_wrap').addClass('end');
						}, 800);
					}
					if($('.amenity_wrap2').hasClass('end3') == true){
						$('.navi,.ham').removeClass('black');
						$.fn.fullpage.setAllowScrolling(false);
						$.fn.fullpage.setKeyboardScrolling(false);
						$('.amenity_wrap2').removeClass('end3 active3').addClass('active2 on2');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on3').addClass('end2');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.amenity_wrap2').hasClass('end2') == true){
						$('.navi,.ham').addClass('black');
						$('.amenity_wrap2').removeClass('end2 active2').addClass('active3 on3');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on2').addClass('end3');
						}, 800);
					} else if($('.amenity_wrap2').hasClass('end') == true){
						$('.navi,.ham').removeClass('black');
						$('.amenity_wrap2').removeClass('end').addClass('active2 on2');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on').addClass('end2');
						}, 800);
					}
					if ($('.amenity_wrap2').hasClass('end3') == true){
						$.fn.fullpage.moveTo(7);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.amenity_wrap2').removeClass('end3');
						setTimeout(function() {
							$('.amenity_wrap2').removeClass('on3');
						}, 800);
					}
				}
		});

		//high
		$("#section7").on("DOMMouseScroll mousewheel wheel", function(event,delta){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if($('.high_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(6);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.high_wrap,.amenity_wrap2').removeClass('end');
					setTimeout(function() {
						$('.high_wrap').removeClass('on');
						$('.amenity_wrap2').addClass('end3');
					}, 800);
				} else if($('.high_wrap').hasClass('end2') == true){
					$('.high_wrap').removeClass('end2 active2').addClass('on');
					setTimeout(function() {
						$('.high_wrap').removeClass('on2').addClass('end');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.high_wrap').hasClass('end2') == true){
					$.fn.fullpage.moveTo(8);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.high_wrap').removeClass('end2');
					setTimeout(function() {
						$('.high_wrap').removeClass('on2');
					}, 800);
				} else if($('.high_wrap').hasClass('end') == true){
					$('.high_wrap').removeClass('end').addClass('active2 on2');
					setTimeout(function() {
						$('.high_wrap').removeClass('on').addClass('end2');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section7').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section7').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.high_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(6);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.high_wrap,.amenity_wrap2').removeClass('end');
						setTimeout(function() {
							$('.high_wrap').removeClass('on');
							$('.amenity_wrap2').addClass('end3');
						}, 800);
					} else if($('.high_wrap').hasClass('end2') == true){
						$('.high_wrap').removeClass('end2 active2').addClass('on');
						setTimeout(function() {
							$('.high_wrap').removeClass('on2').addClass('end');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.high_wrap').hasClass('end2') == true){
						$.fn.fullpage.moveTo(8);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.high_wrap').removeClass('end2');
						setTimeout(function() {
							$('.high_wrap').removeClass('on2');
						}, 800);
					} else if($('.high_wrap').hasClass('end') == true){
						$('.high_wrap').removeClass('end').addClass('active2 on2');
						setTimeout(function() {
							$('.high_wrap').removeClass('on').addClass('end2');
						}, 800);
					}
				}
		});

	//contact
		$("#section8").on("DOMMouseScroll mousewheel wheel", function(event,delta){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if($('.contact_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(7);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.high_wrap').removeClass('on end').addClass('active2 end2');
					$('.contact_wrap').removeClass('end');
					setTimeout(function() {
						$('.contact_wrap').removeClass('on');
						$('.premium_wrap').addClass('end2');
					}, 800);
				}
			} else if (delta < 0) {
				if($('.contact_wrap').hasClass('end') == true){
					$.fn.fullpage.moveTo(9);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.amenity_wrap').removeClass('end3');
					$('.contact_wrap').removeClass('end');
					setTimeout(function() {
	//					$('.contact_wrap').removeClass('on');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section8').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section8').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.contact_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(7);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.high_wrap').removeClass('on end').addClass('active2 end2');
						$('.contact_wrap').removeClass('end');
						setTimeout(function() {
							$('.contact_wrap').removeClass('on');
							$('.premium_wrap').addClass('end2');
						}, 800);
					}
				}
				if(dir == 'down'){
					if($('.contact_wrap').hasClass('end') == true){
						$.fn.fullpage.moveTo(9);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.amenity_wrap').removeClass('end3');
						$('.contact_wrap').removeClass('end');
						setTimeout(function() {
	//						$('.contact_wrap').removeClass('on');
						}, 800);
					}
				}
		});

	//footer
		$("#section9").on("DOMMouseScroll mousewheel wheel", function(event,delta){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			if (delta > 0) {
				if($('.footer').hasClass('end') == true){
					$.fn.fullpage.moveTo(8);
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
					$('.footer').removeClass('end');
					setTimeout(function() {
						$('.amenity_wrap').addClass('end3');
					}, 800);
				}
			}
		});
	//
		var lastY;
		var dir;
		$('#section9').on("touchmove.evtTouch", function(e){
			$.fn.fullpage.setAllowScrolling(false);
			$.fn.fullpage.setKeyboardScrolling(false);
			var currentY = e.originalEvent.touches[0].clientY;
			if(currentY > lastY){
				dir = 'up';
			}else if(currentY < lastY){
				dir = 'down';
			}
			lastY = currentY;
		});
		$('#section6').on("touchend.evtTouch", function(e){
				if(dir == 'up'){
					if($('.footer').hasClass('end') == true){
						$.fn.fullpage.moveTo(5);
						$.fn.fullpage.setAllowScrolling(true);
						$.fn.fullpage.setKeyboardScrolling(true);
						$('.footer').removeClass('end');
						setTimeout(function() {
							$('.amenity_wrap').addClass('end3');
						}, 800);
					}
				}
		});

//		

		$('#fullpage').fullpage({
			
			responsiveWidth: 1400,
			navigation: true,
	//		anchors: ['part1','part2','part3','part4','part5','part6','part7','part8'],
			'verticalCentered': true,
			'css3': true,
			'navigation': false,
			scrollingSpeed: 800,
		
			'afterLoad': function(anchorLink, index){

				if(index == 1){
					$.fn.fullpage.setAllowScrolling(true);
					$.fn.fullpage.setKeyboardScrolling(true);
				} else {
					$('.main_wrap').removeClass('on');
				}

				if(index == 2){				
				} else {
					$('.brand_wrap').removeClass('on');
				}

				if(index == 3){
				}else {

				}

				if(index == 4){
				}else {

				}
				
				if(index == 5){
				}else {

				}
				
				if(index == 6){
				}else {
				}
					
	//	
	//						if(index == 4){
	//						}
	//						else {			
	//						}



			},
			'onLeave' : function (index, nextIndex, direction){

				if (index == 1 && direction == 'down'){
					$('.navi,.ham').addClass('black');
					$('.brand_wrap').addClass('on');
					setTimeout(function() {
						$('.brand_wrap').addClass('end');
					}, 800);
					$.fn.fullpage.setAllowScrolling(false);
					$.fn.fullpage.setKeyboardScrolling(false);
				};


				if (index == 2 && direction == 'up'){
					$('.navi,.ham').removeClass('black');
					$('.main_wrap').addClass('on');
				} else if (index == 2 && direction == 'down'){
					$('.navi,.ham').addClass('black');
					$('.ach_wrap').addClass('on');
					setTimeout(function() {
						$('.ach_wrap').addClass('end');
					}, 800);
				};

				if (index == 3 && direction == 'up'){
					$('.navi,.ham').addClass('black');
					$('.brand_wrap').addClass('on3');
				} else if (index == 3 && direction == 'down'){
					$('.sea_wrap').addClass('on');
					setTimeout(function() {
						$('.sea_wrap').addClass('end');
					}, 800);
				};

				if (index == 4 && direction == 'up'){
					$('.navi,.ham').addClass('black');
					$('.ach_wrap').addClass('on2');
				} else if (index == 4 && direction == 'down'){
					$('.navi,.ham').removeClass('black');
					$('.amenity_wrap').addClass('on');
					setTimeout(function() {
						$('.amenity_wrap').addClass('end');
					}, 800);
				};

				if (index == 5 && direction == 'up'){
					$('.navi,.ham').addClass('black');
					$('.sea_wrap').addClass('on');
				} else if (index == 5 && direction == 'down'){
					$('.navi,.ham').addClass('black');
					$('.amenity_wrap2').addClass('on');
					setTimeout(function() {
						$('.amenity_wrap2').addClass('end');
					}, 800);
				};

				if (index == 6 && direction == 'up'){
					$('.navi,.ham').removeClass('black');
					$('.amenity_wrap').addClass('on3');
				} else if (index == 6 && direction == 'down'){
					$('.navi,.ham').removeClass('black');
					$('.high_wrap').addClass('on');
					setTimeout(function() {
						$('.high_wrap').addClass('end');
					}, 800);
				};

				if (index == 7 && direction == 'up'){
					$('.navi,.ham').addClass('black');
					$('.amenity_wrap2').addClass('on3');
				} else if (index == 7 && direction == 'down'){
					$('.navi,.ham').addClass('black');
					$('.contact_wrap').addClass('on');
					setTimeout(function() {
						$('.contact_wrap').addClass('end');
					}, 800);
				};

				if (index == 8 && direction == 'up'){
					$('.navi,.ham').removeClass('black');
					$('.high_wrap').addClass('on2');
					setTimeout(function() {
					$('.high_wrap').addClass('on');
					}, 800);
				} else if (index == 8 && direction == 'down'){
					$('header').fadeOut();
					setTimeout(function() {
						$('.footer').addClass('end');
					}, 800);

				};

				if (index == 9 && direction == 'up'){
					$('header').fadeIn();
					setTimeout(function() {
						$('.contact_wrap').addClass('end');
					}, 800);
				} else if (index == 8 && direction == 'down'){

				};
			},

		});

//fallpage끝
	}

/**/


	ham = 0
	$('.ham').click(function(){
		if( ham == 0 ){  
			ham = 1; 
			$("#sitemapContent").removeClass("close").addClass("open");
			$(".sitemap-wrapper").addClass("menu-open");
			$(".sitemap-open-btn, .sitemap-close-btn").addClass("active");
			$(this).addClass("active");
		}
		else if ( ham == 1 ){
			ham = 0;
			$("#sitemapContent").removeClass("open").addClass("close");
			$(".sitemap-wrapper").removeClass("menu-open");
			$(".sitemap-open-btn, .sitemap-close-btn").removeClass("active");
			$(this).removeClass("active");
		}
	})
		 

	ck = 0
	$('.click_box').click(function(){
		if( ck == 0 ){  
			ck = 1; 
			$('.click_box').addClass('active')
			$('.click_box ul').css({'display':'flex'})			
		}
		else if ( ck == 1 ){
			ck = 0;
			$('.click_box').removeClass('active')
			$('.click_box ul').css({'display':'none'})	
		}
	})


	$('.call,.tel p').mouseover(function(){
		$('.tel').addClass('active')
	})
	$('.call,.tel p').mouseleave(function(){
		$('.tel').removeClass('active')
	})

	$('.gnb').mouseover(function(){
		$('.ham').addClass('black2')
	})
	$('.gnb').mouseleave(function(){
		$('.ham').removeClass('black2')
	})

	$('.main_footer_bt').click(function(){
		$('body,html').animate({'scrollTop':'0'},800)
	})

	$('.scroll_circle span').delay(0).show(0,function aa(){
		$(this).animate({'width':'0','height':'0'},1100,'easeOutQuad',function(){
			$(this).delay(200).animate({'width':'100%','height':'100%'},1100,'easeOutQuad',function(){
				$(this).animate({'opacity':'1'},600,aa)
			})
		})
	})
	$('.main_scroll span').delay(0).show(0,function bb(){
		$(this).animate({'top':'0'},1100,'easeOutQuad',function(){
			$(this).delay(200).animate({'top':'100%'},1100,'easeOutQuad',function(){
				$(this).css({'top':'-100%'})
				$(this).animate({'opacity':'1'},600,bb)
			})
		})
	})


	$('.top_bt').click(function(){
		$('body,html').animate({'scrollTop':'0'},400)
	})


	const trigger = new ScrollTrigger.default({
	  trigger: {
//			once: true,
			offset: {
            element: {
                x: 0,
                y: 0.05
            },
//			viewport: {
//                x: 0,
//                y: (trigger, frame, direction) => {
//                    return trigger.visible ? 0 : 0.3
//                }
//             }
        },
		toggle:{
			class:{
				in:'active',
				out:'inactive'
			}
		}

	  }
	});
	trigger.add('[data-active]')
//			.add('[data-slideInBottom]')
//			.add('[data-fadeIn]')
//			.add('[data-slideInBottom]')


/**/

	$('.register_box').click(function(){
		$('body,html').animate({'scrollTop':guestTop},800)
	})

	$('.click_box ul li:nth-child(2) a,.more_box ul li:nth-child(1) a').click(function(){
		$('.guest_wrap').addClass('active')
		$('.guest_bg').addClass('active')
	})
	$('.guest_close,.guest_bg').click(function(){
		$('.guest_wrap').removeClass('active')
		$('.guest_bg').removeClass('active')
	})

	$('a,.btn').mouseover(function(){
		$('#cursor').addClass('arrow')
	})
	$('a,.btn').mouseleave(function(){
		$('#cursor').removeClass('arrow')
	})

	$('.swiper-container,.design_img').mouseover(function(){
		$('#cursor').addClass('drag')
	})
	$('.swiper-container,.design_img').mouseleave(function(){
		$('#cursor').removeClass('drag')
	})

	const cursor = document.querySelector('#cursor');
	const cursorCircle = cursor.querySelector('.cursor__circle');

	const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
	const pos = { x: 0, y: 0 }; // cursor's coordinates
	const speed = 0.2; // between 0 and 1

	const updateCoordinates = e => {
	  mouse.x = e.clientX;
	  mouse.y = e.clientY;
	}

	window.addEventListener('mousemove', updateCoordinates);


	function getAngle(diffX, diffY) {
	  return Math.atan2(diffY, diffX) * 180 / Math.PI;
	}

	function getSqueeze(diffX, diffY) {
	  const distance = Math.sqrt(
		Math.pow(diffX, 2) + Math.pow(diffY, 2)
	  );
	  const maxSqueeze = 0.15;
	  const accelerator = 1500;
	  return Math.min(distance / accelerator, maxSqueeze);
	}


	const updateCursor = () => {
	  const diffX = Math.round(mouse.x - pos.x);
	  const diffY = Math.round(mouse.y - pos.y);
	  
	  pos.x += diffX * speed;
	  pos.y += diffY * speed;
	  
	  const angle = getAngle(diffX, diffY);
	  const squeeze = getSqueeze(diffX, diffY);
	  
	  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
	  const rotate = 'rotate(' + angle +'deg)';
	  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

	  cursor.style.transform = translate;
	  cursorCircle.style.transform = rotate + scale;
	};

	function loop() {
	  updateCursor();
	  requestAnimationFrame(loop);
	}

	requestAnimationFrame(loop);



	const cursorModifiers = document.querySelectorAll('[cursor-class]');

	cursorModifiers.forEach(curosrModifier => {
	  curosrModifier.addEventListener('mouseenter', function() {
		const className = this.getAttribute('cursor-class');
		cursor.classList.add(className);
	  });
	  
	  curosrModifier.addEventListener('mouseleave', function() {
		const className = this.getAttribute('cursor-class');
		cursor.classList.remove(className);
	  });
	});

/**/

});




 


$(window).scroll(function(){

	sc = $(window).scrollTop();


	if ( sc>21 )
	{
		$('.navi').addClass('active')
		$('.ham').addClass('active2')
	}
	if ( sc<21 )
	{
		$('.navi').removeClass('active')
		$('.ham').removeClass('active2')
	}
/* 
	if( val <= sc ){
		$('.footer_guest').addClass('active');
	} else {
		$('.footer_guest').removeClass('active');
	}

*/

});