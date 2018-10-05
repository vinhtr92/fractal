class textBoxGradient {
	constructor() {
		this.css = {"module":".vinh_text-box-gradient__module","icon":".vinh_text-box-gradient__icon","title":".vinh_text-box-gradient__title","light":".vinh_text-box-gradient__light","active":".vinh_text-box-gradient__active","":""};
		this.apply();
	}

	handleScroll(event, active) {
		// event.preventDefault();
		const { css } = this;
		const { currentTarget } = event;
		const href = $(currentTarget).find('a').attr('href');
		const o = $(href).offset();
		$(css.module).removeClass(active);
		$(currentTarget).addClass(active);
		$('html, body').animate({
			scrollTop: o.top - 30 + 'px'
		}, 300);

	}

	handleActive(active) {
		const { css } = this;
		const st = $(window).scrollTop();
		$('.panel__module').each((index, element) => {
			const o = $(element).offset();
			const h = $(element).outerHeight(true);
			const id = $(element).attr('id');
			if (st >= o.top - 100 && st <= o.top + h - 100) {
				$(`[href="#${ id }"]`).parent().addClass(active);
			} else {
				$(`[href="#${ id }"]`).parent().removeClass(active);
			}
		});
	}
	
	apply() {
		const { css } = this;
		const active = css.active.replace(/^\./g, '');
		$(css.module).on('click', event => this.handleScroll(event, active));
		$(window).on('scroll', () => this.handleActive(active));
	}
}
new textBoxGradient();
