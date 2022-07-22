export function accordionFaq() {

	const accordionInit = document.querySelector('.FAQ-accordion')

	if (accordionInit) {
		const accBtns = accordionInit.querySelectorAll('.FAQ-accordion__title');
		const accContents = accordionInit.querySelectorAll('.FAQ-accordion__answer');

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