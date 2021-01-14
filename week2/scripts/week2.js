// Game from Novice to Ninja
// const question = "What is Superman's real name?";
// const answer = prompt(question);
// document.write(`You said Super Man's real name is: ${ answer }`); 

const heroes = [];

heroes[0] = ' Hawk Eye';
heroes[1] = ' Spiderman'; 
heroes[2] = ' Iron Man';

avengers = heroes.concat([' Hulk', ' Black Widow']); 

// avengers.reverse(); This command switches the order of the Array 
avengers.sort(); 

document.querySelector('#notes').innerHTML = (`Some Marvel superheroes are: ${avengers}`); 


// Examples with Map()
const romanNumerals = new Map(); 

romanNumerals.set(1, ' I ').set( 2,' II ').set( 3,' III ').set( 4,' IV ').set( 5,' V ');

array = [...romanNumerals];

document.querySelector('.first').innerHTML = (`From Map to an array: [ ${array} ]`); 


// While Loops

let bottles = 10; 
while (bottles > 0) {
    document.querySelector('.second').innerHTML = (`There were 10 bottles. But now there is only ${bottles} left.`)
    bottles--; 
}

//filtering 

const numbers = [2, 7, 6, 5, 11, 24, 12, 3, 9, 14, 15, 23, 26, 29, 40, 52, 61, 72];

filtered = numbers.filter(x => x%2 === 0); 

document.querySelector('.third').innerHTML = (`Here are the even numbers from the list: [ ${ filtered } ]`); 




//Notes - Functions 

//function declaration
function save1() {
    // console.log('save1');

    const name = document.querySelector('#name');
    console.log(name.value);   
    
    const result = document.querySelector('#result');
    return result.textContent 
}

//function express 
const save2 = function() {
    console.log('save2');
}

// arrow function 
const save3 = () => {
    console.log('save3');
}

document.querySelector('button')
    .addEventListener('click', save1); 