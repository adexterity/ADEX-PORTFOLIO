import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  //since the content of the contacts Array is going to change from time to time, use useState hooks to define the contacts. we use hooks because we're in a functional component.
  const [contacts, setContacts] = useState([]);

  //pass this function as a props to the addContact component, so we can get the state object from that component and pass it as a contact parameter in this function.
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    //console.log(contacts);
  };

  //this method deletes items from the contacts array
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const LOCAL_STORAGE_KEY = "contacts"; //key for localStorage

  //this useEffect retrieves and display the items in the localStorage on refreshing the page.
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  //this useEffect adds item to the local storage when there's a change in the contacts array(the state)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

export default App;
