function Human (age) {
    this.age = age
    //this refers to an instance.
}

let greg = new Human(22)
let thomas = new Human(24)

console.log(greg) //greg is an instance of Human in the code 
console.log(thomas)

//a method is a fancy word for functions that are associated with an object 

//this is always set to "Window" in a simple function
function simpleFunction() {
    console.log(this)
}

const o = {
    sayThis () {
        simpleFunction()
    }
}

simpleFunction()
o.sayThis() 


//Nested Objects 

const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince'},
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
}
answer = jla.wonderWoman.realName;
document.querySelector('.two').innerHTML = (`Wonder Woman's real name: ${answer}`)

flash = jla['flash']['realName'];
document.querySelector('.three').innerHTML = (`Flash has a real name, and it is: ${flash}`)


//this property 

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1; 
    }
}
rolls = dice.roll() 
document.querySelector('.four').innerHTML = (`The random roll: ${rolls}`)

dice.sides = 20;
newRoll = dice.roll();

document.querySelector('.five').innerHTML = (`Random roll on a larger dice : ${newRoll}`)

//The Math object has eight properties that represent a mix of commonly used math constants 
Pi = Math.PI; 
document.querySelector('.six').innerHTML = (`The value of Pi = ${Pi}`);  

squareRoot = Math.SQRT2; 
document.querySelector('.seven').innerHTML = (`The square root of 2 = ${squareRoot}`)

log = Math.LN2;
document.querySelector('.eight').innerHTML = (`The natural logarithm of 2 = ${log}`)

roundUp = Math.ceil(4.2);
document.querySelector('.nine').innerHTML = (`Math.ceil will round a number up to the next integer. Example (4.3) = ${roundUp}`)

roundDown = Math.floor(4.2);
document.querySelector('.ten').innerHTML = (`Math.floor will round a number down to the next integer. Example (4.3) = ${roundDown}`)