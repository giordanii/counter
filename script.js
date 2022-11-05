var modify = document.getElementById("currentValue");
var currentNumber = 0;

function increase() {
    currentNumber = ++currentNumber;
    modify.innerHTML = currentNumber;
    if (currentNumber > 0) {
        modify.classList.add("positive");
    }
    else {
        modify.classList.remove("positive");
    }
}

function decrease() {
    currentNumber = --currentNumber;
    modify.innerHTML = currentNumber;
    if (currentNumber < 0) {
        modify.classList.add("negative");
    }
    else {
        modify.classList.remove("negative");
    }
}