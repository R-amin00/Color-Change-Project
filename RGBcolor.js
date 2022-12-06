// Project requirement
// Change the background color by generation random RGB color


// first create onload function
window.onload = () => {
    main ();
}

// create main function
function main() {
    rgbBtnHandler();
    hexBtnHandler ();
}

// CREATE RGB COLOR GENERATE FUNCTION
function changeRGBcolor() {
    // lowest value of RGB color  rgb(0,0,0)
    // highest value of RGB color  rgb(225,225,225)
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);
    const rgbColorValue = `rgb(${red},${green},${blue})`; //RGB color code generate
    const rgbValueBox = document.getElementById("rgbValue"); //catch color code show div
    rgbValueBox.innerText = rgbColorValue; //set color code in div to show the users

    return rgbColorValue;
}

//RGB COLOR CHANGE FUNCTION HANDLER
function rgbBtnHandler() {
    const body = document.getElementById("body"); 
    const btnRGB = document.getElementById("btnRGB"); //catch the rgb color change button
    btnRGB.addEventListener('click', () => {
    const rgbColor = changeRGBcolor();
    body.style.background = rgbColor; 
})
}

// CREATE HEX COLOR GENERATE FUNCTION
function changeHEXcolor() {
     // lowest value of RGB color  rgb(0,0,0) == #000000
    // highest value of RGB color  rgb(225,225,225) == #ffffff
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);
    const hexColorValue = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`; //HEX color code generator from rgb color
    const HexValueBox = document.getElementById("hexValue"); //catch color code show div
    HexValueBox.innerText = hexColorValue; //set color code in div to show the users
    return hexColorValue;
}

//HEX COLOR CHANGE FUNCTION HANDLER
function hexBtnHandler () {
    const body = document.getElementById("body");
    const btnHEX = document.getElementById("btnHex"); // catch the hex color change button
    btnHEX.addEventListener('click', () => {
        const hexColor = changeHEXcolor();
        body.style.background = hexColor;
        console.log("hello color")
    })
}
