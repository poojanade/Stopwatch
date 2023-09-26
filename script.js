let seconds = 00;
let miliseconds = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getmiliseconds = document.querySelector('.miliseconds');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click', () => {
    // clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    miliseconds = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getmiliseconds.innerHTML = miliseconds;
    getMins.innerHTML = mins;
})

function startTimer(){
    miliseconds++;
    if(miliseconds <= 9){
        getmiliseconds.innerHTML = '0' + miliseconds;
    }
    if(miliseconds > 9){
        getmiliseconds.innerHTML = miliseconds;
    }
    if(miliseconds > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        miliseconds = 0;
        getmiliseconds.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}