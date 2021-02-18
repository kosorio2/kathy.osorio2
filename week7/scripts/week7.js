// Call and Apply Methods 

function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

let superman = sayHello.call(clark);

console.log(superman)

//Memoization - is when a functions takes some time to compute a return value, we can save the result in a a cache property 

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

console.log(square(3));

console.log(square(-11));

//Creating Self-contained Code Blocks 

(function() {
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());

    (function() {
        const name = 'Block B';
        console.log(`Hello from ${name}`);
}());


//Init time branching 

function ride() {
    if (window.unicorn) {
        ride = function() {
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}

console.log(ride());

//Recursive functions 
//This function take a number as a parameter, as well as a sequence which has a default value of an array
function collatz(n, sequence=[n]) { 
    if (n === 1){ //The first thing the function does is tests to see if n has a value of 1
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) { // If it hasn't reached 1, it checks if the value of n is even (in which case it divides it by 2)
        n = n/2;
    } else { 
        n = 3*n + 1; //If it is odd, it multiplies by 3 and then adds 
    }
    return collatz(n, [...sequence,n]);
}

document.querySelector('.note1').innerHTML = collatz(18);


//Event-driven Asynchronous Programming 
// By using callbacks, we ensure that waiting for these tasks to complete doesn't 
// hold up the execution of other parts of the program. Once the task has been completed, 
// the callback will be invoked before returning to the rest of the program.

function wait(message, callback, seconds) { //To simulate an operation that takes some time to happen, we can use the setTimeout() function to call the callback after a given number of seconds:
    setTimeout(callback, seconds*1000);
    console.log(message); 
}

function selfDestruct() {
    console.log('BOOOOM!')
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');


//Creating a promise 
//The executor initializes the promise and starts the asynchronous operation

// const promise = new Promise( (resolve, reject) => {
//     if (sucess) {
//         resolve(value);
//     }
//     else {
//         reject(error);
//     }
// });

const dice = {
    sides: 6,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    console.log('Before the roll');
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    console.log('After the roll');


//Async function examples: 
async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        //load the game using the return info
    }
    catch (error){
        throw error;
    }
};


//functions that return functions 

function greeter(greeting = 'Hello') {
    return function() {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();