import { Splide } from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";
import Parallax from "parallax-js";

export const cloudParallax = () => {

	const scene = document.querySelector('.main-schedule-decor');

	if (scene) {
		const parallaxInstance = new Parallax(scene);
	}

}

export const splide = () => {

	const splideInit = (el) => document.querySelector(`.main-schedule-${el}__splide-init`);

	const coursesSplideInit = splideInit('courses');
	const marathonsSplideInit = splideInit('marathons');
	const webinarsSplideInit = splideInit('webinars');
	const retreatsSplideInit = splideInit('retreats');

	const splideInitArray = [coursesSplideInit, marathonsSplideInit, webinarsSplideInit, retreatsSplideInit].filter(Boolean);



	splideInitArray.forEach(el => {

		const splideLenght = el.querySelector(`.splide__list`).children.length;

		if (splideLenght > 6) {
			new Splide(el, {
				width: '920px',
				perPage: 1,
				// arrows: false,
				pagination: false,
				grid: {
					rows: 2,
					cols: 3,
					gap: {
						row: 30,
						col: 30,
					},
				},
				breakpoints: {
					1340: {
						arrows: true,
						width: '650px',
						grid: {
							rows: 2,
							cols: 2,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
					1135: {
						arrows: true,
						width: '350px',
						grid: {
							rows: 2,
							cols: 1,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
					820: {
						arrows: true,
						width: '350px',
						grid: {
							rows: 1,
							cols: 1,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
				},
				classes: {
					arrows: 'splide__arrows',
					arrow: `btn-arrow`,
					prev: `splide__arrow--prev btn-arrow_l`,
					next: `splide__arrow--next btn-arrow_r`,
				},
			}).mount({ Grid });
		}
		if (splideLenght <= 6 && splideLenght > 4) {
			new Splide(el, {
				width: '920px',
				perPage: 1,
				arrows: false,
				pagination: false,
				grid: {
					rows: 2,
					cols: 3,
					gap: {
						row: 30,
						col: 30,
					},
				},
				breakpoints: {
					1340: {
						arrows: true,
						width: '650px',
						grid: {
							rows: 2,
							cols: 2,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
					1135: {
						arrows: true,
						width: '350px',
						grid: {
							rows: 2,
							cols: 1,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
					820: {
						arrows: true,
						width: '350px',
						grid: {
							rows: 1,
							cols: 1,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
				},
				classes: {
					arrows: 'splide__arrows',
					arrow: `btn-arrow`,
					prev: `splide__arrow--prev btn-arrow_l`,
					next: `splide__arrow--next btn-arrow_r`,
				},
			}).mount({ Grid });
		}
		if (splideLenght <= 4) {
			new Splide(el, {
				// padding: { left: 25, right: 25, top: 25, bottom: 25 },
				arrowPath: '',
				fixedWidth: '270px',
				// gap: '30px',
				// width: '920px',
				perPage: 4,
				// type: 'loop',
				arrows: false,
				pagination: false,

				breakpoints: {
					1440: {
						perPage: 1,
						width: '650px',
						fixedWidth: '',
						grid: {
							rows: 2,
							cols: 2,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
					// 1135: {
					// 	width: '350px',
					// 	grid: {
					// 		rows: 2,
					// 		cols: 1,
					// 		gap: {
					// 			row: 30,
					// 			col: 30,
					// 		},
					// 	},
					// },
					666: {
						arrows: true,
						perPage: 1,
						fixedWidth: '',
						width: '350px',
						grid: {
							rows: 1,
							cols: 1,
							gap: {
								row: 30,
								col: 30,
							},
						},
					},
				},

				classes: {
					arrows: 'splide__arrows',
					arrow: `btn-arrow`,
					prev: `splide__arrow--prev btn-arrow_l`,
					next: `splide__arrow--next btn-arrow_r`,
				},
			}).mount({ Grid });


		}
	})

	// const courses = 'courses';
	// const marathons = 'marathons';
	// const webinars = 'webinars';
	// const retreats = 'retreats';
	// const array = [courses, marathons, webinars, retreats];

	// array.forEach(el => {
	// 	const sectionBlock = document.querySelector(`.schedule-${el}`);
	// 	const splideOnPage = sectionBlock.querySelector(`.splide`);
	// 	const splideLenght = splideOnPage.querySelector(`.splide__list`).children.length;

	// 	if (splideLenght > 4) {

	// 	}
	// })
}