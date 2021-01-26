import {Student} from './student.js';

const students = [];

const student1 = new Student('Kathy', 'Hansen', '112223333',['The Mortal Instruments']);
const student2 = new Student('Erik', 'Hansen', '1231234567');
const student3 = new Student('Whitney', 'Hansen', '132321112');

students.push(student1);
students.push(student2);
students.push(student3);

const tbody = document.querySelector('tbody');

tbody.innerHTML = students.map(
    student => 
    `<tr>
        <td>${student.FirstName} </td>
        <td>${student.LastName}</td>
        <td>${student.INumber}</td>
    </tr>`
).join(''); 

document.querySelector('button')
    .addEventListener('click', (event) => {
        event.preventDefault();

        console.log('clicked');

        //create a new student

        const newStudent = new Student();
        document.querySelector('#firstName').value,
        document.querySelector('#lirstName').value,
        document.querySelector('#iNumber').value

        // console.log(newStudent);

        students.push(newStudent);
        

    });


