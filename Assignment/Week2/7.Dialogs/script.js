const showBtn = document.querySelector(".show-btn");
const xBtn = document.querySelector(".x-icon");
const modalContainer = document.querySelector(".container");

xBtn.addEventListener("click", () => (modalContainer.style.display = "none"));
showBtn.addEventListener(
	"click",
	() => (modalContainer.style.display = "block")
);
