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
      displayTog,
    } = this.props;
    return (
      <React.Fragment>
        <div className={displayTog}>
          <div className="d-flex">
            Name: <p className="ml-3 mb-1">{name}</p>
          </div>
          <div className="d-flex">
            Email Address:<p className="ml-3 mb-1">{email}</p>
          </div>
          <div className="d-flex">
            Phone:
            <p className="ml-2 mb-1">{phone}</p>
          </div>
          <button onClick={handleEdit} className="btn btn-warning mt-2">
            Edit
          </button>
        </div>
        <form
          className={submitted + " d-flex flex-column"}
          onSubmit={handleSubmit}>
          <label className="mt-3">
            Name
            <input
              type="text"
              id="name"
              onChange={handleContact}
              className="form-control "></input>
          </label>

          <label>
            Email
            <input
              type="email"
              id="email"
              onChange={handleContact}
              className="form-control "></input>
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              id="phone"
              onChange={handleContact}
              className="form-control"></input>
          </label>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;
