import React from "react";
import { useState, useEffect } from "react";

function RenderSingleContactDetails({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  // fetching single contact
  useEffect(() => {
    const fetchSingleContact = async (selectedContactId) => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("There was an error fetching contacts: ", error);
      }
    };

    fetchSingleContact(selectedContactId);
  }, []);

  if (selectedContactId) {
    return (
      <div id="single-contact-details">
        {contact && (
          <ul id="details">
            <li>ID: {contact.id}</li>
            <li>Name: {contact.name}</li>
            <li>Username: {contact.username}</li>
            <li>Email: {contact.email}</li>
            <li>Adress: </li>
            <ul>
              <li>Street: {contact.address.street}</li>
              <li>Suite: {contact.address.suite}</li>
              <li>City: {contact.address.city}</li>
              <li>Zip Code: {contact.address.zipcode}</li>
            </ul>
            <li>Phone: {contact.phone}</li>
            <li>Website: {contact.website}</li>
            <li>Company: </li>
            <ul>
              <li>Name: {contact.company.name}</li>
              <li>Catchphrase: {contact.company.catchPhrase}</li>
            </ul>
          </ul>
        )}
        <button
          onClick={() => {
            setSelectedContactId(null);
          }}
        >
          Back
        </button>
      </div>
    );
  } else {
  }
}

export default RenderSingleContactDetails;
