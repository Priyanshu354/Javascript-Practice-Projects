const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector("body");

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.id === "box1") {
            body.style.backgroundColor = "grey";
        }

        if (e.target.id === "box2") {
            body.style.backgroundColor = "white";
        }

        if (e.target.id === "box3") {
            body.style.backgroundColor = "blue";
        }

        if (e.target.id === "box4") {
            body.style.backgroundColor = "yellow";
        }

        if (e.target.id === "box5") {
            body.style.backgroundColor = "green";
        }
    });
});
