const btn = document.getElementById("hamburger-btn");
const sidebar = document.getElementById("sidebar");

const handleClick = () => {
	if (sidebar.style.display === "none") {
		sidebar.style.display = "block";
	} else {
		sidebar.style.display = "none";
	}
};

btn.addEventListener("click", handleClick);
