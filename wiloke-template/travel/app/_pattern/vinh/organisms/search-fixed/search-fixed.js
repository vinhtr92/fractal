class searchFixed {
	constructor() {
		this.css = {"module":".vinh_search-fixed__module","close":".vinh_search-fixed__close","nav":".vinh_search-fixed__nav","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		const close = document.querySelector(css.close);
		const module = document.querySelector(css.module);
		if (close) {
			close.addEventListener('click', () => module.setAttribute('data-search-active', 'false'));
		}
	}
}
new searchFixed();
