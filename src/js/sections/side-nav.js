export function toggleAside() {

	const sideNav = document.querySelector('.side-nav');

	if (sideNav) {

		const header = document.querySelector('.header');
		const main = document.querySelector('.main');
		const footer = document.querySelector('.footer');
		const pageBody = [header, main, footer];

		for (let i = 0; i < pageBody.length; i++) {
			pageBody[i].classList.add('side-nav-switch')
		}
	}
}