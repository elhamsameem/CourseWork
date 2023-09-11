const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

const PARTIES_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/parties';

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const deleteParty = async (id) => {
  // your code here
  const party = await fetch(`${PARTIES_API_URL}/${id}`, {
    method: "DELETE",
  });
};

// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    // fetch party details from server
    const party = await getPartyById(id);
    console.log(party);
    // create new HTML element to display party details
    const partyDetailsElement = document.createElement('div');
    partyDetailsElement.classList.add('party-details');
    //dispay single party in the main party container only
    partyContainer.innerHTML = "";
    partyDetailsElement.innerHTML = `
            <h2>${party.name.toUpperCase()}</h2>
            <p>Date: ${party.date}</p>
            <p>Time: ${party.time}</p>
            <p>Location: ${party.location}</p>
            <p>Description:<br>${party.description}</p>
            <button class="close-button">Close</button>
        `;

    partyContainer.appendChild(partyDetailsElement);
    // add event listener to close button
    const closeButton = partyContainer.querySelector('.close-button');
    closeButton.addEventListener('click', async () => {
      // reload the page
      location.reload();

    });
  } catch (error) {
    console.error(error);
  }
};

// render all parties
const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = '';
    parties.forEach((party) => {
      const partyElement = document.createElement('div');
      partyElement.classList.add(`party`);
      partyElement.innerHTML = `
                <h2>${party.name.toUpperCase()}</h2>
                <p>${party.description}</p>
                <p>${party.date}</p>
                <p>${party.time}</p>
                <p>${party.location}</p>
                <button class="details-button" data-id="${party.id}">See Details</button>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
      partyContainer.appendChild(partyElement);

      // see details
      const detailsButton = partyElement.querySelector('.details-button');
      detailsButton.addEventListener('click', async () => {
        // your code here
        renderSinglePartyById(party.id);
        console.log(party.id);
      });

      // delete party
      const deleteButton = partyElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', async (event) => {
        // your code here
        const partyId = event.target.dataset.id;
        deleteParty(partyId);
        //will refresh the page after deleing a party
        location.reload();
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// init function
const init = async () => {
  // your code here
  const parties = await getAllParties();
  renderParties(parties);
};

init();
