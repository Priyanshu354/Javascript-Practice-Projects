const setting = document.querySelector('#setting');
const dobText = document.querySelector('#dob');
const dobInput = document.querySelector('#dobinput');
const intialText = document.querySelector('#intialText');
const finalText = document.querySelector('#finalText');
const submitBtn = document.querySelector('#subBtn');
const dobinputdate = document.querySelector('#dobinput');


let vis = false;
setting.addEventListener('click', function() {
    if (vis == false) {
        vis = true;
        dobText.style.visibility = "visible";
        dobInput.style.visibility = "visible";
        setting.style.position = "static";

    } else {
        vis = false;
        dobText.style.visibility = "hidden";
        dobInput.style.visibility = "hidden";
        setting.style.position = "absolute";
        setting.style.right = "120px";
        setting.style.bottom = "5px";
    }
});



let dateofbirth;

const TextHandler = () => {
    dateofbirth = dobinputdate.value;

    if(dateofbirth){
        intialText.classList.add('hide');
        finalText.classList.remove('hide');
    }
    else{
        finalText.classList.add('hide');
        intialText.classList.remove('hide');
    }
};

TextHandler();
submitBtn.addEventListener('click' , TextHandler);



const yearsEl = document.querySelector('#years');
const monthsEl = document.querySelector('#months');
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
let dateinput;

const updateAge = () => {
    dateinput = new Date(dobinputdate.value);
    const currdate = new Date();
    const datediff = currdate - dateinput;
    
    // Calculate years
    const years = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
    
    // Calculate months
    const months = Math.floor((datediff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    
    // Calculate days
    const days = Math.floor((datediff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    
    // Calculate hours
    const hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Calculate minutes
    const minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
    
    // Calculate seconds
    const seconds = Math.floor((datediff % (1000 * 60)) / 1000);
    
    // Update HTML content of elements
    yearsEl.innerHTML = years;
    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
};



submitBtn.addEventListener('click' , () => {
    setInterval(updateAge , 1000);
});
