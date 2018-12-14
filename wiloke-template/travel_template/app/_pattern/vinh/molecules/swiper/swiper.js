/**
 * Swiper
 */
$('.swiper__module').each(function() {
	console.log(this);
	var self = $(this),
		wrapper = $('.swiper-wrapper', self),
		optData = eval('(' + self.attr('data-options') + ')'),
		optDefault = {
			paginationClickable: true,
			pagination: {
				el: self.find('.swiper-pagination-custom')
			},
			navigation: {
				nextEl: self.find('.swiper-button-next-custom'),
				prevEl: self.find('.swiper-button-prev-custom'),
			},
			spaceBetween: 30,
			autoHeight: true
		},
		options = $.extend(optDefault, optData);
	wrapper.children().wrap('<div class="swiper-slide"></div>');
	var swiper = new Swiper(self, options);


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