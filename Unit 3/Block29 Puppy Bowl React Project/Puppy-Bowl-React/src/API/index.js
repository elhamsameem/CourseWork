
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b";

async function fetchAllPlayers() {
    try {
        const response = await fetch(`${BASE_URL}/players`);
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error(error);
    }
}

async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`${BASE_URL}/players/${id}`);
        const result = await response.json();
        return result.data.player;
    } catch (error) {
        console.error(error);
    }
}

async function postNewPlayer(newPlayer) {
    newPlayer.forEach((value, key) => {
        console.log(key, value);
    });

    console.log(JSON.stringify(newPlayer), newPlayer);

    try {
        const response = await fetch(`${BASE_URL}/players/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer),

        });
        const result = await response.json();
        console.log("result", result);
        return result;

    } catch (error) {
        console.error(error);
    }
}




export { fetchAllPlayers, fetchSinglePlayer, postNewPlayer };