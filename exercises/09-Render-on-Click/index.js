let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const container = document.createElement("DIV");
	container.style.background = "yellow";
	container.innerHTML = "Hello World";
	document.body.appendChild(container);
});