var modify = document.getElementById("currentValue");
var currentNumber = 0;

function increase() {
    currentNumber = ++currentNumber;
    modify.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        modify.classList.remove("color")
    }
}

function decrease() {
    currentNumber = --currentNumber;
    modify.innerHTML = currentNumber;
    if (currentNumber < 0) {
        modify.classList.add("color")
    }
}