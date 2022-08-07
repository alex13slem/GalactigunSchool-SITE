import { Splide } from "@splidejs/splide";

export const splideReview = () => {
	const splideInit = document.querySelector('.home-reviews--splide-init')

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
				arrow: `firm-btn-arrow`,
				prev: `splide__arrow--prev firm-btn-arrow_l`,
				next: `splide__arrow--next firm-btn-arrow_r`,
			},
		}).mount();
	}
}