import Parallax from "parallax-js";

export const cloudParallax = () => {

	const scene = document.querySelector('.feedback-decor');

	if (scene) {
		const parallaxInstance = new Parallax(scene);
	}


}