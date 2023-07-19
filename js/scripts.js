
$(document).ready(function() {
	
	"use strict";
	
	FirstLoad();
	HeroSection();
	AjaxLoad();
	HideShowHeader();
	FullPage();
	MasonryPortfolio();
	VirtualScr();
	FooterAppear();
	Sliders();
	Lightbox();
	AppearIteam();
	BackToTop();
	ContactForm();
	CollagePlus();
	PageShare();
	PageChat();
});

$(window).on("load", function() {
	LazyLoad();
});


/*--------------------------------------------------
Function Firs tLoad
---------------------------------------------------*/	

	function FirstLoad() {
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		$('.has-animation').removeClass('animate-in');
		
		$('.section-image').each(function() {
			var image = $(this).data('src');
	
			$(this).css({
				'background-image': 'url(' + image + ')'
			});
		});
		
		$('.project-next').on('click', function() {	
			$('#main').addClass('hidden');
			$('header').addClass('menu-open');
		});		
		
		$('a.ajax-link').on('click', function() {
			$("main").removeClass("hide-po");
			setTimeout( function(){				
				TweenMax.to($(".animate-box-bottom"), 0.5, {force3D:true, yPercent:0,ease:Power2.easeInOut  });
				$('#main').addClass('hidden');
			} , 10 );
		});
		
		$('a.view-project').on('click', function() {
			$("#page-content");
			$('#fp-nav').css({opacity: '0',});
			$('footer').fadeOut(500);
			$("main").addClass("hide-po");
			
		});		
		
		$('.nav-title').on('mouseenter', function() {
			$(".nav-project-title").addClass('hover');
		}).on('mouseleave', function() {
			$(".nav-project-title").removeClass('hover');
		});		
		
		$('#open-filters, #sharetheme').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
			setTimeout( function(){
				$('.bg-lines').toggleClass('overall');
			} , 50 );
		});
		
		$('.close-page-action').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
			setTimeout( function(){
				$('.bg-lines').toggleClass('overall');
			} , 500 );
		});
		
		$("header.solid, #image-border-left, #image-border-right").css('background', function () {
			return $("#page-content").data('bgcolor')
		});	
		
		$(".hero-title, #open-filters, #open-share, #backtoworks, [data-tooltip], .light-content a.link, .post-title, .blog-numbers").css('color', function () {
			return $("#page-content").data('textcolor')
		});	
		
		if( jQuery('.tooltip-hover').length > 0 ){			
				
			var tooltips = document.querySelectorAll('.item-overlay');
	
			window.onmousemove = function (e) {
				var x = (e.clientX + 20) + 'px',
					y = (e.clientY + 20) + 'px';
				for (var i = 0; i < tooltips.length; i++) {
					tooltips[i].style.top = y;
					tooltips[i].style.left = x;
				}
			};
			
		}
		
		$('a.project-link').on('click', function() {
			$('#portfolio').addClass('hidden');
			setTimeout( function(){
				TweenMax.to($(".animate-box-bottom"), 0.5, {force3D:true, yPercent:0,ease:Power2.easeInOut  });
			} , 100 );
			
		});
		
		$('#burger-circle, #close-menu').on('click', function() {
			$("main").removeClass("hide-po");
			setTimeout( function(){
			if( $('#showcase-slider').length > 0 ){			
				if ($('#menu-burger').hasClass("open")) {
					$.fn.fullpage.setAllowScrolling(true);
				} else {
					$.fn.fullpage.setAllowScrolling(false);
				}			
			}
			setTimeout( function(){
				$('header').toggleClass('open');
			} , 100 );			
			setTimeout( function(){
				$('.bg-lines').toggleClass('overall');
			} , 300 );
			$('#menu-burger').toggleClass('open');
			setTimeout( function(){
				$('#burger-circle').toggleClass('white');
				$('#menu-burger').toggleClass('white');
			} , 800 );
			$('#menu-overlay').toggleClass('active');
			$(".page-overlay").addClass("from-left");
			setTimeout( function(){
				$(".page-overlay").addClass("from-left-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-left");
					$(".page-overlay").removeClass("from-left-end");
				} , 1300 );
			} , 600 );
			} , 20 );
		});
		
		$('nav li.has-sub > a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});	
		
		
			$('#burger-wrapper').mouseleave(function(e){
			     TweenMax.to(this, 0.3, {scale: 1});
			     TweenMax.to('#burger-circle, #menu-burger', 0.3,{scale:1, x: 0, y: 0});			  
			});
			
			$('#burger-wrapper').mouseenter(function(e){
			     TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
			     TweenMax.to('#burger-circle', 0.3,{scale: 1.3});
			});
			
			$('#burger-wrapper').mousemove(function(e){   
			  callParallax(e);
			});
			
			function callParallax(e){
			  parallaxIt(e, '#burger-circle', 60);
			  parallaxIt(e, '#menu-burger', 40);
			}
			
			function parallaxIt(e, target, movement){
			  var $this = $('#burger-wrapper');
			  var boundingRect = $this[0].getBoundingClientRect();
			  var relX = e.pageX - boundingRect.left;
			  var relY = e.pageY - boundingRect.top;
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			
			  TweenMax.to(target, 0.3, {
				x: (relX - boundingRect.width/2) / boundingRect.width * movement,
				y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
				ease: Power2.easeOut
			  });
			}
		
		
	}// End First Load
	
