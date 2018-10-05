
class navVertical {
	constructor() {
		this.css = {"module":".vinh_nav-vertical__module","search":".vinh_nav-vertical__search","navVertical":".vinh_nav-vertical__navVertical","nav-menu":".vinh_nav-vertical__nav-menu","":""};
		this.apply();
	}

	apply() {
		const { css } = this;

		new wilMenuVertical(css.navVertical, {
			menuWidth: 270,
			duration: 250,
			arrow: '<span class="nav-arrow"><i class="pe-7s-angle-right"></i></span>',
			backButton: '<a href="#"><i class="pe-7s-angle-left"></i> Back to {{ backName }}</a>',
			classBackButton: 'nav-back-button',
			verticalAlign: 'top'
		});

		$(css.module).each(function() {
			const self = $(this);
			const navVertical = $(css.navVertical, self);
			const search = $(css.search, self);

			const setHeight = () => {
				const searchHeight = search.outerHeight(true);
				const selfHeight = self.outerHeight();
				navVertical.height(selfHeight - searchHeight);
			}
			setHeight();
			$(window).on('resize', setHeight);
		});
	}
}
new navVertical();
