import Swiper, { Navigation, Pagination } from 'swiper';

export const swiper = () => {
	const swiper = new Swiper('.swiper-video', {
		modules: [Navigation, Pagination],

		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 2,
			},
			822: {
				slidesPerView: 1,
			},
		},

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next-video',
			prevEl: '.swiper-button-prev-video',
		},
	});
}