/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/
	
	function HeroSection() {
		
		if( $('#hero').length > 0 ){
			var HeroCaption = document.getElementById('hero-caption');				
			var windowScrolled;
			window.addEventListener('scroll', function windowScroll() {
				windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
				if ($('#hero-styles').hasClass("scale-onscroll")) {
					HeroCaption.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
				}
				if ($('#hero-styles').hasClass("parallax-onscroll")) {
					HeroCaption.style.transform = 'translate3d(' + windowScrolled / -2.5 + 'px, 0, 0)';
				}
				if ($('#hero-styles').hasClass("opacity-onscroll")) {
					HeroCaption.style.opacity =  (1 - (windowScrolled/20) / 20);
				}				
			});		
		}
		
		if( $('.bg-text').length > 0 ){
			var HeroBgTextLeft = document.getElementById('text-left');
			var HeroBgTextRight = document.getElementById('text-right');
			var windowScrolled;
			window.addEventListener('scroll', function windowScroll() {
				windowScrolled = window.pageYOffset || document.documentElement.scrollTop;			
				
				HeroBgTextLeft.style.transform = 'translate3d(' + windowScrolled / -4.5 + 'px, 0, 0)';
				HeroBgTextLeft.style.opacity =  (1 - (windowScrolled/40) / 20);
				
				HeroBgTextRight.style.transform = 'translate3d(' + windowScrolled / -5.5 + 'px, 0, 0)';
				HeroBgTextRight.style.opacity =  (1 - (windowScrolled/25) / 20);
			});		
		}
		
		
		$('.hero-one, .hero-two, .hero-three').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		})
	}//End Hero Section	
	
	

/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {		
		
		$('body').removeClass('hidden');				
		setTimeout( function(){			
		$("#showcase-slider").addClass("animate");
		} , 400 );
		setTimeout( function(){			
			HeroColor();
			
			if( $('#hero-image').length > 0 ){
			$('#hero-image').waitForImages({
				finished: function() {
					TweenMax.to($(".animate-box-bottom"), 0.7, {force3D:true, yPercent: -100,ease:Power3.easeInOut  });
					setTimeout( function(){
						TweenMax.set($(".animate-box-bottom"), {y:"100%"});
					} , 700 );					
					TweenMax.to($("#bg-text, .bg-text"), 0.3, {force3D:true, opacity:1,ease:Power3.easeInOut  });					 
					setTimeout( function(){
						$(".scroll-down-wrap").addClass("animate");	
					} , 700 );					
				},
				waitForAll: true
			});
			
			} else {
				TweenMax.to($(".animate-box-bottom"), 0.7, {force3D:true, yPercent: -100,ease:Power3.easeInOut  });
				setTimeout( function(){
					TweenMax.set($(".animate-box-bottom"), {y:"100%"});
				} , 700 );				
				TweenMax.to($("#bg-text, .bg-text"), 0.3, {force3D:true, opacity:1,ease:Power3.easeInOut  });
								
			}
		} , 250 );
		
		
	
	}// End Lazy Load	
	
	
	
