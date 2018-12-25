class header {
	constructor() {
		this.css = {"module":".vinh_header__module","logo":".vinh_header__logo","search":".vinh_header__search","fixed":".vinh_header__fixed","sticky":".vinh_header__sticky","style02":".vinh_header__style02","dark":".vinh_header__dark","":""};
		this.apply();
	}

	handleMenu() {
		$('.header-nav').wilMenu({
			menuClass: 'header-menu',
			breakpoint: 1200,
		});		
	}
	handleSearch(event, formSearch) {
		event.preventDefault();
		formSearch.setAttribute('data-state', 'true');
	}

	

	handleHeaderFixed(module) {
		const { css } = this;
		const st = window.wilScrollTop();
		const wh = window.innerHeight;
		const hasFixed = css.fixed.replace(/^\./g, '');
		const classSticky = css.sticky.replace(/^\./g, '');
		if (module.getAttribute('class').indexOf(hasFixed) !== -1) {
			if (st > wh) {
				module.wilAddClass(classSticky);
			} else {
				module.wilRemoveClass(classSticky);
			}
		}
	}
	
	apply() {
		const { css } = this;
		const modules = document.querySelectorAll(css.module);
		const moduleArr = [].slice.call(modules);
		wilEach(moduleArr, module => {
			const search = module.querySelector(`${css.search} a`);
			const formSearch = document.querySelector('[data-state]');
			if (search) {
				// search.addEventListener('click', event => this.handleSearch(event, formSearch));
			}
			window.addEventListener('scroll', () => this.handleHeaderFixed(module));
		});
		this.handleMenu();
	}
}
new header();


(function headerToggleBtnSearch(el){
	const module = document.querySelector(el);
	if(module){
		const input =  module.querySelector('input');
		const btn = document.querySelector('a.toggle-mobile');
		module.setAttribute('data-state','closed');
		var state = module.getAttribute('data-state')
	
	
		btn.addEventListener('click',event => {
			if(state === 'closed'){
				module.setAttribute('data-state','open')
			}
			event.preventDefault();
		})
		module.addEventListener('submit',event => {
			if(input.value==='' ){
				module.setAttribute('data-state','closed')
			}
		})

		input.addEventListener('focusout',event => {
			if(input.value===''){
				module.setAttribute('data-state','closed')
			}
		})
	}

})('header form.search-form')