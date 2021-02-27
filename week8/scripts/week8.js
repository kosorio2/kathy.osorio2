// Chapter 8 - Just talked about transitions. 
// Chapter 12 Examples 

let canvas = document.getElementById("myCanvas");
let canvas2 = document.getElementById("canvas2");

let context = canvas.getContext("2d"); //The object that’s returned by getContext is an instance of CanvasRenderingContext2D

//This sets up the paint brush with paint 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

//This actually draws the rectangle 
// In the canvas coordinate system, the top-left corner is (0,0). If the canvas is 200 pixels by 200 pixels, then the bottom-right corner is (200,200)
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    let canvas = document.getElementById("demo2");
    let context = canvas.getContext("2d");
    context.strokeStyle = "red";

    let img = new Image();
    img.src = "images/bg-bike.jpg";
    img.onload = function() {
        let pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern; 
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);

    };
}

// This function is painting a circle and then displaying it to the canvas 

function drawCircle(canvas) {
    let context = canvas2.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke();
}

drawCircle()

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    let canvas3 = document.getElementById("canvas3");
    let context = canvas3.getContext("2d");
    let image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 

};

drawImageToCanvas()
