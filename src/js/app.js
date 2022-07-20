import * as prjFunctions from "./modules/function.js";

import * as headerLessons from "./sections/header_lessons.js";

import * as sectionSideNav from "./sections/side-nav.js";
import * as sectionCourses from "./sections/courses.js";
import * as sectionReviews from "./sections/reviews.js";
import * as sectionFaq from "./sections/FAQ.js";
import * as sectionFeedback from "./sections/feedback.js";
import * as sectionInterestVideo from "./sections/interest-video.js";
import * as sectionInterestArticles from "./sections/interest-acticles.js";

import * as pageSchedule from "./sections/schedule.js";

prjFunctions.isWebp();
// ---------------------------------------
headerLessons.sliderPrice();
headerLessons.customSelect();
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

// pageSchedule.swiper();
pageSchedule.splide();
pageSchedule.cloudParallax();

// -------------------------------------------------------

const burgerMain = document.querySelector('.firm-burger');
const burgerBtnBody = burgerMain.querySelector('.firm-burger__button');

burgerBtnBody.addEventListener('click', evt => {

	burgerMain.classList.toggle('firm-burger_open');

	burgerMain.classList.add('firm-burger_anim');
	setTimeout(() => burgerMain.classList.remove('firm-burger_anim'), 1000);

	setTimeout(() => burgerMain.classList.toggle('firm-burger_png'), 750);
})