/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/	

	function AjaxLoad() {		
		
		jQuery(document).ready(function(){
		  var isAnimating = false,
			newLocation = '';
			firstLoad = false;
		  
		  //trigger smooth transition from the actual page to the new one 
		  $('main').on('click', '[data-type="page-transition"]', function(event){
			event.preventDefault();
			//detect which page has been selected
			var newPage = $(this).attr('href');
			//if the page is not already being animated - trigger animation
			if( !isAnimating ) changePage(newPage, true);
			firstLoad = true;
		  });
		
		  //detect the 'popstate' event - e.g. user clicking the back button
		  $(window).on('popstate', function() {
			if( firstLoad ) {
			  /*
			  Safari emits a popstate event on page load - check if firstLoad is true before animating
			  if it's false - the page has just been loaded 
			  */
			  var newPageArray = location.pathname.split('/'),
				//this is the url of the page to be loaded 
				newPage = newPageArray[newPageArray.length - 1];
		
			  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
			}
			firstLoad = true;
			});
		
			function changePage(url, bool) {
			isAnimating = true;
			// trigger page animation
			$('body').addClass('page-is-changing');
			$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				loadNewContent(url, bool);
			  	newLocation = url;
			  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
			//if browser doesn't support CSS transitions
			if( !transitionsSupported() ) {
			  loadNewContent(url, bool);
			  newLocation = url;
			}
			}
		
			function loadNewContent(url, bool) {
				url = ('' == url) ? 'index.html' : url;
			
			var section = $('<div class="cd-main-content "></div>');			
				
				
			section.load(url+' .cd-main-content > *', function(event){
				
				// load new content and replace <main> content with the new one
				FullPageDestroy();		
			    $('main').html(section);
				
				var clapat_title = event.match(/<title[^>]*>([^<]+)<\/title>/)[1];
				$('head title').html( clapat_title );
				
			  //if browser doesn't support CSS transitions - dont wait for the end of transitions
			  var delay = ( transitionsSupported() ) ? 30 : 0;
			  setTimeout(function(){
				$('body').removeClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				  isAnimating = false;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});				
				
				ga('set', 'page', '/' + url);
				ga('send', 'pageview');
				
				FirstLoad();
				HeroSection();				
				Sliders();
				FullPage();				
				MasonryPortfolio();
				LazyLoad();
				HideShowHeader();
				FooterAppear();				
				Lightbox();
				AppearIteam();
				BackToTop();
				ContactForm();
				CollagePlus();
				PageShare();
				PageChat();		
				
				
				if( !transitionsSupported() ) isAnimating = false;
			  }, delay);			  
			  if(url!=window.location && bool){
				window.history.pushState({path: url},'',url);
			  }
				});
		  }
		
		  function transitionsSupported() {
			return $('html').hasClass('csstransitions');
		  }
		});
			
		
	}// End Ajax Load
	
	
/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/
	
	function HideShowHeader() {
			
			var didScroll;
			var lastScrollTop = 0;
			var delta = 50;
			var navbarHeight = 250;

			var navbarHideAfter = navbarHeight
			
			$(window).scroll(function(event){
				didScroll = true;
			});			
			
			if( $('.scroll-hide').length > 0 ){
				
				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 100);
			
			}
		
			return false;
			
			function hasScrolled() {
				var st = $(this).scrollTop();
				
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				if (st > lastScrollTop && st > navbarHideAfter){
					if( $('.scroll-hide').length > 0 ){
					$('header').addClass('nav-hide');
					}
				} else {
					if( $('.scroll-hide').length > 0 ){
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-hide');
					}
					}
				}
				
				lastScrollTop = st;
			}
			
			
	}//End Hide Show Header			
	



/*--------------------------------------------------
Function Header Color
---------------------------------------------------*/	


	function HeroColor() {
		if( $('#hero-height').length > 0 ){					
			setTimeout(function(){
				$('#hero-caption').addClass('animate');
				$('#hero-height').removeClass('hidden');
			} , 150 );	
		}

	}// End Header Color
	

/*--------------------------------------------------
Function FullPage Destroy
---------------------------------------------------*/
	
	function FullPageDestroy() {
			
		if( $('#showcase-slider').length > 0 ){	
			$('#showcase-slider').fullpage.destroy('all');
		}
	}
	
	
