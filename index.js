
const numberHTML = document.getElementById("number")

if (typeof(Storage) !== "undefined") {
    if (localStorage.count) {
        numberHTML.innerHTML = localStorage.count
      } else {
        localStorage.setItem("count" , number)
      }
} 
let number = Number(localStorage.count);

function Increase(){
    number++;
    localStorage.count = number;
    numberHTML.innerHTML = localStorage.count;
}

function Lower(){
    number--;
    if (number < 0) {
        number = 0;
    }
    localStorage.count = number;
    numberHTML.innerHTML = localStorage.count;
}

function Reset(){
    number = 0;
    localStorage.count = number;
    numberHTML.innerHTML = localStorage.count;
}