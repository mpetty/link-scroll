/*!
 *	Link Scroll
 *
 *	@author 	Mitchell Petty <https://github.com/mpetty/link-scroll>
 * 	@version 	1.0.3
 */
(function($){
"use strict";

	// Smooth Scroll
	var LinkScroll = {
		init : function(selector, settings) {
			$(selector).data('linkScroll', settings);
			$(selector).off('.linkScroll').on('click.linkScroll', $.proxy(this.scroll,this));
			return selector;
		},

		scroll : function(e) {
			var $this = $(e.target),
				$target = $($this.prop('hash')),
				settings = $this.data('linkScroll'),
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
	$.fn.linkScroll = function(options) {
		return this.each(function() {
			var settings = $.extend(true, {}, $.fn.linkScroll.defaults, options);
			return LinkScroll.init(this, settings);
		});
	};

	// Plugin defaults
	$.fn.linkScroll.defaults = {
		scroll_offset 		:	0,		// Offset the scroll. Used to position the scroll above or below the target
		scroll_speed 		: 	300		// Scroll Animation Speed
	};

})(jQuery);