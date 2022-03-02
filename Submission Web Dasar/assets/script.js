var scroll = new SmoothScroll('a[href*="#"', {
    speed: 1000,
    speedAsDuration: true
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}