function post() {
	const css = {"module":".vinh_post__module","header":".vinh_post__header","body":".vinh_post__body","footer":".vinh_post__footer","text":".vinh_post__text","meta":".vinh_post__meta","share":".vinh_post__share","metaItem":".vinh_post__metaItem","grid":".vinh_post__grid","latest":".vinh_post__latest","metaText":".vinh_post__metaText","list":".vinh_post__list","post02":".vinh_post__post02","title":".vinh_post__title","desc":".vinh_post__desc","post03":".vinh_post__post03","view":".vinh_post__view","comment":".vinh_post__comment","postImage":".vinh_post__postImage","img":".vinh_post__img","social":".vinh_post__social","":""};
	const postImagesModules = [...document.querySelectorAll(css.postImage)]
	const postModules = [...document.querySelectorAll(css.module)]

	postModules.map(module => {
		if(module.clientWidth < 400){
			module.wilAddClass('sm')
		}
		else {
			module.wilRemoveClass('sm')
		}
	})

	


	postImagesModules.map(module => {
		const btn = module.querySelector(`${css.share} a`);
		btn.addEventListener('click', event => {
			event.preventDefault();
			module.setAttribute('data-state',module.getAttribute('data-state') === 'open' ? 'closed' :'open')
		})
	})
}
post();
