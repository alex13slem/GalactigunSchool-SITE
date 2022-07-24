import * as prjFunctions from "./modules/function.js";
import fslightbox from "fslightbox";

import * as headerSchedule from "./sections/header-schedule.js";

import * as sectionSideNav from "./sections/side-nav.js";
import * as sectionCourses from "./sections/courses.js";
import * as sectionReviews from "./sections/reviews.js";
import * as sectionFaq from "./sections/FAQ.js";
import * as sectionFeedback from "./sections/feedback.js";
import * as sectionInterestVideo from "./sections/interest-video.js";
import * as sectionInterestArticles from "./sections/interest-acticles.js";

import * as pageSchedule from "./sections/schedule.js";

import * as pageProduct from './sections/main-product-page.js';

prjFunctions.isWebp();
prjFunctions.accordion()
// ---------------------------------------
headerSchedule.sliderPrice();
headerSchedule.customSelect();
// headerSchedule.courseFilter();
// ---------------------------------------
sectionSideNav.toggleAside();
sectionSideNav.currentLink();

sectionCourses.cloudParallax();
sectionCourses.swiper();

sectionReviews.swiper();

sectionFaq.accordionFaq();

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

// -------------------------------------------------------
const burgerMain = document.querySelector('.firm-burger');


if (burgerMain) {
	const burgerBtnBody = burgerMain.querySelector('.firm-burger__button');
	burgerBtnBody.addEventListener('click', evt => {

		burgerMain.classList.toggle('firm-burger_open');

		burgerMain.classList.add('firm-burger_anim');
		setTimeout(() => burgerMain.classList.remove('firm-burger_anim'), 1000);

		setTimeout(() => burgerMain.classList.toggle('firm-burger_png'), 750);
	})
}
