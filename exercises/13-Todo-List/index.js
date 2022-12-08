// Your code here

// addTodo

let deleteTask = document.querySelector(".fa fa-trash")
deleteTask.addEventListener("click", ()=>{
    let list = document.getElementById("addToDo")
    let container = document.removeChild("LI")
    list.appendChild(container)

})


// let li = document.querySelector("#secondElement");
// li.parentNode.removeChild(li)


// const container = document.createElement("DIV");
// 	container.style.background = "yellow";
// 	container.innerHTML = "Hello World";
// 	document.body.appendChild(container)

// let button = document.querySelector("#superDuperButton");
// button.addEventListener("click", () => {
// 	//your code here
// 	let list = document.getElementById("myList")
// 	let container = document.createElement("LI")
// 	list.appendChild(container)

// });