import DndService from "./services/dnd-service.js";

const service = new DndService();

const queryParams = new URLSearchParams(window.location.search);
const monsterIndex = queryParams.get('index');

service.getData().then(monsterData => {
	const monster = monsterData.find(monster => monster.index == monsterIndex);

	if (monster) {
		const imageUrl = monster.image;

		const imageMonster = document.createElement('img');
		imageMonster.src = imageUrl;
		imageMonster.alt = monster.name;
		document.getElementById('monster-image-container').appendChild(imageMonster);

		document.getElementById('monster-name').
	} else {
		console.error('Monster not found');
	}
})