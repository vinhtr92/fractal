(function formActive(el){
	const inputs = [...document.querySelectorAll(el)];
	inputs.forEach((item)=>{
		item.addEventListener('focusin',function(){
			this.parentNode.wilAddClass('active');
		});
		item.addEventListener('focusout',function(){
			item.value === '' ? this.parentNode.wilRemoveClass('active') :null	
		})
	})
})('form#wil-subscribe input,form#wil-search input')
