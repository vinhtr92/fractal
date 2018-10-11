function box3(from,to) {
	const css = {"module":".vinh_box3__module","title":".vinh_box3__title","bg":".vinh_box3__bg","counter":".vinh_box3__counter","desc":".vinh_box3__desc","content":".vinh_box3__content","":""};
	const random = from => to => Math.floor((Math.random() * to) + from);
	console.log(from,to)
	const getRotate = condition => from => to => {
		const num = random(from)(to);
		return condition ? `rotate(${num}deg)` : `rotate(-${num}deg)` ;
		console.log(random(from)(to));
	  }

	return function(el){
		const items = [...document.querySelectorAll(el)];
		console.log(el);
		for(let i = 0 ; i < items.length;i++){
		  items[i].style.transform = getRotate(i % 2 === 0)(from)(to)
		}
	}

}
box3(0,10)('.bg');
