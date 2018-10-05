function icon06() {
	const css = {"module":".vinh_icon-06__module","title":".vinh_icon-06__title","text":".vinh_icon-06__text","chart":".vinh_icon-06__chart","":""};
	$(css.chart).easyPieChart({
		//your options goes here
		scaleLength: 0,
		barColor: '#3955ff',
		lineWidth: 7,
		size: 249,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});

	
	
}
icon06();
