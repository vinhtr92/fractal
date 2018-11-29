class share {
	constructor() {
		this.css = {"module":".vinh_share__module","shareTitle":".vinh_share__shareTitle","scrollTop":".vinh_share__scrollTop","vertical":".vinh_share__vertical","center":".vinh_share__center","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		
		const scrollTop = $(css.scrollTop);

		scrollTop.on('click', event => {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 300);
		})		
	}
}
new share();
