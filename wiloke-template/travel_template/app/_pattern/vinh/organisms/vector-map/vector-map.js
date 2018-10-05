class vectorMap {
	constructor() {
		this.css = {"module":".vinh_vector-map__module","map":".vinh_vector-map__map","nav":".vinh_vector-map__nav","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		
		if ($(css.map).length) {
			$(css.map).vectorMap({
				map: 'world_en',
				backgroundColor: $(css.module).css('background-color'),
				borderColor: '#799ec3',
				borderOpacity: 0.25,
				borderWidth: 1,
				color: '#799ec3',
				hoverColor: '#567cb1',
				hoverOpacity: null,
				normalizeFunction: 'linear',
				scaleColors: ['#b6d6ff', '#005ace'],
				selectedColor: '#567cb1',
				selectedRegions: ['AR', 'AU', 'BR', 'CL', 'CN', 'FR'],
				showTooltip: true,
				onRegionClick: (event, code, region) => {
					var $wrap = $(event.target).closest('.wil-destination-map');

					if( $wrap.length ) {
						var $location = $wrap.find('[data-region="'+ code +'"]');
						
						if($location.length) {
							$location.find('.arrow').trigger('locationToggle');
						}
					}
				},
			});
		}
	}
}
new vectorMap();
