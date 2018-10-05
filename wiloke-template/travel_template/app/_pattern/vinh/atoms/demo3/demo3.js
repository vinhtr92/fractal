class demo3 {
	constructor() {
		this.css = {"module":".vinh_demo3__module","item":".vinh_demo3__item","title":".vinh_demo3__title","text":".vinh_demo3__text","":""};
		this.apply();
	}

	renderChild(dataTextboxs) {
		const { css } = this;
		const set = str => str.replace(/^\./g, '');
		return dataTextboxs.map(item => `
			<div class="${ set(css.item) }">
				<h2 class="${ set(css.title) }">${ item.title }</h2>
				<div class="${ set(css.text) }">${ item.text }</div>
			</div>
		`).join('');

	}
	
	apply() {
		const { css } = this;
		const moduleArr = [].slice.call(document.querySelectorAll(css.module));
		wilEach(moduleArr, (module, index) => {
			const dataTextboxsString = module.getAttribute('data-textboxs');
			const dataTextboxs = dataTextboxsString !== null ? JSON.parse(dataTextboxsString) : [];
			module.innerHTML = this.renderChild(dataTextboxs);
		});
	}
}
new demo3();
