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
    rgbInputBtnHandler ();
    HexInputBtnHandler ();
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
    const btnRGB = document.getElementById("btnRGB"); //catch the rgb color change button
    btnRGB.addEventListener('click', () => {
    const resultField = document.getElementById("field"); 
    const rgbColor = changeRGBcolor();
    resultField.style.background = rgbColor; 
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
    const btnHEX = document.getElementById("btnHex"); // catch the hex color change button
    btnHEX.addEventListener('click', () => {
        const resultField = document.getElementById("field");
        const hexColor = changeHEXcolor();
        resultField.style.background = hexColor;
    })
}

//CREATE INPUT RGB COLOR CODE VALUE
function changeInputColorRGB () {
    const red = document.getElementById("red").value; 
    const green = document.getElementById("green").value; 
    const blue = document.getElementById("blue").value; 
    const rgbInputColor = `rgb(${red},${green},${blue})`
    return rgbInputColor;
}

//CREATE INPUT HEX COLOR CODE VALUE
function changeInputColorHEX () {
    const colorHex = document.getElementById("hexInput").value;
    const colorHexValue = `#${colorHex.toString(16)}`;
    return colorHexValue;
}

//INPUT COLOR CHANGE BUTTON HANDLER
function rgbInputBtnHandler () {
    const rgbInputBtn = document.getElementById("rgbInputBtn");
    rgbInputBtn.addEventListener("click", function() {
        const userResultField = document.getElementById("rgbField");
        userResultField.style.background = changeInputColorRGB ();
    })
}

//INPUT COLOR CHANGE BUTTON HANDLER
function HexInputBtnHandler () {
    const hexInputBtn = document.getElementById("hexInputBtn");
    hexInputBtn.addEventListener("click", function () {
        const  userResultField = document.getElementById("hexField");
        userResultField.style.background = changeInputColorHEX();
        console.log("hello")
    })
}
