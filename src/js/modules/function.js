import Parallax from "parallax-js";
import Choices from 'choices.js';

/*Проверка поддержки webp, добавление класса webp или no-webp для HTML*/
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export const accordion = () => {

	const accordionInit = document.querySelector('.accordion-init')

	if (accordionInit) {
		const accBtns = accordionInit.querySelectorAll('.accordion-btn');
		const accContents = accordionInit.querySelectorAll('.accordion-content');

		accBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				accContents.forEach((acc) => {
					if (
						e.target.nextElementSibling !== acc &&
						acc.classList.contains("active")
					) {
						acc.classList.remove("active")
					}
				});

				const panel = btn.nextElementSibling;
				panel.classList.toggle('active');
				btn.classList.toggle('active');
			});
		});
	}

}



export const parallax = () => {

	const scene = document.querySelector('#scene');

	if (scene) {
		const parallaxInstance = new Parallax(scene);
	}

}

export function customSelect() {
	const element = document.querySelectorAll('.select-form');

	element.forEach((el) => {
		const choices = new Choices(el, {
			searchEnabled: false,
			itemSelectText: '',
			shouldSort: false,
		});
	})

}

export const toggleAside = () => {

	const sideNav = document.querySelector('.side-nav');

	if (sideNav) {

		const header = document.querySelector('.header');
		const main = document.querySelector('.main');
		const footer = document.querySelector('.footer');
		const pageBody = [header, main, footer].filter(Boolean);

		pageBody.forEach((el) => {
			el.classList.add('side-nav-switch');
		})
	}
}

export const currentLink = () => {

	const sideNav = document.querySelector('.side-nav');

	if (sideNav) {
		sideNav.querySelectorAll('a[href="' + document.URL + '"]').forEach(elem => { elem.className += ' current-link' });
	}



}