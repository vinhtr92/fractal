$(function(){
	$('span.toggle-menu').click(function(){
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	})
	//toggle menu

	$('li.menu-item-has-children a').click(function(){
		$(this).next('ul').slideToggle('fast',function(){
		})
	})
})
