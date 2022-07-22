import { Splide } from "@splidejs/splide";

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