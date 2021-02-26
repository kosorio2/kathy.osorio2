// Chapter 8 Examples
















// Chapter 12 Examples 

let canvas = document.getElementById("myCanvas");

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
