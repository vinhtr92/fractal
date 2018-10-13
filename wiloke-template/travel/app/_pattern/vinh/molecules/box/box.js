function box() {
	const css = {"module":".vinh_box__module","social":".vinh_box__social","share":".vinh_box__share","img":".vinh_box__img","bg":".vinh_box__bg","tag":".vinh_box__tag","content":".vinh_box__content","text":".vinh_box__text","desc":".vinh_box__desc","title":".vinh_box__title","view":".vinh_box__view","comment":".vinh_box__comment","meta":".vinh_box__meta","":""};

	const shares = Array.from(document.querySelectorAll(css.share));
	shares.forEach(share => {
		const module = share.parentElement.parentElement;
		share.addEventListener('click', event => {
			event.preventDefault();
			module.wilToggleClass('active');
		})
	});
	// $(css.share).click(function(){
	// 	let a = $(this).find('a');
	// 	let b = $('#md-social span');
	// 	let c = $(css.img).find('img');
	// 	let setBlur = function(ele, radius) {
    //         $(ele).css({
    //             "filter": `blur(+radius+px)`
    //        });
    //    },

	// 	function blur(el,val,duration){
	// 		el.animate({filter:blur(val)},duration);
	// 		console.log('blur');
	// 	}
	// 	a.toggleClass('active');

	// 	if(a.hasClass('active')){
	// 		b.each(function(index) {
	// 			$(this).delay(100*index).animate({opacity:1},50);
	// 		});
	// 		blur(c,'5px',100);
			
	// 	}
	// 	else {
	// 		b.each(function(index) {
	// 			$(this).delay(100*index).animate({opacity:0},50);
	// 		});

	// 	}
		// $(this).find('a').toggleClass('active');
		// $('#md-social span').each(function(index) {
		// 	$(this).delay(100*index).animate({opacity:1},1000);
		// });

	// })
}
box();
