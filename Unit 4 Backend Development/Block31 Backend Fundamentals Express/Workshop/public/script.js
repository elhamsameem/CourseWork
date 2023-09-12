// Fetch the pets info from data.js
async function fetchPets() {
    try {
        const response = await fetch(`/api/v1/pets`);
        const pets = await response.json();
        displayPets(pets);
        console.log(pets);

    } catch (error) {
        console.error(error);
    }
}

function displayPets(pets) {
    const root = document.getElementById("root");
    const petContainer = document.createElement("div");
    const pcode = document.createElement("div");
    pcode.setAttribute("class", "pcode-div");
    pcode.innerHTML = `
        <h3>Pseudocode:</h3>
        <div>
        <p>GET  / - returns homepage with index.html file</p>
        <p>GET  /api => hello world route, </p>
        <p>GET  /api/v1/pets => when user reaches this point they will see the array of pets as response. </p>
        <p>GET  /api/v1/pets/owner?owner=owner_name => User will receive an array of pets based on owner's name query</p>
        <p>GET  /api/v1/pets/:name  => User will recieve an array of the pet with their name</p>
        </div>

    `;
    petContainer.appendChild(pcode);
    petContainer.setAttribute("class", "pet-container");

    pets.forEach((pet) => {
        const petInfo = document.createElement("div");
        petInfo.setAttribute("class", "pet-info-div");

        petInfo.innerHTML = `
        <h3>${pet.id}. ${pet.name}</h3>
        <div class="pet-details-div">
        <p>Breed: ${pet.breed}</p>
        <p>Age: ${pet.age}</p>
        <p>Owner: ${pet.owner}</p>
        <p>Owner's Phone#: ${pet.telephone}</p>
        <p>Appointments: </p>
        <ul>
        ${pet.appointments.map((apt) => {
            return `
            <li>Date: ${apt.date}</li>
            <li>Time: ${apt.time}</li>
            <li>Reason: ${apt.reason}</li>
            `;
        })}
        </ul>
        
        </div>

        `;

        petContainer.appendChild(petInfo);
    });

    root.appendChild(petContainer);
}

fetchPets();