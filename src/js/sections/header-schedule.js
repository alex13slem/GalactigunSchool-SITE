import noUiSlider from 'nouislider';
import wNumb from 'wnumb';


export function sliderPrice() {

	const sliderPrice = document.getElementById('price-slider');

	const coursePrices = [...document.querySelectorAll('.course-card')].map(el => el.getAttribute('price'));

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



export const courseFilter = () => {

	const sliderPrice = document.querySelector('#price-slider');

	if (sliderPrice) {
		sliderPrice.noUiSlider.on('update', (el) => {
			sliderPrice.value = sliderPrice.noUiSlider.get();
			sliderPrice.dispatchEvent(new CustomEvent('input'));
		})
		const [selectSubgroup] = document.getElementsByName('subgroup');
		const [selectTeachers] = document.getElementsByName('teachers');


		const filters = [sliderPrice, selectSubgroup, selectTeachers]
		filters.forEach(el => el.addEventListener('input', filterGoods));
		filters.forEach(el => el.addEventListener('change', filterGoods));

		function filterGoods(el) {

			const cardOnPage = [...document.querySelectorAll('.course-card')];
			const coursePrice = cardOnPage.map(el => el.getAttribute('price'));
			const courseTeacher = cardOnPage.map(el => el.getAttribute('teacher'));
			const courseSubgroup = cardOnPage.map(el => el.getAttribute('subgroup'));

		}

	}


}