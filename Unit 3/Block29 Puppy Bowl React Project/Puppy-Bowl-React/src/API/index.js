
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b";

async function fetchAllPlayers () {
    const response = await fetch (`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
}

async function fetchSinglePlayer (id) {
    const response = await fetch (`${BASE_URL}/players/${id}`);
    const result = await response.json();
    return result.data.player;
}


export {fetchAllPlayers, fetchSinglePlayer};