import { Splide } from "@splidejs/splide";
import ymaps from "ymaps";
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

export const spliderAboutTeacher = () => {
	const spliderInit = document.querySelector('.product-page-about-teacher--splide-init')

	if (spliderInit) {
		new Splide(spliderInit, {
			perPage: 1,
			pagination: false,
			autoWidth: true,
			type: "fade",
			speed: 1000,
			classes: {
				arrows: 'splide__arrows',
				arrow: `btn-arrow`,
				prev: `splide__arrow--prev btn-arrow_l`,
				next: `splide__arrow--next btn-arrow_r`,
			},
		}).mount();
	}
}

// export const spliderLocation = () => {
// 	const spliderInit = document.querySelector('.product-page-location--splide-init')

// 	if (spliderInit) {
// 		new Splide(spliderInit, {
// 			perPage: 1,
// 			autoWidth: true,
// 			type: "loop",
// 			speed: 1000,
// 			classes: {
// 				arrows: 'splide__arrows',
// 				arrow: `btn-arrow`,
// 				prev: `splide__arrow--prev btn-arrow_l`,
// 				next: `splide__arrow--next btn-arrow_r`,
// 			},
// 		}).mount();
// 	}
// }

export const swiperLocation = () => {
	const swiperInit = document.querySelector('.product-page-location--swiper-init')

	if (swiperInit) {
		const swiper = new Swiper(swiperInit, {

			modules: [Navigation, Pagination, EffectFade],

			slidesPerView: 1,
			// width: 770,

			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			loop: 'true',

			pagination: {
				el: '.product-page-location--pagination',

				clickable: true
			},

			navigation: {
				nextEl: '.product-page-location--next',
				prevEl: '.product-page-location--prev',
			},
		});
	}
}

export const splideReview = () => {
	const splideInit = document.querySelector('.product-page-reviews--splide-init')

	if (splideInit) {
		new Splide(splideInit, {
			perPage: 4,
			gap: 30,
			type: "loop",
			pagination: false,
			speed: 1000,
			breakpoints: {
				1600: { perPage: 3, width: 870 },
				1200: { perPage: 2, width: 570 },
				885: { perPage: 1, width: 270 },
			},
			classes: {
				arrows: 'splide__arrows',
				arrow: `btn-arrow`,
				prev: `splide__arrow--prev btn-arrow_l`,
				next: `splide__arrow--next btn-arrow_r`,
			},
		}).mount();
	}
}
