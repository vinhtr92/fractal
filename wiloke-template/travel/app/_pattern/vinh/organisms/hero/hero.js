class hero {
	constructor() {
		this.css = {"module":".vinh_hero__module","header":".vinh_hero__header","img":".vinh_hero__img","videoPlaceholder":".vinh_hero__videoPlaceholder","bgVideo":".vinh_hero__bgVideo","fullscreen":".vinh_hero__fullscreen","sm":".vinh_hero__sm","style02":".vinh_hero__style02","video":".vinh_hero__video","style03":".vinh_hero__style03","":""};
		this.apply();
	}

	rect(header) {
		if (header) {
			header.style.clip = `rect(0, 100vw, ${ header.offsetHeight }px, 0)`
		}
	}

	handleHeight(img, header) {
		if (img) {
			img.style.height = `${ header.offsetHeight }px`;
		}
	}

	handleParallax(img, header) {
		const st = window.wilScrollTop();
		if (img && header) {
			if (st < header.offsetHeight) {
				img.style.transform = `translate(0, -${ st/4 }px)`
			}
		}
	}

	videoBackground(bgVideo) {
		if (bgVideo) {
			if (bgVideo.offsetHeight < window.innerHeight) {
				bgVideo.wilRemoveClass('wide');
				bgVideo.wilAddClass('high');
			} else {
				bgVideo.wilRemoveClass('high');
				bgVideo.wilAddClass('wide');
			}
			if (isMobile.any()) {
				bgVideo.style.opacity = 0;
			}
		}
	}
	
	apply() {
		const { css } = this;
		const moduleList = document.querySelectorAll(css.module);
		const moduleArr = [].slice.call(moduleList);
		for (let i = 0; i < moduleArr.length; i++) {
			const module = moduleArr[i];
			const img = module.querySelector(css.img);
			const header = module.querySelector(css.header);
			const bgVideo = module.querySelector(css.bgVideo);
			
			this.handleHeight(img, header);
			this.rect(header);
			this.videoBackground(bgVideo);
			window.addEventListener('resize', () => {
				this.handleHeight(img, header);
				this.rect(header);
				this.videoBackground(bgVideo);
			});

			window.addEventListener('scroll', () => this.handleParallax(img, header));

		}
	}
}
new hero();
