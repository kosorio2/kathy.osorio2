//The type property returns the type of event that occured. In the example below it is a "click".
// function doSomething(event){
//     console.log(event.type);
// }
// addEventListener('click', doSomething);


//THIS CLARIFIES WHICH AREA YOU ARE IN
// function doSomething(event){
//     console.log(event.target);
// }
// addEventListener('click', doSomething);


// function doSomething(event){
//     console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
// }
// addEventListener('click', doSomething);

//MOUSE EVENTS
// const clickParagraph = document.getElementById('click');
// clickParagraph.addEventListener('click',() => console.log('click') );
// clickParagraph.addEventListener('mousedown',() => console.log('down') );
// clickParagraph.addEventListener('mouseup',() => console.log('up') );

//SECOND EXAMPLE: 
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

//KEYBOARD EVENTS: 
// addEventListener('keydown',highlight);
// addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('touchend', () => console.log('Touch stopped'));
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });

