/*!
 *	Ok Smooth Scroll
 *
 *	@author 	Mitchell Petty <https://github.com/mpetty/ok-smoothscroll>
 * 	@version 	1.0.2
 */
(function($){
"use strict";

	// Smooth Scroll
	var OkSmoothScroll = {
		init : function(selector, settings) {
			$(selector).data('okSmoothScroll', settings);
			$(selector).off('.okSmoothScroll').on('click.okSmoothScroll', $.proxy(this.scroll,this));
			return this;
		},

		scroll : function(e) {
			var $this = $(e.target),
				$target = $($this.prop('hash')),
				settings = $this.data('okSmoothScroll'),
				offset = 0;

			if( location.pathname.replace(/^\//,"") === $this.prop('pathname').replace(/^\//,"") && location.hostname === $this.prop('hostname') ) {
				e.preventDefault();

				if( $target.length ) {
					offset = $target.offset().top;
					$("html,body").animate({scrollTop: offset  + settings.scroll_offset}, settings.scroll_speed);
				}
			}
		}
	};

	// Plugin Init
	$.fn.okSmoothScroll = function(options) {
		return this.each(function() {
			if( typeof options === 'object' || typeof options === 'undefined' ) {
				var settings = $.extend(true, {}, $.fn.okSmoothScroll.defaults, options);
				OkSmoothScroll.init(this, settings);
			}

			return this;
		});
	};

	// Plugin defaults
	$.fn.okSmoothScroll.defaults = {
		scroll_offset 		:	0,		// Offset the scroll. Used to position the scroll above or below the target
		scroll_speed 		: 	300		// Scroll Animation Speed
	};

})(jQuery);