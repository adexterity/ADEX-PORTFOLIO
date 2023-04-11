import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Header from "./Header";
import NavBar from "./NavBar";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import Route from "./Route";

const App = () => {
  //since the content of the contacts Array is gditoing to change from time to time, use useState hooks to define the contacts. we use hooks because we're in a functional component.
  const [contacts, setContacts] = useState([]);
  //create a state for the addContent component
  const [showModal, setShowModal] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  //handle button click to show modal
  const handleButtonClick = () => {
    setShowModal(true);
  };

  //handle close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  //pass this function as a props to the addContact component, so we can get the state object from that component and pass it as a contact parameter in this function.
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contacts);
  };

  //this method deletes items from the contacts array
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const editContactHandler = (id) => {
    const editContact = contacts.find((contact) => contact.id === id);
    setSelectedContact(editContact);
    setShowEditModal(true);
  };

  //edit contact in the contact state
  const updateContactHandler = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  const LOCAL_STORAGE_KEY = "contacts"; //key for localStorage

  //this useEffect retrieves and display the items in the localStorage on refreshing the page.
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  //this useEffect adds item to the local storage when there's a change in the contacts array(the state)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);
  return (
    <div className="ui container">
      <Header />
      <NavBar />
      <ContactList
        contacts={contacts}
        getContactId={removeContactHandler}
        handleButtonClick={handleButtonClick}
        editContactHandler={editContactHandler}
      />

      {showModal && (
        <AddContact
          addContactHandler={addContactHandler}
          handleCloseModal={handleCloseModal}
        />
      )}
      {/* <Route path="/addcontact"></Route> */}

      {showEditModal && (
        <EditContact
          addContactHandler={addContactHandler}
          handleCloseModal={() => setShowEditModal(false)}
          updateContactHandler={updateContactHandler}
          contact={selectedContact}
        />
      )}
    </div>
  );
};

export default App;
