const handleClick = (className) => {
	document
		.querySelectorAll(".tabs button")
		.forEach((item) => item.classList.remove("active"));

	document
		.querySelectorAll(".content p")
		.forEach((item) => (item.style.display = "none"));

	const target = document.querySelectorAll(`.${className}`);

	target[0].classList.add("active");
	target[1].style.display = "block";
};

handleClick("tab-1");

document
	.querySelectorAll(".tabs button")
	.forEach((item) =>
		item.addEventListener("click", () => handleClick(item.classList[0]))
	);
