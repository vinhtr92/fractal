class bodyDesSingle {
	constructor() {
		this.css = {"module":".vinh_body-des-single__module","share":".vinh_body-des-single__share","style1":".vinh_body-des-single__style1","style2":".vinh_body-des-single__style2","nav":".vinh_body-des-single__nav","":""};
		this.apply();
	}

	theiaStickySidebar(nav) {
		nav.parent().theiaStickySidebar({
			updateSidebarHeight: true,
			additionalMarginTop: nav.attr('data-margin-top') || 20
		});
	}
	
	apply() {
		const { css } = this;
		
		$(css.nav).each((index, element) => {
			let nav = $(element);
			if (window.innerWidth < 992) {
				nav.parent().remove();
			} else {
				this.theiaStickySidebar(nav);
			}
		});
	}
}
new bodyDesSingle();
