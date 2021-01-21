const firstName = 'Kathy';
const lastName = 'Hansen';

const section = document.querySelector('section');
const div1 = document.createElement('div'); 
div1.textContent = firstName; 
const div2 = document.createElement('div'); 
div2.textContent = lastName; 

section.appendChild(div1); 
section.appendChild(div2); 


const student = {
    firstName: 'Erik',
    lastName: 'Hansen'
}; 

const div3 = document.createElement('div');
div3.textContent = student.firstName; 

section.appendChild(div3); 