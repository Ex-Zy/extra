class CounterGoods {
	constructor(component) {
		this.component = component;
		this.btnAdd = component.find('[data-plus]');
		this.btnRomove = component.find('[data-minus]');
		this.input = component.find('input');

		this._controlUp();
		this._controlDown();
		this._editValue();
	}
	_controlUp() {
		let up = this.btnAdd;
		up.click(this._clickOnControlHandler);
	}
	_controlDown() {
		let down = this.btnRomove;
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
	_editValue() {
		let field = this.input;

		field.on('change keyup input click', function() {
			let value = $(this).val();
			let maxValue = +$(this).data('max-value');
			let reg = /[^0-9]/g;

			if(value.match(reg)) {
				value = value.replace(reg, '');
				$(this).val(value);
			}

			if(value.length > 3) {
				value = value.slice(0, 3);
				$(this).val(value);
			}

			if(value > maxValue) {
				value = maxValue;
				$(this).val(value);
			}
		});
	}

}

new CounterGoods($('.js-number'));