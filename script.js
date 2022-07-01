// Получаем данные с классом slide
const slides = document.querySelectorAll(".slide");

// Нужно обойти цикл по каждому из слайдов
// Создаем слайд из массива слайдс
for (const slide of slides) {

	// Подписываемся на событие клик
	slide.addEventListener("click", () => {
		clearActiveClasses();

		// При клике на слайд добавляем класс актив
		slide.classList.add("active");		
	});
}

// Создаем функцию для удаления неактивного класса актив
function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
}