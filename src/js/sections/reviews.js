import Swiper, { Navigation, Pagination } from 'swiper';

export const swiper = () => {
	const swiper = new Swiper('.swiper-reviews', {
		modules: [Navigation, Pagination],

		loop: true,
		// autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1361: {
				slidesPerView: 3,
			},
			989: {
				slidesPerView: 2,
			},
			822: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
		},

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next-reviews',
			prevEl: '.swiper-button-prev-reviews',
		},
	});
}
