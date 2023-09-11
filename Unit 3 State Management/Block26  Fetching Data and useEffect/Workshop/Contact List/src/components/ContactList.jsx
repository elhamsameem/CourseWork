import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);

  // Fetching all contacts from API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("There was an error fetching contacts: ", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr className="first-row">
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {
            // Mapping over contacts to render new row for each contact
            contacts.map((contact) => {
              return (
                <ContactRow
                  key={contact.id}
                  contact={contact}
                  setSelectedContactId={setSelectedContactId}
                />
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default ContactList;
