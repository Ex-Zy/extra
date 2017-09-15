class Input {
	constructor(component) {
		this.component = component;
		this.btnAdd = component.find('[data-plus]');
		this.btnDown = component.find('[data-minus]');
		this.input = component.find('input');

		this._controlUp();
		this._controlDown();
		this._inputValue();
	}
	_controlUp() {
		let up = this.btnAdd;
		up.click(this._clickOnControlHandler);
	}
	_controlDown() {
		let down = this.btnDown;
		down.click(this._clickOnControlHandler);
	}
	_clickOnControlHandler(e) {
		e.preventDefault();

		let btn = $(this);
		let input = btn.parent().find('input');
		let value = +input.val();
		let maxValue = +input.data('max-value');

		if(btn.attr('data-plus') !== undefined && value < maxValue ) {
			input.val(value + 1);
		}

		if(btn.attr('data-minus') !== undefined && value > 0) {
			input.val(value - 1);
		}
	}
	_editTextHandler() {
		
	}
	_inputValue() {
		let field = this.input;

		field.on('keyup', function() {
			let value = $(this).val();
			let maxValue = +$(this).data('max-value');
			let reg = /[^0-9.]/;

			if(reg.test(value)) {
				value = value.replace(reg, '');
				$(this).val(value);
			}
		});
	}

}

new Input($('.js-number'));