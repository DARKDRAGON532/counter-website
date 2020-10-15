
if (typeof(Storage) !== "undefined") {
    if (!localStorage.count) {
        localStorage.setItem("count", "0");
    } 
} 
let number = 0;
const numberHTML = document.getElementById("number")

function Increase(){
    number++;
    localStorage.count = String(number);
    numberHTML.innerHTML = localStorage.count;
}

function Lower(){
    number--;
    if (number < 0) {
        number = 0;
    }
    localStorage.count = String(number);
    numberHTML.innerHTML = localStorage.count;
}

function Reset(){
    number = 0;
    localStorage.count = String(number);
    numberHTML.innerHTML = localStorage.count;
}