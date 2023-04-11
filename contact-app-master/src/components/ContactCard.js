import React from "react";
import user from "../images/contact.png";
import "./componentStyle.css";

//this compoent is use to
const ContactCard = (props) => {
  const { id, name, email, phoneNo } = props.contact;
  return (
    <tr key={id}>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src={user} className="ui avatar image" alt="avatar" />
      </td>
      <td className="header">{name}</td>
      <td>{email}</td>
      <td>{phoneNo} </td>
      <td>
        <i
          className="edit alternate outline icon"
          onClick={() => props.handleEdit(id)}
        ></i>
      </td>
      <td>
        <i
          className="trash alternate outline icon center aligned"
          onClick={() => props.clickHandler(id)}
        ></i>
      </td>
    </tr>
  );
};

export default ContactCard;
