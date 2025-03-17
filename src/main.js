import DndService from "./services/dnd-service.js";

const monstersContainer = document.getElementById('monster-container');

const service = new DndService();

function fetchData() {
    service.getData()
    .then(data => {
        for (const monster of data) {
            render(monster);
        }
    }); // se non gli dici cosa fare ovviamente output vuoto
}

fetchData();

function render(monsterData) {
    const link = document.createElement('a');
    link.href = monsterData.fullUrl;
    link.classList.add('monster-link');

    const container = document.createElement('div');
    container.classList.add('detail-monster');
    
    const name = document.createElement('h3');
    const nameText = document.createTextNode(monsterData.name);

    const image = document.createElement('img');
    image.classList.add("monster-img");
    image.src = DndService.BASE_URL + monsterData.image;

    name.appendChild(nameText);
    container.appendChild(name);
    container.appendChild(image);
    link.appendChild(container);
    monstersContainer.appendChild(link);
}

// PascalCase - per le classi
// camelCase - per variabili, funzioni e metodi