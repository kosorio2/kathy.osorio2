let ol = document.querySelector('ol');

const links = [ 
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Project",
        url: "week6/toDoApp/toDo.html"
    },
    {
        label: "Week 7 Notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 Notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 Notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 Notes",
        url: "week10/index.html"
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