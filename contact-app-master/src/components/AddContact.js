import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phoneNo: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" &&
      this.state.email === "" &&
      this.state.phoneNo === ""
    ) {
      alert("please fill in the fields");
      return;
    } else {
      this.props.addContactHandler(this.state);
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
          <h2>Add Contact</h2>
          <form className="form" onSubmit={this.add}>
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
                Cancel
              </button>
              <button className="add-btn">Add Contact</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
