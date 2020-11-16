import "./App.css";
import React, { Component } from "react";
import Contact from "./components/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: { name: "", email: "", phone: "", submitted: "" },
    };
    this.contactObj = this.state.contact;
  }

  handleContactChange = (e) => {
    if (e.target.id === "name") {
      this.contactObj.name = e.target.value;
    } else if (e.target.id === "email") {
      this.contactObj.email = e.target.value;
    } else if (e.target.id === "phone") {
      this.contactObj.phone = e.target.value;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.contactObj.submitted = "hidden";
    this.setState({ contact: this.contactObj });
    // this.contactObj = { name: "", email: "", phone: "" };
    // e.target.reset();
  };

  handleEdit = (e) => {
    this.contactObj.submitted = "";
    this.setState({ contact: this.contactObj });
    // this.nameEdit.current.value = this.contactObj.name;
  };

  //give the setState to a submit function?

  render() {
    return (
      <React.Fragment>
        <Contact
          name={this.state.contact.name}
          email={this.state.contact.email}
          phone={this.state.contact.phone}
          submitted={this.state.contact.submitted}
          handleContact={this.handleContactChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />
      </React.Fragment>
    );
  }
}

export default App;
