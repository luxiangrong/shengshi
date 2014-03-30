/**
 * @author lxr
 */
(function($) {
	$.fn.scrollPlay = function(options) {
		var opts = $.extend({}, $.fn.scrollPlay.defaults, options);
		// iterate and reformat each matched element
		return this.each(function() {
			var $this = $(this);

			var width = $this.width();
			var parentWidth = $this.parent().width();

			//如果没有超出父元素宽度，无需处理
			if (width <= parentWidth) {
				return;
			}

			var offsetWidth = width - parentWidth;
			var direction = $this.attr('data-direction');
			if (!direction || direction === undefined) {
				direction = opts.direction;
			}

			play();
			function play() {
				if (direction == 'left') {
					var marginLeft = $this.css('marginLeft');
					console.log(marginLeft);
					$this.animate({
						'margin-left' : offsetWidth * -1
					}, {
						duration : 1000 * (offsetWidth ) / opts.speed,
						"easing" : opts.easing
					}).animate({
						'margin-left' : 0
					}, {
						duration : 1000 * (offsetWidth ) / opts.speed,
						"easing" : opts.easing,
						complete : play
					});
				} else {
					$this.css('margin-left', offsetWidth * -1);
					$this.animate({
						'margin-left' : 0
					}, {
						duration : 1000 * offsetWidth / opts.speed,
						"easing" : opts.easing
					}).animate({
						'margin-left' : offsetWidth * -1
					}, {
						duration : 1000 * offsetWidth / opts.speed,
						"easing" : opts.easing,
						complete : play
					});
				}
			}
			
			$this.hover(function(){
				$this.stop(true);
			}, function(){
				play();
			});

		});
	};
	$.fn.scrollPlay.defaults = {
		direction : 'left',
		speed : 30,
		easing: "easeInOutSine",
	};
})(jQuery);
