class popPost {
	constructor() {
		this.css = {"module":".vinh_pop-post__module","first":".vinh_pop-post__first","img":".vinh_pop-post__img","metaGroup":".vinh_pop-post__metaGroup","meta":".vinh_pop-post__meta","metaItem":".vinh_pop-post__metaItem","title":".vinh_pop-post__title","share":".vinh_pop-post__share","metaText":".vinh_pop-post__metaText","imgCover":".vinh_pop-post__imgCover","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;

		$('.wil-grid').each(function() {
			var self = $(this),
				optData = self.data('options'),
				optDefault = {
					style: 'masonry',
					filterClass: '.wil-filter',
					container: '.wil-grid__inner',
					gridSize: '.grid-sizer',
					gridItem: '.grid-item',
					gridItemInner: '.grid-item__inner',
					isotopeTransition: {
						hiddenStyle: '',
						visibleStyle: '',
						transitionDuration: ''
					},
					beforeSetItemElem: false,
				},
				options = $.extend(optDefault, optData);
				
			self.WilokeIsotope(options);
		});
	}
}
new popPost();
