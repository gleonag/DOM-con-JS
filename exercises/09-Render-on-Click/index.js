
let button = document.getElementById("superDuperButton")
button.addEventListener("click", () => {
	
	const container = document.createElement("DIV");
	container.style.background = "yellow";
	container.innerHTML = "Hello World";
	document.body.appendChild(container)
})



