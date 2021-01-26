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
