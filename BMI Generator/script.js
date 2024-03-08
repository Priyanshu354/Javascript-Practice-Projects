const form = document.querySelector('.input-details');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please give a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please give a valid weight';
    } else {
        // Convert height from cm to meters
        const heightInMeters = height / 100;
        const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${BMI}</span>`;

        let resMsg = document.createElement('h1');
        let text;
        if (BMI < 18.6) {
            text = document.createTextNode("You are underweight");
        } else if (BMI > 24.9) {
            text = document.createTextNode("You are overweight");
        } else {
            text = document.createTextNode("You are normal weight");
        }

        resMsg.appendChild(text);
        result.appendChild(resMsg);
    }
});
