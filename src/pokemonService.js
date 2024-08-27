

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default
        };
    } catch (error) {
        console.log('error fetching pokemon data: ', error);
        
    }
};

export const fetchMultiplePokemon = async (count) => {
    const promises = [];
    const usedIDs = new Set();
    const maxPokemonId = 898;

    while (usedIDs.size < count) {
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        if(!usedIDs.has(randomId)) {
            usedIDs.add(randomId);
            promises.push(fetchPokemon(randomId));
        }

    }
    return Promise.all(promises);
};