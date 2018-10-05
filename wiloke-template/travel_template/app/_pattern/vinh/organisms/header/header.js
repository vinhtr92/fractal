class header {
	constructor() {
		this.css = {"module":".vinh_header__module","logo":".vinh_header__logo","search":".vinh_header__search","fixed":".vinh_header__fixed","sticky":".vinh_header__sticky","":""};
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
		formSearch.setAttribute('data-search-active', 'true');
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
			const search = module.querySelector(css.search);
			const formSearch = document.querySelector('[data-search-active]');
			if (search) {
				search.addEventListener('click', event => this.handleSearch(event, formSearch));
			}
			window.addEventListener('scroll', () => this.handleHeaderFixed(module));
		});
		this.handleMenu();
	}
}
new header();
