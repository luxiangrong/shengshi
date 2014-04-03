jQuery.noConflict();
(function($) {
	$(function() {
		$(document).ready(function() {
			
			
			//案例展示部分自动计算长宽值
			function calcCaseContainerHeight(){
				var w_h_ratio = 320 / 213;
				var numPerRow = 4;
				var containerWidth = $("#case-container").width();
				var containerHeight = containerWidth / w_h_ratio / numPerRow;
				$(".case-item ").height(containerHeight);
				$(".case-item ").width(containerWidth/numPerRow);
				console.log(containerWidth);
				console.log();
			}
			calcCaseContainerHeight();
			$(window).on("resize", calcCaseContainerHeight);
			
			
			var eventsMap = [
				{
					top: 35,
					year: "2014",
					content: "2014 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},
				 {
					top: 425,
					year: "2013",
					content: "2013 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},	
				 {
					top: 745,
					year: "2012",
					content: "2012 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},	
				{
					top: 1060,
					year: "2011",
					content: "2011 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},
				{
					top: 1260,
					year: "2010",
					content: "2010 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},		
				{
					top: 1465,
					year: "2009",
					content: "2009 国际野生生物保护学会(WCS)中国委托公司网站开发事宜"
				},	
			];
			
			var getEventByHeight  = function(height){
				var result ;
				$.each(eventsMap, function(index, data){
					if(height > data.top) {
						result = data;
					} else {
						return false;
					}
				});
				return result;
			}
			$(window).on('scroll.events', function(){
				var start = 3200;
				var $this = $(this);
				var $events = $('#events');
				var $eventsTag = $events.find('.events-tag');
				var currentScrollTop = $this.scrollTop();
				var height = currentScrollTop-start;
				if(height <= 400) {
					$eventsTag.animate({
						top : 550 - height
					}, {
						queue : false,
						duration : 1000,
						"easing" : "easeOutCubic"
					});
				}
				if(currentScrollTop > start && currentScrollTop < start + 1648) {
					$eventsTag.show();
					$eventsTag.fadeIn(500);
					
					$events.find('.mask').height(height);
					var eventObj = getEventByHeight(height);
					if(eventObj) {
						$events.find('.events-tag dt').html(eventObj.year);
						$events.find('.events-tag .events-tag-body-middle').html(eventObj.content);
					}
				} else {
					if(currentScrollTop < start) {
						$events.find('.mask').height(0);
					}
					if(currentScrollTop > start + 1648) {
						$events.find('.mask').height(1648);
					}
					$eventsTag.fadeOut(500);
				}
				
			});
		

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
				var height = $this.height() - 20;
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
