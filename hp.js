document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');
    const getCharactersBtn = document.getElementById('getCharacters');

    // Функція для отримання персонажів
    async function fetchCharacters() {
        try {
            const response = await fetch('https://hp-api.onrender.com/api/characters');
            const characters = await response.json();
            displayCharacters(characters);
        } catch (error) {
            console.error('Помилка завантаження персонажів:', error);
        }
    }

    // Відображення персонажів
    function displayCharacters(characters) {
        characterList.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <h3>${character.name}</h3>
                <img src="${character.image}" alt="${character.name}" width="100%">
                <div class="character-info">
                    <p><strong>Вид:</strong> ${character.species}</p>
                    <p><strong>Стать:</strong> ${character.gender}</p>
                    <p><strong>Батьки:</strong> ${character.ancestry}</p>
                </div>
            `;
            characterList.appendChild(characterCard);
        });
    }

    // Натискання на кнопку для отримання персонажів
    getCharactersBtn.addEventListener('click', fetchCharacters);
});
