//To determine browser support for a feature is to use feature detection which is done using an if statment 

//Example: 
// if (window.holoDeck) {
//     virtualReality.activate();
// } //This makes sure that no errors occur if the method is not supported 

//alert() is the most basic form of debugging. It places breakpoints where the code breaks 
//Example:
function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        console.log('No, sorry.');
    } else if (age < 18) {
        console.log('Only if accompanied by an adult.');
    }
    else {
        console.log('Yes, come on in!');
    }
}

amIOldEnough(21)