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