jQuery.noConflict();
(function($) {
	$(function() {
		$(document).ready(function() {
			$(".box").hover(function() {
				$this = $(this);
				var top = $this.find('.top');
				$this.addClass('openBox');
			}, function() {
				var top = $this.find('.top');
				$this.removeClass('openBox');
			});

			//$('.case-list').scrollPlay();
			$(".case-list .case-item").hover(function() {
				$this = $(this);
				var offset = $this.offset();
				var height = $this.height() -20;
				// $this.find('.case-pic').css('visibility','hidden');
				var caseInfoPicElem = $this.find('.case-pic');
				var caseIntroElem = $this.find('.case-intro');
				//将详细介绍定位到原来位置
				caseInfoPicElem.css('top', 0).css('left', 0);
				caseIntroElem.css('top', 0).css('left', 0).css('opacity', 0);

				caseInfoPicElem.stop(true, true).animate({
					top : -1 * height / 2
				}, {
					queue : false,
					duration : 500,
					"easing" : "easeOutCubic"
				});
				caseIntroElem.stop(true, true).animate({
					top : height / 2,
					opacity : 1
				}, {
					queue : false,
					duration : 300,
					"easing" : "easeOutCubic"
				});
			}, function() {
				$this = $(this);
				var offset = $this.offset();
				var caseInfoPicElem = $this.find('.case-pic');
				var caseIntroElem = $this.find('.case-intro');
				//将详细介绍定位到原来位置

				caseInfoPicElem.stop(true, false).animate({
					top : 0
				}, {
					queue : false,
					duration : 500,
					"easing" : "easeOutCubic"
				});
				caseIntroElem.stop(true, false).animate({
					top : 0,
					opacity : 0
				}, {
					queue : false,
					duration : 300,
					"easing" : "easeOutCubic"
				});
			});

			var windowWidth = $(window).width();
			var mainWidth = 1440;
			$("#particals_wrapper img").css('left', function() {
				var offsetLeft = $(this).offset().left;
				return (windowWidth - mainWidth) / 2 + offsetLeft;
			});

			$.stellar.positionProperty.position = {
				setTop : function($element, newTop, originalTop) {
					$element.animate({
						top : newTop
					}, {
						queue : false,
						duration : 1000,
						"easing" : "easeOutCubic"
					});
					// $element.css('top', newTop);
				},
				setLeft : function($element, newLeft, originalLeft) {
					$elem.css('left', left);
				},
			};

			$.stellar({
				horizontalScrolling : false, //默认水平方向开启滚动
				horizontalOffset : 220,
				hideDistantElements : false, //默认为隐藏
			});
		});
	});
})(jQuery); 