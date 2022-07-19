import Parallax from "parallax-js";
import Swiper, { Navigation, Pagination } from 'swiper';

export const cloudParallax = () => {

	const scene = document.querySelector('.courses-decor');

	if (scene) {
		const parallaxInstance = new Parallax(scene);
	}


}

export const swiper = () => {

	const swiper = new Swiper('.swiper-courses', {
		modules: [Navigation, Pagination],

		loop: true,
		slidesPerView: 1,
		spaceBetween: 32,
		breakpoints: {
			1361: {
				slidesPerView: 4,
			},
			1111: {
				slidesPerView: 3,
			},
			822: {
				slidesPerView: 2,
			},
			787: {
				slidesPerView: 3,
			},
			538: {
				slidesPerView: 2,
			},
		},

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next-courses',
			prevEl: '.swiper-button-prev-courses',
		},
	});
}
