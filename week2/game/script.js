let character = document.getElementById("character");

let block = document.getElementById("block");

function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    } 
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500); 
}

let checkDead = setInterval(function() {
    let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));  
    if (blockLeft < 20 && blockLeft >0  && characterBottom >= 50) {
        block.style.animation = "none"; 
        alert("You lost"); 
    }
},30); 