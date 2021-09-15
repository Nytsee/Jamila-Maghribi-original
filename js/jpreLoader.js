
(function($) {
	var items = new Array(),
		errors = new Array(),
		onComplete = function() {},
		current = 0;
	
	var jpreOptions = {
		//splashVPos: '35%',
		//loaderVPos: '75%',
		splashID: '#jpreContent',
		showSplash: true,
		showPercentage: true,
		debugMode: false,
		splashFunction: function() {}
	}
	
	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";

			if ($(this).css('background-image').indexOf('none') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}
		});
	}
	
	var preloading = function() {
		for (var i = 0; i < items.length; i++) {
			loadImg(items[i]);
		}
	}
	
	var loadImg = function(url) {
		var imgLoad = new Image();
		$(imgLoad)
		.load(function() {
			completeLoading();
		})
		.error(function() {
			errors.push($(this).attr('src'));
			completeLoading();
		})
		.attr('src', url);
	}
	
	var completeLoading = function() {
		current++;

		var per = Math.round((current / items.length) * 100);
		$(jBar).stop().animate({
			width: per + '%'
		}, 500, 'linear');
		
		if(jpreOptions.showPercentage) {
			$(jPer).text(per+"%");
		}
		
		if(current >= items.length) {
		
			current = items.length;
			
			if (jpreOptions.debugMode) {
				var error = debug();
				
			} 
			loadComplete();
		}
	}
	
	var loadComplete = function() {
		$(jBar).stop().animate({
			width: '100%'
		}, 500, 'linear', function() {
			function removeLoader(){
			    //$(jOverlay).fadeOut(800, function() {
					$(jOverlay).remove();
					onComplete();
			    //});
			}
			//TweenLite.to($("#jpreOverlay"), 0.8, { scale:2, /*rotationX:-20, transformOrigin:"50% 47%", transformPerspective:400,*/ autoAlpha : 0});
			//$(jOverlay).fadeOut(800, function() {
			//});

			   TweenMax.from('#MainvisBottom', 2, {y: "500px", ease: Strong.easeInOut, delay : 0.3})
			   TweenMax.from('.home_btn', 2, {y: "100px", ease: Strong.easeInOut, delay :0.4})
			   TweenMax.from('#section_home #logo', 2, {y: "100px", opacity:0, ease: Strong.easeInOut, delay :0.35})

		        TweenMax.staggerFromTo($("#logo_befor_loading") , 0.5, {alpha:1, y:0}, {alpha:0, y:-80, ease: Back.easeIn.config(1.9), delay:0.4 }, 0.1);   
		        TweenMax.staggerFromTo($("#jpreBar") , 0.5, {alpha:1, y:0}, {alpha:0, y:-200, ease: Back.easeIn.config(1.9), delay:0.4 }, 0.1);   
		        TweenMax.staggerFromTo($("#jprePercentage") , 0.5, {alpha:1, y:0}, {alpha:0, y:-100, ease: Back.easeIn.config(1.9), delay:0.6 }, 0.1);   
		        TweenMax.staggerFromTo($("#jpreOverlay") , 0.8, {height:"100%"}, {height:"0%", ease:Back.easeOut, delay:1.2 }, 0.1); 
		        //TweenMax.staggerFromTo($("#jpreOverlay") , 0.8, {autoAlpha:1}, {autoAlpha:0, ease:Back.easeOut, delay:1.2 }, 0.1); 

 
		        $("#siteWrapper").css({"opacity":1, function(){
		        	$(window).scrollTop(0);		 
		        }})	        	
		        setTimeout(function(){	
					$(jOverlay).remove();
					onComplete();
					$("body,html").addClass("loaded");

							if(location.hash){
							  //alert(location.hash)
							  $(window).scrollTop($(location.hash).offset().top - 40);
							}else{
							  $(window).scrollTop(0);
							}


		        },1500)  
		});	
	}
	
	var debug = function() {
		if(errors.length > 0) {
			var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
			str	+= errors.length + ' image files cound not be found. \n\r';	
			str += 'Please check your image paths and filenames:\n\r';
			for (var i = 0; i < errors.length; i++) {
				str += '- ' + errors[i] + '\n\r';
			}
			return true;
		} else {
			return false;
		}
	}
	
	var createContainer = function(tar) {

		jOverlay = $('<div></div>')
		.attr('id', 'jpreOverlay')
		.css({
			position: "fixed",
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 9999999
		})
		.appendTo('body');
		
		if(jpreOptions.showSplash) {
			jContent = $('<div></div>')
			.attr('id', 'jpreSlide')
			.appendTo(jOverlay);
			
			var conWidth = $(window).width() - $(jContent).width();
			$(jContent).css({
				position: "absolute",
				top: jpreOptions.splashVPos,
				left: Math.round((50 / $(window).width()) * conWidth) + '%'
			});
			$(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
			$(jpreOptions.splashID).remove();
			jpreOptions.splashFunction()			
		}
		
		jLoader = $('<div></div>')
		.attr('id', 'jpreLoader')
		.appendTo(jOverlay);
		
		var posWidth = $(window).width() - $(jLoader).width();
		$(jLoader).css({
			position: 'absolute',
			//top: jpreOptions.loaderVPos,
			top:'50%'
			/*left: Math.round((50 / $(window).width()) * posWidth) + '%'*/
		});
		
		jBar = $('<div></div>')
		.attr('id', 'jpreBar')
		.css({
			width: '0%',
			height: '100%'
		})
		.appendTo(jLoader);
		
		if(jpreOptions.showPercentage) {
			jPer = $('<div></div>')
			.attr('id', 'jprePercentage')
			.css({
				position: 'relative',
				height: '100%'
			})
			.appendTo(jLoader)
			.html('Loading...');
		}
	}
	
	$.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
		if(typeof callback == 'function') {
			onComplete = callback;
		}
		
		createContainer(this);
		getImages(this);
		preloading();
        return this;
    };

})(jQuery);