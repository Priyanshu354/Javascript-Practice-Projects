const mathMark = document.querySelector("#mathMark");
const scienceMark = document.querySelector("#scienceMark");
const hindiMark = document.querySelector("#hindiMark");
const englishMark = document.querySelector("#englishMark");
const subBtn = document.querySelector('#subBtn');
const resultText = document.querySelector('#result');

const calMark = () => {
    const math = parseInt(mathMark.value); // Convert input values to numbers
    const science = parseInt(scienceMark.value);
    const hindi = parseInt(hindiMark.value);
    const english = parseInt(englishMark.value);

    const stuTotalMark = math + science + hindi + english;

    if(stuTotalMark > 400 || stuTotalMark < 0){
        resultText.innerHTML = `Bahi please sahi mark dal de`;
    }
    else{
        const totalMark = 400;

        const percentage = (stuTotalMark / totalMark) * 100;

        resultText.innerHTML = `Your Total Mark is ${stuTotalMark} & Percentage is ${percentage}%`;
    }
    
};

subBtn.addEventListener('click', calMark);
