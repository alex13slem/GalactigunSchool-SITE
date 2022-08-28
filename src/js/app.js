import * as prjFunctions from "./modules/function.js";
import fslightbox from "fslightbox";
import bootstrap from 'bootstrap'

import * as headerSchedule from "./sections/header-schedule.js";

import * as sectionCourses from "./sections/courses.js";
import * as sectionReviews from "./sections/reviews.js";
import * as sectionFeedback from "./sections/feedback.js";
import * as sectionInterestVideo from "./sections/interest-video.js";
import * as sectionInterestArticles from "./sections/interest-acticles.js";

import * as pageSchedule from "./sections/schedule.js";

import * as pageProduct from './sections/main-product-page.js';
import * as pageMusic from './sections/music-page.js';

prjFunctions.isWebp();
prjFunctions.accordion()
prjFunctions.parallax()
prjFunctions.customSelect();
prjFunctions.toggleAside();
prjFunctions.currentLink();
// ---------------------------------------
headerSchedule.sliderPrice();
// headerSchedule.courseFilter();
// ---------------------------------------

sectionCourses.cloudParallax();
sectionCourses.swiper();

sectionReviews.splideReview();

sectionFeedback.cloudParallax();

sectionInterestVideo.swiper();

sectionInterestArticles.swiper();
// ---------------------------------------

pageSchedule.splide();
pageSchedule.cloudParallax();
pageSchedule.priceFilter();

// -------------------------------------------------------
pageProduct.spliderAboutTeacher();
pageProduct.swiperLocation();
pageProduct.splideReview();

pageMusic.splideGallery();
pageMusic.splidePlayer();
pageMusic.swiperEventPage();

// -------------------------------------------------------
const burgerMain = document.querySelector('.firm-burger');


// if (burgerMain) {
// 	const burgerBtnBody = burgerMain.querySelector('.firm-burger__button');
// 	burgerBtnBody.addEventListener('click', evt => {

// 		burgerMain.classList.toggle('firm-burger_open');

// 		burgerMain.classList.add('firm-burger_anim');
// 		setTimeout(() => burgerMain.classList.remove('firm-burger_anim'), 1000);

// 		setTimeout(() => burgerMain.classList.toggle('firm-burger_png'), 750);
// 	})
// }

const menuDclick = document.querySelector(".menu-dclick");

if (menuDclick) {
	menuDclick.onclick = function (e) {
		e.preventDefault();  // Блокирует переход по ссылке
		this.onclick = null; // После первого клика, обработчик удаляется.
	};
}

const headerMenuList = document.querySelector('.header-mobile__body-menu')

if (headerMenuList) {
	const elem = headerMenuList.querySelectorAll('li')

	elem.forEach(el => {
		el.addEventListener('click', evt => {
			el.classList.toggle('active')
		})

	})
}

