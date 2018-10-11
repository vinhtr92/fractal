function box4() {
	const css = {"module":".vinh_box4__module","title":".vinh_box4__title","image":".vinh_box4__image","content":".vinh_box4__content","heading":".vinh_box4__heading","desc":".vinh_box4__desc","thumbList":".vinh_box4__thumbList","small":".vinh_box4__small","":""}
	;
	const thisModule = css.module;
	console.log(thisModule);
	const items = [...document.querySelectorAll(thisModule)];
	// items.forEach((item) => item.clientWidth > 320 ? item.wilAddClass('small') : console.log(item));
	items.forEach((item) => console.log(item.offsetWidth));
}
box4();
