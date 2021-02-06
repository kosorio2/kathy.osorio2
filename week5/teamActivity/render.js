import {hikeList} from './hikes.js'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";

function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

function renderOneHike(hike) {
    const item = document.createElement("li");
    // item.setAttribute(id, hike.id);

    item.innerHTML = `
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
          <h2>${hike.name}</h2>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    return item;
}

// function detailView(e) {

// }



export {
    showHikeList
    // detailView
}