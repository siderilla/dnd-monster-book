import DndService from "./services/dnd-service.js";

document.addEventListener('DOMContentLoaded', () => {
    const monsterData = JSON.parse(localStorage.getItem('monsterData'));

    if (monsterData) {
        document.getElementById('monster-name').textContent = monsterData.name;
        document.getElementById('monster-image').src = DndService.BASE_URL + monsterData.image;
        document.getElementById('monster-size').textContent = `Size: ${monsterData.size}`;
        document.getElementById('monster-type').textContent = `Type: ${monsterData.type}`;
        document.getElementById('monster-align').textContent = `Alignment: ${monsterData.alignment}`;
		document.getElementById('monster-strength').textContent = `Strength: ${monsterData.strength}`;
        document.getElementById('monster-dexterity').textContent = `Dexterity: ${monsterData.dexterity}`;
        document.getElementById('monster-constitution').textContent = `Constitution: ${monsterData.constitution}`;
        document.getElementById('monster-intelligence').textContent = `Intelligence: ${monsterData.intelligence}`;
        document.getElementById('monster-wisdom').textContent = `Wisdom: ${monsterData.wisdom}`;
        document.getElementById('monster-charisma').textContent = `Charisma: ${monsterData.charisma}`;

    } else {
        console.error('No monster data found in localStorage');
    }
});