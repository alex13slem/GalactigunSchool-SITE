import * as prjFunctions from "./modules/function.js";

prjFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper1 = new Swiper('.swiper1', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
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
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
});

const swiper2 = new Swiper('.swiper2', {
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
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
});

const swiper3 = new Swiper('.swiper3', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
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
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
});

const swiper4 = new Swiper('.swiper4', {
	modules: [Navigation, Pagination],

	// loop: true,
	// autoHeight: true,
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
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
});