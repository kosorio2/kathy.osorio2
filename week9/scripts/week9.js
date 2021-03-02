// Global Variables

x = 6;

window.x //would = 6

window.x === x; //would be true

// window.confirm('Do you wish to continue?'); //will stop the execution of the program and display a 
                                            //confirmation dialog that shows the message provided as an argument, and giving the options of OK or Cancel.


const popup = window.open("https://sitepoint.com ',' SitePoint','width=400,height=400,resizable=yes");

console.log(popup)  //How does this work? 

//This is how you create cookies
// const cookies = document.cookie.split("; ");
// for (crumb of cookies){
//     const [key,value] = crumb.split("=");
//     console.log(`The value of ${key} is ${value}`);
// }



//This creates a rotating square
// const squareElement = document.getElementById('square');
// let angle = 0;
// setInterval( () => {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000/60);

// const squareElement = document.getElementById('square');
// let angle = 0;
// function rotate() {
//     angle = (angle + 2)%360;
//     squareElement.style.transform = `rotate(${angle}deg)`
//     window.requestAnimationFrame(rotate);
// }
// const id = requestAnimationFrame(rotate);

