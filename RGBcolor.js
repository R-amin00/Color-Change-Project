// Project requirement
// Change the background color by generation random RGB color


// first create onload function
window.onload = () => {
    main ();
}

// create main function
function main() {
    rgbButtonHandler();
}

// create random RGB color
function changeRGBcolor() {
    // lowest value of RGB color  rgb(0,0,0)
    // highest value of RGB color  rgb(225,225,225)
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);

    return `rgb(${red},${green},${blue})`
}

//RGB color change function
function rgbButtonHandler() {
    const body = document.getElementById("body"); 
    const btn = document.getElementById("btnRGB"); //catch the button
    btn.addEventListener('click', () => {
    const rgbColor = changeRGBcolor();
    body.style.background = rgbColor; 
})
}


