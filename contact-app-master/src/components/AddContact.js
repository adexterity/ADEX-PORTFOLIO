import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phoneNo: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "" && this.state.phoneNo === "") {
      alert("please fill in the fields");
      return;
    } else {
      this.props.addContactHandler(this.state);
      //this.setState({ name: "", email: "", phoneNo: "" });
      //console.log(this.state);
    }
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>

            <input type="text" name="name" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="name" placeholder="enter email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="1234567890" onChange={(e) => this.setState({ phoneNo: e.target.value })} value={this.state.phoneNo} />
          </div>
          <button className="ui button blue">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
