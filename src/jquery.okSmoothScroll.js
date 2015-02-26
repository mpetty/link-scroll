/**
 *	Ok Smooth Scroll
 *
 *	@author 	Mitchell Petty
 * 	@version 	1.0.1
 */
(function($){
"use strict";

	// Object constructor
	var OkSmoothScroll = function(selector, settings) {

		// Set properties
		this.selector = $(selector);
		this.settings = settings;

		// Initialize
		this.initialize.call(this);

	};

	// Initialize
	OkSmoothScroll.prototype.initialize = function() {

		// Add event listeners
		this.selector.off('.okSmoothScroll').on('click.okSmoothScroll', $.proxy(this.events,this));

	};

	// Events
	OkSmoothScroll.prototype.events = function(e) {

		// Define vars
		var $this = $(e.target);
		var $target = $( $this.prop('hash') );
		var offset = 0;

		// Continue only if internal link
		if( location.pathname.replace(/^\//,"") == $this.prop('pathname').replace(/^\//,"") && location.hostname == $this.prop('hostname') ) {

			// prevent default
			e.preventDefault();

			// Update vars
			$target = $target.length && $target || $("[name="+ $this.prop('hash').slice(1) +"]");

			// Continue if target.length
			if( $target.length ) {

				// Set offset
				offset = $target.offset().top;

				// Animate to position
				$("html,body").animate({scrollTop: offset  + this.settings.scroll_offset}, this.settings.scroll_speed);

			}

		}

	};

	// Plugin Init
	$.fn.okSmoothScroll = function(options) {
		if ( typeof options === 'object' || typeof options === 'undefined' ) {

			// Initialize
			return this.each(function() {

				// Set settings
				var settings = $.extend(true, {}, $.fn.okSmoothScroll.defaults, options);

				// Create object
				var okScroll = new OkSmoothScroll(this, settings);

				// return for chaining
				return this;

			});

		}
	};

	// Plugin defaults
	$.fn.okSmoothScroll.defaults = {
		scroll_offset 		:	0,		// Offset the scroll. Used to position the scroll above or below the target
		scroll_speed 		: 	300		// Scroll Animation Speed
	};

})(jQuery);