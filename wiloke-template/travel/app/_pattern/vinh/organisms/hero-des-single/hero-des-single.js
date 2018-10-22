class heroDesSingle {
	constructor() {
		this.css = {"module":".vinh_hero-des-single__module","sm":".vinh_hero-des-single__sm","title":".vinh_hero-des-single__title","nav":".vinh_hero-des-single__nav","fixed":".vinh_hero-des-single__fixed","svg":".vinh_hero-des-single__svg","style1":".vinh_hero-des-single__style1","style2":".vinh_hero-des-single__style2","":""};
		this.apply();
	}

	handleSticky(nav) {
		const { css } = this;
		const st = $(window).scrollTop();
		const wh = $(window).outerHeight();
		const ph = $('.page-wrap').outerHeight();
		const classFixed = css.fixed.replace(/^\./g, '');
		if (st > wh && st < ph - wh - 500) {
			nav.addClass(classFixed);
		} else {
			nav.removeClass(classFixed);
		}
	}

	mobile(nav) {
		if (isMobile.any()) {
			nav.remove();	
		}
	}
	
	apply() {
		const { css } = this;
		
		$(css.nav).each((index, element) => {
			const nav = $(element);
			$(window).on('scroll', () => this.handleSticky(nav));

			this.mobile(nav);
		});
	}
}
new heroDesSingle();
