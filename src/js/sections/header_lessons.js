import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

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