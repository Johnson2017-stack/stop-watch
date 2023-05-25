let startButtonElement = document.querySelector("#start-button");
let stopButtonElement = document.querySelector("#stop-button");
let resetButtonElement = document.querySelector("#reset-button");

let secondsElement = document.querySelector("#seconds");
let tensElement = document.querySelector("#tens");

let seconds = 00; 
let tens = 00;

let interval;


startButtonElement.addEventListener('click', function() {
    console.log("clicked!!!");

    interval = setInterval(startTimer, 10)


})
stopButtonElement.addEventListener('click', function(){
    console.log("click")
    clearInterval(interval);
})

resetButtonElement.addEventListener('click', function(){
    console.log("reset click")
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    tensElement.innerHTML = tens;
    secondsElement.innerHTML = seconds;

})
function startTimer () {
    tens++;

    if (tens <=9) {
        tensElement.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        tensElement.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        secondsElement.innerHTML = "0" + seconds;
        tens = 0;
        tensElement.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        secondsElement.innerHTML = seconds;
    }
    
}

