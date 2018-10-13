class field {
	constructor() {
		this.css = {"module":".vinh_field__module","field":".vinh_field__field","select2":".vinh_field__select2","icon":".vinh_field__icon","textarea":".vinh_field__textarea","file":".vinh_field__file","select":".vinh_field__select","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		
		$(css.select2).select2({
			// ajax: {},
			minimumInputLengh: 1,
			placeholder: "Select a state",
		});
	}
}
new field();
