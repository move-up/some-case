//图片预加载
(function($){

	function PreLoad(imgs,options){
		this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
		this.opts = $.extend({},PreLoad.DEFAULTS,options);

		this._unordered(); 
	}

	PreLoad.DEFAULTS = {
		each: null,//每一张图片加载完毕后执行
		all: null //所有图片加载完毕后执行
	};

	PreLoad.prototype._unordered = function(){
		//无序加载
		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			len = imgs.length;

		$.each(imgs,function(i,src){

			if(typeof src != 'string') return;

			var imgObj = new Image();

			$(imgObj).on('load error',function(){
				opts.each && opts.each();
				//$progress.html(Math.round((count + 1) / len *100) + '%');

				if(count >= len -1){
					/*$('.loading').hide();
					document.title = '1/' + len;*/
					opts.all && opts.all();
				}

				count++;
			});

			imgObj.src = src;
		});
	};

	//$.fn.extend -> $('#img').preload();
	//$.extend -> $.preload();
	$.extend({
		preload: function(img, opts){
			new PreLoad(imgs,opts);
		}
	});

})(jQuery);