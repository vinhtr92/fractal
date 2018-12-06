(function checkPostWidth(el){
	const items = [...document.querySelectorAll(el)]
	items.map((item) => {
		if(item.clientWidth < 400){
			item.wilAddClass('sm')
		}
		else {
			item.wilRemoveClass('sm')
		}
	})
})('div[class*=post__module]')