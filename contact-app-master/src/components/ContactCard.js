import React from "react";
import user from "../images/contact.png";

//this compoent is use to
const ContactCard = (props) => {
  const { id, name, email, phoneNo } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <img src={user} className="ui avatar image" alt="user" />
        <div className="header">{name}</div>
        <div>Email: {email}</div>
        <div>Phone No: {phoneNo} </div>
      </div>
      <div className="right aligned">
        <i className="trash alternate outline icon center aligned" style={{ color: "red", fontSize: "20px", marginTop: "7px" }} onClick={() => props.clickHandler(id)}></i>
      </div>
    </div>
  );
};

export default ContactCard;
