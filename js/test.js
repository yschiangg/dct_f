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
	  
	  /** 
	   * Interept scroll direction
	   */
	  handleScroll: function(e){
  
		// Scrolling up
		if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
  
		  s.delta--;
	   
		  if ( Math.abs(s.delta) >= s.scrollThreshold) {
			SliceSlider.prevSlide();
		  }
		}
   
		// Scrolling Down
		else {
   
		  s.delta++;
   
		  if (s.delta >= s.scrollThreshold) {
			SliceSlider.nextSlide();
		  }
		}
   
		// Prevent page from scrolling
		return false;
	  },
  
	  /**
	   * Show Slide
	   */
	  showSlide: function(){ 
		// reset
		s.delta = 0;
		// Bail if we're already sliding
		if ($('body').hasClass('is-sliding')){
		  return;
		}
		// Loop through our slides
		s.slides.each(function(i, slide) {
  
		  // Toggle the is-active class to show slide
		  $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
		  $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
		  $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
		  
		  // Add and remove is-sliding class
		  $('body').addClass('is-sliding');
  
		  setTimeout(function(){
			  $('body').removeClass('is-sliding');
		  }, 1000);
		});
	  },
  
	  /**
	   * Previous Slide
	   */
	  prevSlide: function(){
		
		// If on first slide, loop to last
		if (s.currentSlideIndex <= 0) {
		  s.currentSlideIndex = s.numSlides;
		}
		s.currentSlideIndex--;
		
		SliceSlider.showSlide();
	  },
  
	  /**
	   * Next Slide
	   */
	  nextSlide: function(){
		
		s.currentSlideIndex++;
	 
		// If on last slide, loop to first
		if (s.currentSlideIndex >= s.numSlides) { 
		  s.currentSlideIndex = 0;
		}
   
		SliceSlider.showSlide();
	  },
	};
	SliceSlider.init();
  })(jQuery);