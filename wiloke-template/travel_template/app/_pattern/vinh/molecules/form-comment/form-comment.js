class formComment {
	constructor() {
		this.css = {"module":".vinh_form-comment__module","first":".vinh_form-comment__first","last":".vinh_form-comment__last","form":".vinh_form-comment__form","title":".vinh_form-comment__title","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		const module = $(css.module);

		module.each(function() {
			const self = $(this);
			const first = $(css.first, self);
			const last = $(css.last, self);

			first.on('click', event => {
				event.preventDefault();
				event.stopPropagation();
				first.hide();
				last.slideDown(300);
			});
			$(last).on('click', () => {
				event.stopPropagation();
			});
		});
	}
}
new formComment();
