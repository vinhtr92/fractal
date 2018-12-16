

function box() {
	const css = {"module":".vinh_box__module","social":".vinh_box__social","share":".vinh_box__share","img":".vinh_box__img","tag":".vinh_box__tag","content":".vinh_box__content","text":".vinh_box__text","desc":".vinh_box__desc","title":".vinh_box__title","view":".vinh_box__view","comment":".vinh_box__comment","meta":".vinh_box__meta","":""};
	const modules = [...document.querySelectorAll(css.module)]

	modules.map(module => {
		// const moduleWidth = module.clientWidth;
		// const currentX = module.getBoundingClientRect().x;

		// console.log(currentX)
		// module.addEventListener('mouseup',event=>{
		// 	console.log('release')
		// 	if(parentWidth - moduleWidth < currentX){
		// 		module.wilAddClass('hideme')
		// 		console.log(module)
		// 	}
		// 	else{
		// 		module.wilRemoveClass('hideme')
		// 	}

		// })
		const btn = module.querySelector(`${css.share} a`);
		btn.addEventListener('click',event => {
			module.wilToggleClass('active');
			event.preventDefault();
		})
	})
}
box();


// (function transCover(el){
// 	const containers = [...document.querySelectorAll(el)];
// 	containers.forEach(container => {
// 		console.log(container)
// 		const containerClass=`.${container.className}`;
// 		// console.log(containerClass)
// 		// console.log(`${containerClass}`);
		
// 		var mutationObserver = new MutationObserver(function(mutations) {
// 			mutations.forEach(function (mutation){
// 				console.log(mutation)
// 			})

// 		})
// 		console.log(el)
// 		mutationObserver.observe(document.querySelector('.swiper-wrapper'), {
// 			attributes: true,
// 			characterData: true,
// 			childList: false,
// 			subtree: false,
// 			attributeOldValue: true,
// 			characterDataOldValue: true
// 		});
		
		
		
// 	})

// })('swiper-wrapper')

// var mutationObserver = new MutationObserver(function(mutations) {
// 	mutations.forEach(function(mutation) {
// 		const containers = [...document.querySelectorAll('.swiper-wrapper')];
// 		console.log(mutation)
// 		console.log('check')
// 		console.log(containers)
// 		containers.forEach(container => {
// 			const items = [...container.querySelectorAll('.swiper-slide')]
// 			console.log(items)
// 			items.map(item => {
// 				let itemPosX = item.getBoundingClientRect().x;
// 				let windowWidth = window.innerWidth;
// 				let currentWidth = item.clientWidth;
// 				if(itemPosX<0 || windowWidth - itemPosX < currentWidth ){
// 					item.wilAddClass('covered')
// 				}
// 				else if(itemPosX>0){
// 					item.wilRemoveClass('covered')
// 				}
// 			})
// 		})

// 	});
//   });

// (function transCover(el){
// 	console.log(el);

// 	const containers = [...document.querySelectorAll(el)];
// 	console.log(containers)
// 	containers.map(container => {
// 		mutationObserver.observe(document.querySelector(`${container.className}`), {
// 			attributes: true,
// 			characterData: true,
// 			childList: false,
// 			subtree: false,
// 			attributeOldValue: true,
// 			characterDataOldValue: true
// 		});
		
// 	})
// })('.swiper-wrapper')



// (function checkOpts(el){
// 	const containers =  [...document.querySelectorAll(el)]
// 	console.log(containers);
// 	containers.map(container => {
// 		container.addEventListener('mousemove',event => {
// 			console.log('move')

// 			const items = [...container.querySelectorAll('.swiper-slide')];
// 			console.log(items);
// 			items.map(item => {
// 				let itemPosX = item.getBoundingClientRect().x;

// 				}
// 				else if(itemPosX>0){
// 					item.wilRemoveClass('covered')
// 				}
// 			})
// 		})

// 	})
// })('.swiper-wrapper')