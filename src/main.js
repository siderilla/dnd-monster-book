import DndService from "./services/dnd-service.js"; // importa la classe dndservice

const monstersContainer = document.getElementById('monster-container'); // prendi il containter e salvalo in questa const

const service = new DndService(); // crea un'istanza di dndservice

function fetchData() {
    service.getData() // chiama il metodo getData di DndService
    .then(data => { // quando i data sono fetchati con successo
        for (const monster of data) { // itera tutti i mostri nei data
            render(monster); // renderizza il mostro (come? vai a vedere la funzione render sotto)
        }
    }); // se non gli dici cosa fare ovviamente output vuoto
}

fetchData();

function render(monsterData) {
    const link = document.createElement('a');
    link.href = 'monster-detail.html'; // link a nuova pagina
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

	link.addEventListener('click', () => {
        localStorage.setItem('monsterData', JSON.stringify(monsterData));
    });
}

// PascalCase - per le classi
// camelCase - per variabili, funzioni e metodi