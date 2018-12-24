$(document).ready(function(){
	$('footer .widget_list li.has-child > ul').hide();

	$('footer .widget_list li.has-child > a').click(function(event){
		this.parentNode.setAttribute('data-state',this.parentNode.getAttribute('data-state') === 'open' ? 'closed' :'open')
		$(this).next().toggle(250)
		event.preventDefault();
	})	
})