/*--------------------------------------------------
Function FullPage
---------------------------------------------------*/
	
	function FullPage() {
		
		if( $('#showcase-slider').length > 0 ){	
	
			$('#showcase-slider').fullpage({
				navigation: true,
        		navigationPosition: 'left',
				afterLoad: function(anchorLink, index, direction){					
					if(index === 2){
						$("#fp-nav, .chat-on-page").removeClass('move-right');
						$("#fp-nav, .chat-on-page").css({opacity: '1'});
					}
					if(index === 3){
						$("#fp-nav, .chat-on-page").addClass('move-right');
						$("#fp-nav, .chat-on-page").css({opacity: '1'});						
					}					
					if(index === 4){
						$("#fp-nav, .chat-on-page").removeClass('move-right');
						$("#fp-nav, .chat-on-page").css({opacity: '1'});
					}
					if(index === 5){
						$("#fp-nav, .chat-on-page").addClass('move-right');
						$("#fp-nav, .chat-on-page").css({opacity: '1'});
					}					
					if(index === 7){
						$("footer").addClass('visible');
					}
				},
				
				onLeave: function(index, nextIndex, direction){
					
					var leavingSection = $(this);
					
					if(index  && direction ==='down'){	
					
						if ($(this).hasClass("pre-flip")) {
							$("#fp-nav, .chat-on-page").css({opacity: '0'});
						}						
						if ($(this).hasClass("flip-x")) {
							$("#fp-nav, .chat-on-page").css({opacity: '0'});
						}  						
						$(".section").removeClass('reverse');						
						$(".section").find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(15vh)',opacity: '0'});										
						$(this).find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(-15vh)',opacity: '0'});										
						$(this).next(".section").find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(0px)',opacity: '1'});
						
					} else if(index  && direction === 'up'){
						
						$("footer").removeClass('visible');						
						if ($(this).hasClass("after-flip")) {
							$("#fp-nav, .chat-on-page").css({opacity: '0'});
						}						
						if ($(this).hasClass("flip-x")) {
							$("#fp-nav, .chat-on-page").css({opacity: '0'});
						}  
						
						$(".section").addClass('reverse');
						$(".section").find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(-15vh)',opacity: '0',});
						$(this).prev(".section").find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(0px)',opacity: '1'});
												
						$(this).find('.sa-one, .sa-two, .sa-three, .sa-four').css({transform: 'translateY(15vh)',opacity: '0'});						
					}
					
				}
							
       		});
			
		}
			

	}//End FullPage		
	
	
	
	
/*--------------------------------------------------
Function Masonry Portfolio
---------------------------------------------------*/	
		
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){
			
		
			var $container = $('#portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
				itemSelector: '.item',
				gutter:0,
				transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });		
				return false;
			});
			
			$('#filters #all').on('click', function() {
				$('.item').removeClass('item-margins');
			});
			
			$(window).on( 'resize', function () {
			
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				 if (winWidth >= 1466) {
					
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 600 + 'px'});		
					var portfolioWidth = $('#portfolio-wrap').width();
					
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 2;
					
					postHeight = window.innerHeight
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						if ( $('#portfolio').attr('data-col') === '2' ) {
							$('.item').css( { 
								width : postWidth * 2 + 'px',
								height : postWidth * 0.7   + 'px',
								margin : 0 + 'px', 
							});
						} 
						
					});
					
					
				} else if (winWidth > 1024) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 300 + 'px'});		
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 						
						
						$('.item').css( { 
							width : postWidth * 2 + 'px',
							height : postWidth * 0.7   + 'px',
							margin : 0 + 'px', 
						});
						
					});
					
					
				}else if (winWidth > 767) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 300 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						$('.item').css( { 
							width : postWidth * 2 + 'px',
							height : postWidth * 0.7   + 'px',
							margin : 0 + 'px', 
						});
						
					});
					
					
				}	else if (winWidth > 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 'px'});		
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 						
						
						$('.item').css( { 
							width : postWidth * 2 + 'px',
							height : postWidth * 0.7   + 'px',
							margin : 0 + 'px', 
						});
						
					});
					
					
				}
				
				else if (winWidth <= 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() -60 + 'px'});	
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						$('.item').css( { 
							width : postWidth * 2 + 'px',
							height : postWidth * 1.4   + 'px',
							margin : 0 + 'px', 
						});
						
					});
					
					
				}		
				return columnNumb;
				
				
			}).resize();
			
			
			$("#all").trigger('click');
			
			//Parallax Thumbnail
			
			var $animation_elements = $('.item');
			var $window = $(window);
			
			function check_if_in_view() {
				var window_height = $window.height();
				var window_top_position = $window.scrollTop();
				var window_bottom_position = (window_top_position + window_height);
			
				$.each($animation_elements, function() {
					var $element = $(this);
					var element_height = $element.outerHeight();
					var element_top_position = $element.offset().top;
					var element_bottom_position = (element_top_position + element_height) + 130;
					
					//check to see if this current container is within viewport
					if ((element_bottom_position >= window_top_position) &&	(element_top_position <= window_bottom_position)) {
						$element.addClass('in-view');
						
						$element.find('.item-content').css({
							transform: 'translateY(0px)',
							opacity: '1',
						});
						
					} else if (element_bottom_position >= window_top_position)  {
						$element.removeClass('in-view');
						
						$element.find('.item-content').css({
							transform: 'translateY(20vh)',
							opacity: '0',
						});
					} else if (element_top_position <= window_bottom_position)  {
						$element.removeClass('in-view');
						
						$element.find('.item-content').css({
							transform: 'translateY(-20vh)',
							opacity: '0',
						});
					}
				});
			}
			
			$window.on('scroll resize', check_if_in_view);
							
		}	
	
	}//End MasonryPortfolio
	



