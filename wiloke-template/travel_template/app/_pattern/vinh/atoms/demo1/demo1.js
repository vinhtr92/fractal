class demo1 {
	constructor() {
		this.css = {"module":".vinh_demo1__module","title":".vinh_demo1__title","text":".vinh_demo1__text","active":".vinh_demo1__active","":""};
		this.apply();
	}

	handleClick(event) {
		event.preventDefault;
		const { css } = this;
		const classActive = css.active.replace(/^\./g, '');
		const { currentTarget } = event;
		currentTarget.classList.toggle(classActive);
	}
	
	apply() {
		const { css } = this;
		const moduleList = document.querySelectorAll(css.module);
		const moduleArr= [].slice.call(moduleList);
		moduleArr.map((module, index) => {
			module.addEventListener('click', event => this.handleClick(event));
		});
	}
}
new demo1();
