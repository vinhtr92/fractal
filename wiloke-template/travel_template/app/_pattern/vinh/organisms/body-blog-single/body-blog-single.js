class bodyBlogSingle {
	constructor() {
		this.css = {"module":".vinh_body-blog-single__module","tagCloud":".vinh_body-blog-single__tagCloud","shareFixed":".vinh_body-blog-single__shareFixed","active":".vinh_body-blog-single__active","":""};
		this.apply();
	}

	handleImg(module, o, ww) {
		const { css } = this;
		const pl = module.css('padding-left');
		const imgStyles = {
			width: ww,
			maxWidth: 'none',
			marginLeft: -(o.left + parseInt(pl)),
			position: 'relative',
			zIndex: 999
		};
		$('img.size-full', css.module).css(imgStyles);
	}

	handleShare(o) {
		const { css } = this;
		const shareFixed = $(css.shareFixed);
		const shareFixedStyles = {
			position: 'fixed',
			left: o.left - 100,
			top: 80
		};

		shareFixed.css(shareFixedStyles);
		const sharedFixedFunc = () => {
			const active = css.active.replace(/^\./g, '');
			if ($(window).scrollTop() > o.top) {
				shareFixed.addClass(active);
			} else {
				shareFixed.removeClass(active);
			}
		}
		$(window).on('scroll', sharedFixedFunc);
	}
	
	apply() {
		const { css } = this;
		const module = $(css.module);
		if (module.length) {
			const sizeFull = () => {
				const ww = window.innerWidth;
				const o = module.offset();
				this.handleImg(module, o, ww);
				this.handleShare(o);
			}
			sizeFull();
			$(window).on('resize', sizeFull);
		}
	}
}
new bodyBlogSingle();
