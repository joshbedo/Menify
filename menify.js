(function($){
	$.fn.extend({
		Menify: function(opts){
			var defaults = {
				//container: '#headermenu',
				menuClass: 'menified'
			}
			var opts = $.extend(defaults, opts),
			submenu = '',
			menified = $('<select class="' + opts.menuClass + '" style="display:none" />'),
			$this = '#' + $(this).attr('id'),
			obj = $(this);
			console.log($(this).attr('id'));

			$($this + ' ul li:not(ul.level2 li)').each(function(){
				var name = '';
				var link = '';

				//checks if their is level 2 menu
				if($(this).hasClass('hasChildren')){
					name = $(this).children('a').text();
					link = $(this).children('a').attr('href');

					submenu = '<optgroup label="' + name + '">';
					submenu += '<option value="' + link + '">' + name + '</option';
					$(this).find('ul.level2 li').each(function(){
						var subname = $(this).children('a').text();
						var sublink = $(this).children('a').attr('href');
						submenu += '<option value="' + sublink +'">' + subname + '</option>';

					});
					submenu += '</optgroup>';
				}else{
					name = $(this).children('a').text();
					link = $(this).children('a').attr('href');
					submenu += '<option value="' + link + '">' + name + '</option>';
				}
			});
			console.log(submenu);
			$(menified).append(submenu);
			//if(opts.container) { obj.parent(opts.container).append(menified) }else{ obj.parent().append(menified); }
			console.log(opts, this);
			if(opts.container){ menified.appendTo(opts.container); }else{ obj.parent().append(menified); }

			$(window).resize(function(){
				if($(window).width() < 600){
					$($this).css({'display': 'none'});
					$(menified).css({'display': 'block'});
				}else{
					$(menified).css({'display': 'none'});
					$($this).css({'display': 'block'});
				}
			})
		}
	});
})(jQuery);