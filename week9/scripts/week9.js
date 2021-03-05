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

const btn = document.getElementById('rainbow');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);

const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event) {
    event.preventDefault();

    const number = Number(form.number.value);
    document.getElementsById('ouput').innerText = factorOf(number);

}

function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');

    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
            factors.push(i, n/i)
        }
    }
    return factors.sort((a, b) => a - b);
}


// Example for creating a mini chat

const URL = 'wss://echo.websocket.org/'; //It uses wss as a secure protocol
const outputDiv = document.getElementById('output');
const forme = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false)

//In this case, we call a function called output() with the 
//string 'CONNECTED' provided as an argument. The output() 
//is used to output messages to the screen.

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);

}
forme.addEventListener('submit', message, false);


function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false)

connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);