import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return {
            id: response.data.id;
            name: response.data.name;
            image: response.data.sprites.front_default
        };
    } catch (error) {
        console.log('error fetching pokemon data: ', error);
        return null;
    }
};

export const fetchMultiplePokemon = async (count) => {
    const promises = [];
    for (let i = 1; i <= count; i++) {
        promises.push(fetchPokemon(i));
    }
    return Promise.all(promises);
};