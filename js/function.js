jQuery.noConflict();
(function($) {
	$(function() {
	    $(document).ready(function() {
			//$('.case-list').scrollPlay();
			$(".case-list li").hover(function(){
				console.log('hover');
				$this = $(this);
				var width = $this.width();
				var height = $this.height();
				var offset = $this.offset();
				// $this.find('.case-pic').css('visibility','hidden');
				var position = $this.find('.case-info').position();
				var caseInfoPicElem = $this.find('.case-info .case-pic');
				var caseIntroElem = $this.find('.case-info .case-intro');
				//将详细介绍定位到原来位置
				caseInfoPicElem.css('top', offset.top).css('left', offset.left).show();
				caseIntroElem.css('top', offset.top).css('left', offset.left).show();
				
				caseInfoPicElem.stop(true,true).animate({
					top : offset.top - height/2
				}, {
					queue : false,
					duration : 300,
					"easing" : "easeOutCubic"
				});
				caseIntroElem.stop(true,true).animate({
					top : offset.top + height/2
				}, {
					queue : false,
					duration : 500,
					"easing" : "easeOutCubic"
				});
			}, function(){
				// $this = $(this);
				// var offset = $this.offset();
				// var height = $this.height();
				// var caseInfoPicElem = $this.find('.case-info .case-pic-holder');
				// var caseIntroElem = $this.find('.case-info .case-intro');
				// caseInfoPicElem.stop(true).animate({
					// top : offset.top
				// }, {
					// queue : false,
					// duration : 500,
					// "easing" : "easeOutCubic",
					// always : function(){$(this).hide();$this.find('.case-pic').css('visibility','visible');}
				// });
				// //caseIntroElem.fadeTo(200,0.5, function(){$(this).hide();});
				// var _caseIntroElemHeight = caseIntroElem.height();
				// //console.log('out');
				// caseIntroElem.stop(true).animate({
					// top : offset.top,
					// opacity: 0
				// }, {
					// queue : true,
					// duration : 500,
					// "easing" : "easeOutCubic",
					// always : function(){$(this).css('opacity',1);$(this).hide();$(this).height(_caseIntroElemHeight);}
				// });
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