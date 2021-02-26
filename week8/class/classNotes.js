fetch('https://swapi.dev/api/people') 
    .then(result => result.json()) //This determines what the results will do
    .then(jsonResult => {
        let main = document.querySelector('main');

        jsonResult.results.forEach(
            person => {
                main.innerHTML += 
                    `<div>${person.name}</div>`;
            }
        );
    });