/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/

	function VirtualScr() {		
		
		new SmoothScroll();

		function SmoothScroll(el) {
		var t = this, h = document.documentElement;
		el = el || window;
		t.rAF = false;
		t.target = 0;
		t.scroll = 0;
		t.animate = function() {
		t.scroll += (t.target - t.scroll) * 0.2;
		if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
		cancelAnimationFrame(t.rAF);
		t.rAF = false;}
		if (el == window) scrollTo(0, t.scroll);
		else el.scrollTop = t.scroll;
		if (t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onmousewheel = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
		t.target += (e.wheelDelta > 0) ? -100 : 100;
		if (t.target < 0) t.target = 0;
		if (t.target > scrollEnd) t.target = scrollEnd;
		if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onscroll = function() {
		if (t.rAF) return;
		t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
		t.scroll = t.target;};
		}
			
		
	}// End First Load
 

/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/	
	
	function FooterAppear() {
		
		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll >= 300) {					
					$(".chat-on-page, #page-action-holder").addClass('is-active');					
				} else {								
					$(".chat-on-page, #page-action-holder").removeClass('is-active');
				}
			});
		}
		
		var lastScroll = 0;
	
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$(".chat-on-page, #page-action-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$(".chat-on-page, #page-action-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});
  
  }//End FooterAppear
  
  

  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 300,
			items:1,			
		});
		
		if( $('.slider').length > 0 ){		
			setTimeout(function(){				
				$('.owl-prev').append('<span>Prev</span>');
				$('.owl-next').append('<span>Next</span>');
					var tooltips  = document.querySelectorAll('.owl-controls span');			
					window.onmousemove = function (e) {
						var x = (e.clientX + 30) + 'px',
							y = (e.clientY - 30) + 'px';
						for (var i = 0; i < tooltips.length; i++) {
							tooltips[i].style.top = y;
							tooltips[i].style.left = x;
						}
					};				
			} , 50 );		
		}
		
		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			center: true,
			autoHeight:false,
			navSpeed: 600,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:1
				},
				1024:{
					items:1
				},
				1466:{
					items:1
				}
			}
		});
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial'></div><i class='fa fa-chevron-left' aria-hidden='true'></i>","<div class='next-testimonial'></div><i class='fa fa-chevron-right' aria-hidden='true'></i>"],
			});
			
			$('.owl-prev').mouseleave(function(e){
				TweenMax.to(this, 0.3, {scale: 1});
				TweenMax.to('.prev-testimonial, .owl-prev .fa', 0.3,{scale:1, x: 0, y: 0});			
			});
			
			$('.owl-prev').mouseenter(function(e){
				TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
				TweenMax.to('.prev-testimonial', 0.3,{scale: 1.3});
			});
			
			$('.owl-prev').mousemove(function(e){   
				callParallaxOwlPrev(e);
			});
			
			function callParallaxOwlPrev(e){
				parallaxItOwlPrev(e, '.prev-testimonial', 30);
				parallaxItOwlPrev(e, '.owl-prev .fa', 20);
			}
			
			function parallaxItOwlPrev(e, target, movement){
				var $this = $('.owl-prev');
				var boundingRect = $this[0].getBoundingClientRect();
				var relX = e.pageX - boundingRect.left;
				var relY = e.pageY - boundingRect.top;
			
				TweenMax.to(target, 0.3, {
					x: (relX - boundingRect.width/2) / boundingRect.width * movement,
					y: (relY - boundingRect.height/2) / boundingRect.width * movement,
					ease: Power2.easeOut
				});
			}
			
			$('.owl-next').mouseleave(function(e){
				TweenMax.to(this, 0.3, {scale: 1});
				TweenMax.to('.next-testimonial, .owl-next .fa', 0.3,{scale:1, x: 0, y: 0});			
			});
			
			$('.owl-next').mouseenter(function(e){
				TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
				TweenMax.to('.next-testimonial', 0.3,{scale: 1.3});
			});
			
			$('.owl-next').mousemove(function(e){   
				callParallaxOwlNext(e);
			});
			
			function callParallaxOwlNext(e){
				parallaxItOwlNext(e, '.next-testimonial', 30);
				parallaxItOwlNext(e, '.owl-next .fa', 20);
			}
			
			function parallaxItOwlNext(e, target, movement){
				var $this = $('.owl-next');
				var boundingRect = $this[0].getBoundingClientRect();
				var relX = e.pageX - boundingRect.left;
				var relY = e.pageY - boundingRect.top;
			
				TweenMax.to(target, 0.3, {
					x: (relX - boundingRect.width/2) / boundingRect.width * movement,
					y: (relY - boundingRect.height/2) / boundingRect.width * movement,
					ease: Power2.easeOut
				});
			}
					  
		}
		
	
	}//End Sliders
	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
			
	}//End Lightbox	 
	
	

	
