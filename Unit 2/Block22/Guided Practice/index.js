async function init() {
    const songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);

    const newSong = {
        title: "As Long As You Love Me!",
        release_date: "2020-02-03",
        length: 340,
        genre_id: 1,
        artist_id: 1,
    };
    // addNewSong(newSong);

    // removeSong();

    renderNewSongForm();
}

init();

async function fetchAllSongs() {
    SONGS_API_URL = "http://fsa-async-await.herokuapp.com/api/guided-practice/songs";
    try {
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Got error: ", error);
    }
}

async function renderSingleSong(id) {
    try {
        const singleSong = await fetch(`${SONGS_API_URL}/${id}`);
        const song = await singleSong.json();
        const songContainer = document.getElementById("song-container");
        const newSong = document.createElement("div");
        newSong.classList.add("new-song");
        newSong.style.border = "2pt solid black";
        newSong.style.margin = "1rem";
        newSong.style.padding = "1rem";
        let lengthInfo = "";
        if (song.length) {
            Object.entries(song.length).forEach(([key, value]) => {
                lengthInfo += `${value} ${key} `;
            });
        } else {
            lengthInfo += "N/A";
        }
        newSong.innerHTML = `
            <div class = "single-song">
                <h4>Title: ${song.title}</h4>
                <h5>ID: ${song.id}</h5>
                <h5>Release Date: ${song.release_date}</h5>
                <h5>Length: ${lengthInfo}</h5>
            </div>
        `;
        songContainer.appendChild(newSong);

    } catch (error) {
        console.error(error);
    }
}


async function renderAllSongs(songs) {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = "";
    songs.forEach(Element => {
        renderSingleSong(Element.id);
    });
}

async function addNewSong(newSong) {
    try {
        const song = await fetch(SONGS_API_URL, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers: { "Content-Type": "application/json", },
        });

        fetchAllSongs();

    } catch (error) {
        console.error(error);
    }
}

async function removeSong(id) {
    const songs = await fetch(`${SONGS_API_URL}/${id}`, {
        method: "DELETE",
    });
}

function renderNewSongForm() {
    try {
        const newSongForm = document.querySelector("#new-song-form");
        newSongForm.innerHTML = `
            <form action="submit">
                <label for="title">Song Title: </label>
                <input type="text" name="title" id="title" placeholder="ex: As Long As You Love Me!"><br><br>
                <label for="artist_id">Artist ID: </label>
                <input type="text" name="artist_id" id="artist_id" placeholder="ex: 1"><br><br>
                <label for="genre_id">Genre ID: </label>
                <input type="text" name="genre_id" id="genre_id" placeholder="ex: 1"><br><br>
                <label for="release_date">Release Date: </label>
                <input type="text" name="release_date" id="release_date" placeholder="ex: 2020-01-01"><br><br>
                <button type="submit">Submit</button>
            </form>
        `;
        newSongForm.style.border = "2pt solid black";
        newSongForm.style.padding = "1rem";
        newSongForm.style.textAlign = "center";

        newSongForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const newSong = {
                title: document.getElementById('title').value,
                artist_id: document.getElementById('artist_id').value,
                genre_id: document.getElementById('genre_id').value,
                release_date: document.getElementById('release_date').value,
            };

            await addNewSong(newSong);
            const songs = await fetchAllSongs();
            renderAllSongs(songs);
        });


    } catch (error) {
        console.error(error);
    }
}
