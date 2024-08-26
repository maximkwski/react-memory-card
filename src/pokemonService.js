

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
    for (let i = 1; i <= count; i++) {
        promises.push(fetchPokemon(i));
    }
    return Promise.all(promises);
};