export function accordionFaq() {
	const accBtns = document.querySelectorAll('.FAQ-accordion__title');
	const accContents = document.querySelectorAll('.FAQ-accordion__answer');

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