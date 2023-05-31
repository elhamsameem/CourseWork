async function init() {
    const songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);
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

async function rederSingleSong (id) {
    try {
        const singleSong = await fetch(`${SONGS_API_URL}/${id}`)
        const song = await singleSong.json();
        console.log(song);
        const songContainer = document.getElementById("song-container");
        const newSong = document.createElement("div")
        newSong.classList.add("new-song");
        newSong.style.border= "2pt solid black";
        newSong.style.margin= "1rem";
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
        
    }
}


async function renderAllSongs (songs) {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = "";
    songs.forEach(Element => {
        rederSingleSong(Element.id);
   });
    

}

