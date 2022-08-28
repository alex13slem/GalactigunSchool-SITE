import { LOOP, Splide } from "@splidejs/splide";
import Swiper, { Navigation, Pagination } from 'swiper';

export const splideGallery = () => {
	if (document.querySelector('#music-slider')) {
		const musicGallery = new Splide("#music-slider", {
			width: 570,
			height: 420,
			pagination: false,
			arrows: false,
			cover: true
		});

		const thumbnails = document.getElementsByClassName("thumbnail");
		let current;

		for (let i = 0; i < thumbnails.length; i++) {
			initThumbnail(thumbnails[i], i);
		}

		function initThumbnail(thumbnail, index) {
			thumbnail.addEventListener("click", function () {
				musicGallery.go(index);
			});
		}

		musicGallery.on("mounted move", function () {
			const thumbnail = thumbnails[musicGallery.index];

			if (thumbnail) {
				if (current) {
					current.classList.remove("is-active");
				}

				thumbnail.classList.add("is-active");
				current = thumbnail;
			}
		});

		musicGallery.mount();
	}
}

export const splidePlayer = () => {
	if (document.querySelector('#slider-player')) {
		const musicPlayer = new Splide('#slider-player', {
			type: "loop",
			pagination: false,
			classes: {
				arrows: 'splide__arrows',
				arrow: `firm-btn-arrow`,
				prev: `splide__arrow--prev firm-btn-arrow_l`,
				next: `splide__arrow--next firm-btn-arrow_r`,
			},
		}).mount();
	}
}

export const swiperEventPage = () => {
	if (document.querySelector('#event-page-slider')) {
		const swiper = new Swiper('#event-page-slider', {
			modules: [Navigation, Pagination],

			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				1152: {
					slidesPerView: 3,
				},
				569: {
					slidesPerView: 2,
				}
			},

			navigation: {
				nextEl: '.event-page-next',
				prevEl: '.event-page-prev',
			},
		});
	}
}