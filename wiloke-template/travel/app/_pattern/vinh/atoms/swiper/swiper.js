$('.swiper__module').each(function() {
	var self = $(this),
		wrapper = $('.swiper-wrapper', self),
		optData = eval('(' + self.attr('data-options') + ')'),
		method = {
			on: {
				init: function(){
					const container = wrapper[0];
					const items = [...container.querySelectorAll('.swiper-slide')]
					items.forEach(item	=>{
					let itemPosX = item.getBoundingClientRect().x;
					let windowWidth = window.innerWidth;
					let currentWidth = item.clientWidth;
						if(itemPosX<0 || windowWidth - itemPosX < currentWidth ){
							item.wilAddClass('covered')
						}
					})
				},
				setTransition: function(){
}
			}
		}
		,
		optDefault = {
			paginationClickable: true,
			pagination: {
				el: self.find('.swiper-pagination-custom')
			},
			navigation: {
				nextEl: self.find('.swiper-button-next-custom'),
				prevEl: self.find('.swiper-button-prev-custom'),
			},
			spaceBetween: 30
		},
		options = $.extend(optDefault, optData,method);
	wrapper.children().wrap('<div class="swiper-slide"></div>');
	var swiper = new Swiper(self, options);
	
	swiper.on('setTransition', function () {
		const container = wrapper[0];
		const items = [...container.querySelectorAll('.swiper-slide')]
		items.forEach(item	=>{
		let itemPosX = item.getBoundingClientRect().x;
		let windowWidth = window.innerWidth;
		let currentWidth = item.clientWidth;
			if(itemPosX<0 || windowWidth - itemPosX < currentWidth ){
				item.wilAddClass('covered')
			}
			else if(itemPosX>0){
				item.wilRemoveClass('covered')
			}
		})
	
	  });
	// console.log(swiper)
	function thumbnails(selector) {

		if (selector.length > 0) {
			var wrapperThumbs = selector.children('.swiper-wrapper'),
				optDataThumbs = eval('(' + selector.attr('data-options') + ')'),
				optDefaultThumbs = {
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 3,
					touchRatio: 0.3,
					slideToClickedSlide: true,
					pagination: {
						el: selector.find('.swiper-pagination-custom')
					},
					navigation: {
						nextEl: selector.find('.swiper-button-next-custom'),
						prevEl: selector.find('.swiper-button-prev-custom'),
					}
				},
				optionsThumbs = $.extend(optDefaultThumbs, optDataThumbs);
			wrapperThumbs.children().wrap('<div class="swiper-slide"></div>');
			var swiperThumbs = new Swiper(selector, optionsThumbs);
			swiper.controller.control = swiperThumbs;
			swiperThumbs.controller.control = swiper;
		}

	}
	thumbnails(self.next('.swiper-thumbnails__module'));
});
