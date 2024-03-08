const center = document.getElementsByClassName('time')[0];

function updateTime() {
    let date = new Date();

    let h3 = document.createElement('h3');
    h3.textContent = date.toLocaleString();

    // Clear the contents of the center element before appending the new time
    center.innerHTML = '';
    
    // Append the h3 element containing the time to the center element
    center.appendChild(h3);
}

// Call updateTime function immediately to show the time when the script starts
updateTime();

// Update the time every second using setInterval
setInterval(updateTime, 1000);
