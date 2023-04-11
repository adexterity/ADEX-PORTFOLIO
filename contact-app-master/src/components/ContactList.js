import React, { useState } from "react";

import ContactCard from "./ContactCard";

// this function displays the content of the state object
const ContactList = (props) => {
  const [query, setQuery] = useState("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts
    .filter((contact) => contact.name.toLowerCase().includes(query))
    .map((contact) => {
      return (
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
          handleEdit={(id) => props.editContactHandler(id)}
        />
      );
    });
  return (
    <div className="contact-container">
      <div>
        <i className="fa-sharp fa-solid fa-address-book contact-icon"></i>
      </div>
      <div className="search-add">
        <input
          type="search"
          placeholder="search by contact name"
          className="search-field"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className=" add-contact-btn" onClick={props.handleButtonClick}>
          <span>
            <i className="plus icon"></i>
          </span>
          Add Contact
        </button>
      </div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>{renderContactList}</tbody>
      </table>
    </div>
  );
};

export default ContactList;
