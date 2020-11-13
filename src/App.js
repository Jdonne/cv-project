import "./App.css";
import React, { Component } from "react";
import Contact from "./components/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: { name: "", email: "f", phone: "g" },
    };
    this.contactObj = this.state.contact;
  }

  handleContactChange = (e) => {
    if (e.target.id == "name") {
      this.contactObj.name = e.target.value;
      this.setState({ contact: this.contactObj });
    } else if (e.target.id == "email") {
      this.contactObj.email = e.target.value;
      this.setState({ contact: this.contactObj });
    } else if (e.target.id == "phone") {
      this.contactObj.phone = e.target.value;
      this.setState({ contact: this.contactObj });
    }
  };

  //give the setState to a submit function?

  render() {
    return (
      <React.Fragment>
        <Contact
          name={this.state.contact.name}
          email={this.state.contact.email}
          phone={this.state.contact.phone}
          handleContact={this.handleContactChange}
        />
      </React.Fragment>
    );
  }
}

export default App;
