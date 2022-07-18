import Swiper, { Navigation, Pagination } from 'swiper';

export const swiper = () => {
	const swiper = new Swiper('.swiper-articles', {
		modules: [Navigation, Pagination],

		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1152: {
				slidesPerView: 3,
			},
			894: {
				slidesPerView: 2,
			},
			822: {
				slidesPerView: 1,
			},
			569: {
				slidesPerView: 2,
			}
		},

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next-articles',
			prevEl: '.swiper-button-prev-articles',
		},
	});
}
