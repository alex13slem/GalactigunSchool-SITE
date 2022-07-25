import Parallax from "parallax-js";
import Swiper, { Navigation } from 'swiper';

export const cloudParallax = () => {

	const scene = document.querySelector('.home-courses-decor');

	if (scene) {
		const parallaxInstance = new Parallax(scene);
	}


}

export const swiper = () => {

	const swiper = new Swiper('.swiper-home-courses', {
		modules: [Navigation],

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

		navigation: {
			nextEl: '.swiper-button-next-home-courses',
			prevEl: '.swiper-button-prev-home-courses',
		},
	});
}
