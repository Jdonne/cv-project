import React, { Component } from "react";

class Contact extends Component {
  render() {
    const {
      name,
      email,
      phone,
      handleContact,
      handleSubmit,
      handleEdit,
      submitted,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <div>Name: {" " + name}</div>
          <div>Email:{" " + email}</div>
          <div>Phone: {" " + phone}</div>
          <button onClick={handleEdit}>Edit</button>
        </div>
        <form className={submitted} onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" id="name" onChange={handleContact}></input>
          </label>
          <label>
            Email
            <input type="email" id="email" onChange={handleContact}></input>
          </label>
          <label>
            Phone Number
            <input type="tel" id="phone" onChange={handleContact}></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;
