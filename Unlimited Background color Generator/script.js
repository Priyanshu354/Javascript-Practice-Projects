const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const bg = document.querySelector('body');
let intervalId;

function changeBackgroundColor() {
    let r = parseInt(Math.random() * 1000) - 744;
    let b = parseInt(Math.random() * 1000) - 744;
    let g = parseInt(Math.random() * 1000) - 744;
    bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

start.addEventListener('click', function() {
    intervalId = setInterval(changeBackgroundColor, 1000);
});

stop.addEventListener('click', function() {
    clearInterval(intervalId);
});
