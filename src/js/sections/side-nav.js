const sideNav = document.querySelector('.side-nav');

export const toggleAside = () => {

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

	if (sideNav) {
		sideNav.querySelectorAll('a[href="' + document.URL + '"]').forEach(elem => { elem.className += ' current-link' });
	}



}