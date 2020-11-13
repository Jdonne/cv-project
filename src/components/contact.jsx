import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone, handleContact } = this.props;
    return (
      <React.Fragment>
        <div>
          <div>Name: {" " + name}</div>
          <div>Email:{" " + email}</div>
          <div>Phone: {" " + phone}</div>
        </div>
        <form onSubmit>
          <label>
            Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleContact}></input>
          </label>
          <label>
            Email
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleContact}></input>
          </label>
          <label>
            Phone Number
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handleContact}></input>
          </label>
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;
