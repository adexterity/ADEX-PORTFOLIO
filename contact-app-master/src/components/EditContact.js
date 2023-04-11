import React from "react";

class EditContact extends React.Component {
  state = {
    id: this.props.contact.id,
    name: this.props.contact.name,
    email: this.props.contact.email,
    phoneNo: this.props.contact.phoneNo,
  };

  update = (e) => {
    e.preventDefault();

    if (
      this.state.name === "" &&
      this.state.email === "" &&
      this.state.phoneNo === ""
    ) {
      alert("please fill in the fields");
      return;
    } else {
      this.props.updateContactHandler(this.state.id, this.state);
      this.props.handleCloseModal();
      //set the input field back to empty
      this.setState({ name: "", email: "", phoneNo: "" });
      //console.log(this.state);
    }
  };

  render() {
    return (
      <div className="overlay">
        <div className="add-modal">
          <button className="cancel-x" onClick={this.props.handleCloseModal}>
            X
          </button>
          <h2>Edit Contact</h2>
          <form className="form" onSubmit={this.update}>
            <div className="field">
              <label>Name</label>
              <br />
              <input
                className="name-input"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={(e) => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <br />
              <input
                className="email-input"
                type="email"
                name="name"
                placeholder="Enter Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <br />
              <input
                className="phone-input"
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                onChange={(e) => this.setState({ phoneNo: e.target.value })}
                value={this.state.phoneNo}
              />
            </div>
            <div className="modal-btn">
              <button
                className="cancel-btn"
                onClick={this.props.handleCloseModal}
              >
                <i className="cancel icon cancel-icon"></i> Cancel
              </button>
              <button className="add-btn">
                <i className="edit icon edit-icon"></i> Edit Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditContact;
