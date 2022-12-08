let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

// 


for (const country of countries){
    let option = document.createElement("option");
    option.innerHTML = country;
    mySelect.appendChild(option)
}   
let input = document.getElementById("mySelect");
    input.addEventListener("change", (country)=>{
        alert(input) 
        
    })


// let button = document.querySelector("#superDuperButton");
// button.addEventListener("click", () => {
// 	//your code here
// 	let list = document.getElementById("myList")
// 	let container = document.createElement("LI")
// 	list.appendChild(container)

// });