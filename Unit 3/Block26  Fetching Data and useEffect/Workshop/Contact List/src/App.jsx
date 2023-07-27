import React from "react";
import { useState, useEffect } from "react";
import ContactList from "./components/contactList";
import RenderSingleContactDetails from "./components/RenderSingleContactDetails";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <h1>Block 26 Workshop: Contact List</h1>
      {selectedContactId ? (
        <RenderSingleContactDetails
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
