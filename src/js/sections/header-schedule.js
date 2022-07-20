import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import Choices from 'choices.js';

export function sliderPrice() {
	const sliderPrice = document.getElementById('price-slider');

	if (sliderPrice) {
		noUiSlider.create(sliderPrice, {
			start: [0, 50000],
			connect: true,
			step: 100,
			range: {
				'min': 0,
				'max': 50000
			},
			tooltips: true,
			format: wNumb({ decimals: 0 })
		})
	}
}

export function customSelect() {
	const element = document.querySelectorAll('.select-form');


	// console.log(element)

	element.forEach((el) => {
		const choices = new Choices(el, {
			searchEnabled: false,
			itemSelectText: '',
			shouldSort: false,
		});
	})

}