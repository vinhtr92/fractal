function box3(from,to) {
	const random = from => to => Math.floor((Math.random() * to) + from);
	const getRotate = condition => from => to => {
		const num = random(from)(to);
		return condition ? `rotate(${num}deg)` : `rotate(-${num}deg)` ;
	}
	return (el) => {
		const items = [...document.querySelectorAll(el)];
		for(let i = 0 ; i < items.length;i++){
		  items[i].style.transform = getRotate(i % 2 === 0)(from)(to)
		}
	}
}
box3(0,10)('.bg');


