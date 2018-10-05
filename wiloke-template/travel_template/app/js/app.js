// Start Javascript for template

if (isIE) {
	$('body').addClass('ie');
}

// create wilMenuVertical
class wilMenuVertical {
    constructor(el, opt) {
        this.optDefault = {
			menuWidth: 300,
            duration: 300,
            position: 'left',
            classBackButton: 'back-button',
            backButton: '<a href="#">Back to {{ backName }}</a>',
            classActive: 'active',
            easing: 'ease',
			arrow: '&gt;',
        };
        this.nav = el;
        this.opts = wilExtend(this.optDefault, opt);
        this.level = 0;
		this.create(document.querySelectorAll(this.nav));
    }
    
    create(els) {
        const {opts, nav} = this;
        
        wilEach(els, el => {
            this.wrapper(el);
            this.position(el);
            el.style.width = opts.menuWidth + 'px';
        });
        
        const menus = document.querySelectorAll(`${nav} .nav-menu`);
        const subMenus = document.querySelectorAll(`${nav} .sub-menu`);
        wilEach(menus, menu => {
            menu.setAttribute('data-height-default', menu.offsetHeight);
            menu.style.transition = `all ${opts.duration}ms ${opts.easing}`;
            menu.parentNode.style.height = `${menu.offsetHeight}px`;
        });
        wilEach(subMenus, subMenu => {
            this.createBackButton(menus, subMenu, (back, menus) => {
                this.handleBack(back, menus);
                this.handleLink(back, subMenu, menus);
            });
        });
		this.menuTranslate(menus, this.level);
    }
    
    wrapper(el) {
        const {opts} = this;
        const innerHtml = el.innerHTML;
        el.innerHTML = `
            <div class="nav-wrapper-outer" style="display: table; width: 100%; height: 100%">
                <div class="nav-wrapper" style="display: table-cell; width: 100%; vertical-align: ${opts.verticalAlign}">
                    <div class="nav-wrapper-inner" style="overflow: hidden; position: relative">
                        ${innerHtml}
                    </div>
                </div>
            </div>
        `;
    }
    
    verticalAlign() {
        const {opts} = this;
        let y = 50;
        if (opts.verticalAlign === 'middle') y = 50;
        else if (opts.verticalAlign === 'top') y = 0;
        else if (opts.verticalAlign === 'bottom') y = 100;
        return y;
    }
    
    menuTranslate(menus, level, height) {
        const {opts} = this;
        wilEach(menus, menu => {
            menu.wilStyles({
                top: `${this.verticalAlign()}%`,
                transform: `translate(-${opts.menuWidth*level}px, -${this.verticalAlign()}%)`,
                width: `${opts.menuWidth}px`
            });
            menu.parentNode.wilStyles({
				width: `${opts.menuWidth*(level+1)}px`,
				height
            });
        });
    }
    
    position(el) {
        const {opts} = this;
        if (opts.position === 'left') {
            el.wilStyles({
                left: 0,
                right: 'auto'
            });
        } else if (opts.position === 'right') {
            el.wilStyles({
                right: 0,
                left: 'auto'
            });
        }
    }
    
    createBackButton(menus, subMenu, cb) {
        const {nav, opts} = this;
        const firstList = subMenu.children[0];
        const back = document.createElement('LI');
		back.wilAddClass(opts.classBackButton);
		back.innerHTML = opts.backButton;
		if (subMenu.children[0].className !== back.className) {
			subMenu.insertBefore(
				back,
				firstList
			);
		}
        cb(back, menus);
    }
    
    handleLink(back, subMenu, menus) {
        const {nav, opts} = this;
        const menuHasSubMenu = subMenu.previousElementSibling;
        subMenu.wilStyles({
            visibility: 'hidden',
            top: `${this.verticalAlign()}%`,
            transform: `translate(100%, -${this.verticalAlign()}%)`
		});
		menuHasSubMenu.innerHTML = menuHasSubMenu.innerHTML.indexOf(opts.arrow) === -1 ? menuHasSubMenu.innerHTML + opts.arrow : menuHasSubMenu.innerHTML;
        menuHasSubMenu.children[0].addEventListener('click', event => {
            event.preventDefault();
            let subMenuHeight = event.currentTarget.parentNode.nextElementSibling.offsetHeight;
            this.level++;
            this.menuTranslate(menus, this.level, `${subMenuHeight}px`);
            event.currentTarget.parentNode.parentNode.wilAddClass(opts.classActive);
            subMenu.style.visibility = 'visible';
            
            let {backButton} = opts;
            if (backButton.search(/{{(\s+|)backName(\s+|)}}/g) !== -1) {
                backButton = backButton.replace(/{{(\s+|)backName(\s+|)}}/g, event.currentTarget.parentNode.innerText);
            }
			back.innerHTML = backButton;
        });
    }
    
    handleBack(back, menus) {
        const {opts} = this;
        const subMenu = back.parentNode;
        back.addEventListener('click', event => {
            event.preventDefault();
            this.level--;
            let ul = back.parentNode.parentNode.parentNode;
            let parentHeight = ul.offsetHeight;
            if (ul.getAttribute('data-height-default') !== null) {
                parentHeight = Number(ul.getAttribute('data-height-default'));
            }
            this.menuTranslate(menus, this.level, `${parentHeight}px`);
            back.parentNode.parentNode.wilRemoveClass(opts.classActive);
            setTimeout(() => subMenu.style.visibility = 'hidden', opts.duration);
        });
	}
	
}
