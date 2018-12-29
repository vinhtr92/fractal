function placeHolderLoad() {
	const css = {"module":".vinh_placeholder-load__module","hero":".vinh_placeholder-load__hero","search":".vinh_placeholder-load__search","container":".vinh_placeholder-load__container","blog":".vinh_placeholder-load__blog","home":".vinh_placeholder-load__home","":""};
	const module = document.querySelector(css.module);
	if(module){
			window.addEventListener('load',event =>{
				module.remove()
			})
		}
	}
placeHolderLoad();
