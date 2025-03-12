(function (jQuery) {
	"use strict";
  
	var nav = jQuery('nav');
	var navHeight = nav.outerHeight();
  
	// Navbar Toggle
	jQuery('.navbar-toggler').on('click', function () {
	  jQuery('#mainNav').addClass('navbar-reduce');
	});
  
	// Preloader
	jQuery(window).on('load', function () {
	  var preloader = jQuery('#preloader');
	  if (preloader.length) {
		preloader.delay(100).fadeOut('slow', function () {
		  jQuery(this).remove();
		});
	  }
	});
  
	// Back to Top Button
	jQuery(window).scroll(function () {
	  if (jQuery(this).scrollTop() > 100) {
		jQuery('.back-to-top').fadeIn('slow');
	  } else {
		jQuery('.back-to-top').fadeOut('slow');
	  }
	});
  
	jQuery('.back-to-top, .scrolltop-mf').on('click', function () {
	  jQuery('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
	});
  
	// Smooth Scrolling for Links
	jQuery('a.js-scroll[href*="#"]').on('click', function (event) {
	  if (
		location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
		location.hostname === this.hostname
	  ) {
		var target = jQuery(this.hash);
		target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  event.preventDefault();
		  jQuery('html, body').animate(
			{ scrollTop: target.offset().top - navHeight + 5 },
			1000,
			'easeInOutExpo'
		  );
		}
	  }
	});
  
	// Collapse Navbar on Link Click
	jQuery('.js-scroll').on('click', function () {
	  jQuery('.navbar-collapse').collapse('hide');
	});
  
	// Navbar Styling on Scroll
	jQuery(window).on('scroll', function () {
	  var scrollTop = jQuery(this).scrollTop();
	  if (scrollTop > 50) {
		jQuery('.navbar-expand-md').addClass('navbar-reduce').removeClass('navbar-trans');
	  } else {
		jQuery('.navbar-expand-md').addClass('navbar-trans').removeClass('navbar-reduce');
	  }
	  if (scrollTop > 1200) {
		jQuery('.scrolltop-mf').fadeIn(1000, 'easeInOutExpo');
	  } else {
		jQuery('.scrolltop-mf').fadeOut(1000, 'easeInOutExpo');
	  }
	});
  
	// Typed.js Text Animation
	if (jQuery('.text-slider').length) {
	  var typed_strings = jQuery('.text-slider-items').text();
	  new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	  });
	}
  
	// Testimonials Carousel
	jQuery('#testimonial-mf').owlCarousel({
	  margin: 20,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  autoplayHoverPause: true,
	  responsive: { 0: { items: 1 } }
	});
  
  })(jQuery);
  