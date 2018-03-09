$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

(function($) {
 
	var SliceSlider = {
	  
	  /**
	   * Settings Object
	   */
	  settings: {
		delta:              0,
		currentSlideIndex:  0,
		scrollThreshold:    40,
		slides:             $('.slide'),
		numSlides:          $('.slide').length,
		navPrev:            $('.js-prev'),
		navNext:            $('.js-next'),
	  },
	  
	  /**
	   * Init
	   */
	  init: function() {
		s = this.settings;
		this.bindEvents();
	  },
	  
	  /**
	   * Bind our click, scroll, key events
	   */
	  bindEvents: function(){
		
		// Scrollwheel & trackpad
		s.slides.on({
		  'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
		});
		// On click prev
		s.navPrev.on({
		  'click' : SliceSlider.prevSlide
		});
		// On click next
		s.navNext.on({
		  'click' : SliceSlider.nextSlide
		});
		// On Arrow keys
		$(document).keyup(function(e) {
		  // Left or back arrows
		  if ((e.which === 37) ||  (e.which === 38)){
			SliceSlider.prevSlide();
		  }
		  // Down or right
		  if ((e.which === 39) ||  (e.which === 40)) {
			SliceSlider.nextSlide();
		  }
		});
	  },


  

  

