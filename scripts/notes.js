let ol = document.querySelector('ol');

const links = [ 
    {
        label: "Week 1 notes",
        url: "../week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "../week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "../week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "../week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "../week5/index.html"
    },
    {
        label: "Project",
        url: "../week6/toDoApp/toDo.html"
    }
];

links.forEach (
    link => {
        ol.innerHTML += 
        `
         <li><a href="${link.url}">${link.label}</a></li>
        `
    }
);