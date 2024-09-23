let counter = 0;


function increase() {
    counter ++;

    document.getElementById("counter").innerText = counter;
}


function decrease() {
    counter  = 0;

    document.getElementById("counter").innerText = counter;
}