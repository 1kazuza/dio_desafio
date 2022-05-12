let number = document.getElementById("element");
let current_number = 0;

function increment() {
    current_number = current_number + 1;
    number.innerHTML = current_number;
}

function decrement() {
    current_number = current_number - 1;
    number.innerHTML = current_number;
}

function zero() {
    current_number = 0;
    number.innerHTML = current_number;
}