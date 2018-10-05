class page404 {
	constructor() {
		this.css = {"module":".vinh_page-404__module","itemGroup":".vinh_page-404__itemGroup","item":".vinh_page-404__item","footer":".vinh_page-404__footer","title":".vinh_page-404__title","text":".vinh_page-404__text","":""};
		this.apply();
	}

	_move(event, speed, func) {
		const x = Math.floor((window.innerWidth/2-event.pageX)*speed/100);
		const y = Math.floor((window.innerHeight/2-event.pageY)*speed/100);
		return typeof func === 'function' ? func(x, y) : {
			transform: `translate(${ x }px, ${ y }px)`
		}
	}

	handleMove(item, title, text) {
		$('body').on('mousemove', event => {
			item.eq(0).css(this._move(event, 8));
			item.eq(1).find('span').css(this._move(event, 3, (x, y) => ({
				top: y + 'px',
				left: x + 'px',
			})));
			item.eq(2).css(this._move(event, 8));
			title.css(this._move(event, 2));
			text.css(this._move(event, 2));
		});
	}
	
	apply() {
		const { css } = this;
		const module = $(css.module);
		
		module.each((index, element) => {
			const self = $(element);
			const item = $(css.item, self);
			const title = $(css.title, self);
			const text = $(css.text, self);
			this.handleMove(item, title, text);
			$(window).on('resize', () => this.handleMove(item, title, text));
		});
	}
}
if (!isMobile.any()) {
	new page404();
}
