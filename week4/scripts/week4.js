//This is the same thing as: const form = document.getElementByTagname('form)[0];
// const form = document.form[0];

const form = document.forms['search'];
form.addEventListener ('submit', search, false);


function search() {
    alert(' Form Submitted');
} 
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
    //This prevents the form from being submitted to the URL
}

// hero.realName = form.realName.value; This is used to process the password information 

//Super Hero example: 
hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value); 

form.city;

hero.city = form.city.value;
form.city.options[form.city.selectedIndex].text; 
selected = form.city.options[2].text;

console.log(selected); //This shows which value was selected


//Object Orinted Programming 

//JavaScript uses a prototypal inheritance model.
//This means that very class has a prototype property that is shared by every instance of the class

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}`;
    }
}

const leo = new Turtle('Leonardo');

console.log(leo.name); 
console.log(leo.sayHi());

Turtle.prototype; //The prototype property returns as an object

Turtle.prototype.weapon = 'Hands';

Turtle.prototype.attack = function() {
    return `Feel the power of my ${this.weapon}!`;
}

const raph = new Turtle('Raphael');

console.log(raph.name);
console.log(raph.sayHi());
console.log(raph.attack());

console.log(raph.constructor.prototype);


//Creating private properties 
class Tortuga {
    constructor(name, color) {
        this.name = name; 
        let _color = color; 
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

// raph = new Tortuga('Raphael', 'Red');

// console.log(raph.getColor());


// Object base inheritance example

// const Human = {
//     arms: 2,
//     legs: 2,
//     walk() { console.log('Walking'); }
// }

// const Superhuman = Object.create(Human);
// Superhuman.change = function() {
// return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
// }; 

// const superman = Object.create(Superhuman);

// Superhuman.init = function(name,realName){
//     this.name = name;
//     this.realName = realName;
//     this.init = undefined; // this line removes the init function, so it can only be called once
//     return this;
// }

// superman.name = 'Superman';
// superman.realName = 'Clark Kent';

// const batman = Object.create(Superhuman);
// batman.init('Batman','Bruce Wayne');

// const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry');

// superman.friend = [batman, aquaman]

// superman.findFriends = function() {
//     this.friends.forEach((friend) => {
//         console.log(`${friend.name} is friends with ${this.name}`);
//     }
//     );
// }
// document.querySelectorAll('.thatExample').innerHTML = superman.findFriends(); 