/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		setTimeout(function(){
			$('.has-animation').each(function() {	
				$(this).appear(function() {				
					$(this).delay($(this).attr('data-delay')).queue(function(next){
						$(this).addClass('animate-in');
						next();
					});				 		
				});		
			});
		} , 250 );		
	
	}//End AppearIteam					 	
  
  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function BackToTop() {
		
		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
		$('.scroll-down-wrap').on('click', function() {
			$('html, body').animate({ scrollTop: $('#main-content').offset().top +1 },700);
			return false;
		});
	
	}//End BackToTop
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( jQuery('#contact-formular').length > 0 ){
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						comments: $('#comments').val()
					},
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled');
						if(data.match('success') != null) $('#contactform').slideUp('slow');		
					}
				);		
				});		
				return false;		
			});		
		}

	}//End ContactForm		
	
	
	
/*--------------------------------------------------
Function Collage Plus
---------------------------------------------------*/	
	
	function CollagePlus() {
		
		if( $('.collage').length > 0 ){
			
			$.fn.removeSpace = function(){ 
			  $(this).contents().filter(function() {
				return this.nodeType === 3; 
			  }).remove();
			};
			
			$('.collage').removeSpace();
		
			$('#main').waitForImages({
				finished: function() {
					
					$('.collage').collagePlus(
						{	
							'targetHeight'    : 510,
							'fadeSpeed'       : "fast",
							'effect'          : 'default',
							'direction'       : 'vertical',
							'allowPartialLastRow'       : true,
						}
					);	
					
				},
			waitForAll: true
			});	
		
		}
		
	}//End Collage Plus	
	
	
/*--------------------------------------------------
Function Page Share
---------------------------------------------------*/	
	
	function PageShare() {
		
		
		$("#share").jsSocials({
            showLabel: false,
    		showCount: false,
    		shares: ["facebook", "twitter", "googleplus", "pinterest"]
        });
		
	}//End PageShare
	
	
	
/*--------------------------------------------------
Function Page Chat
---------------------------------------------------*/	
	
	function PageChat() {
		
		!function() {
		  var t;
		  if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, 
		  t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
		  t.factory = function(e) {
			return function() {
			  var n;
			  return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
			};
		  }, t.methods.forEach(function(e) {
			t[e] = t.factory(e);
		  }), t.load = function(t) {
			var e, n, o, i;
			e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"), 
			o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js", 
			n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
		  });
		}();
		drift.SNIPPET_VERSION = '0.3.1';
		drift.load('adi5zsxk8b8u');
		
		(function() {
			 
			var DRIFT_CHAT_SELECTOR = '.chat-on-page'
			/* http://youmightnotneedjquery.com/#ready */
			function ready(fn) {
			  if (document.readyState != 'loading') {
				fn();
			  } else if (document.addEventListener) {
				document.addEventListener('DOMContentLoaded', fn);
			  } else {
				document.attachEvent('onreadystatechange', function() {
				  if (document.readyState != 'loading')
					fn();
				});
			  }
			}
			/* http://youmightnotneedjquery.com/#each */
			function forEachElement(selector, fn) {
			  var elements = document.querySelectorAll(selector);
			  for (var i = 0; i < elements.length; i++)
				fn(elements[i], i);
			}
			function openChat(driftApi, event) {
			  event.preventDefault();
			  driftApi.sidebar.open();
			  return false;
			}
			ready(function() {
			  drift.on('ready', function(api) {
				api.widget.hide();
				var handleClick = openChat.bind(this, api)
				forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
				  el.addEventListener('click', handleClick);
				});
			  });
			});
		  })();
		
	}//End PageShare	
	
	

 	
	
	
