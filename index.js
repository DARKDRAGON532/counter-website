
const numberHTML = document.getElementById("number");
if (typeof(Storage) !== "undefined") {
    if (!localStorage.clickcount) {
        localStorage.count = 0;
    } 
    numberHTML.innerHTML = localStorage.count;
} else {
    numberHTML.innerHTML = "Sorry your browser does not support local storage..."
}

function Increase(){
   localStorage.count++
   numberHTML.innerHTML = localStorage.count;
}

function Lower(){
    localStorage.count--
    numberHTML.innerHTML = localStorage.count;
}

function Reset(){
    localStorage.count = 0;
   numberHTML.innerHTML = localStorage.count;
}