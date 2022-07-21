import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import Choices from 'choices.js';

export function sliderPrice() {

	const sliderPrice = document.getElementById('price-slider');

	const coursePrices = [...document.querySelectorAll('.course-card__price')].map(el => el.getAttribute('price'));

	const coursePriceMin = Math.min(...coursePrices);
	const coursePriceMax = Math.max(...coursePrices)

	if (sliderPrice) {
		noUiSlider.create(sliderPrice, {
			start: [0, 50000],
			connect: true,
			step: 100,
			range: {
				'min': coursePriceMin,
				'max': coursePriceMax
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