import "./App.css";
import React, { Component } from "react";
import Contact from "./components/contact";
import Experience from "./components/experience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: { name: "", email: "", phone: "", submitted: "" },
      experience: [
        {
          company: "",
          position: "",
          tasks: "",
          start: "",
          end: "",
          submitted: "",
        },
      ],
    };
    this.contactObj = this.state.contact;
    this.expObj = {
      company: "",
      position: "",
      tasks: "",
      start: "",
      end: "",
      submitted: "",
    };
    this.expArr = [];
  }

  //updates contact input values
  handleContactChange = (e) => {
    if (e.target.id === "name") {
      this.contactObj.name = e.target.value;
    } else if (e.target.id === "email") {
      this.contactObj.email = e.target.value;
    } else if (e.target.id === "phone") {
      this.contactObj.phone = e.target.value;
    }
  };

  //submits values to state/display
  handleContactSubmit = (e) => {
    e.preventDefault();
    this.contactObj.submitted = "hidden";
    this.setState({ contact: this.contactObj });
    // this.contactObj = { name: "", email: "", phone: "" };
    // e.target.reset();
  };

  // edits contact info
  handleContactEdit = (e) => {
    this.contactObj.submitted = "";
    this.setState({ contact: this.contactObj });
    // this.nameEdit.current.value = this.contactObj.name;
  };

  handleExpChange = (e) => {
    if (e.target.id === "company") {
      this.expObj.company = e.target.value;
    } else if (e.target.id === "position") {
      this.expObj.position = e.target.value;
    } else if (e.target.id === "tasks") {
      this.expObj.tasks = e.target.value;
    } else if (e.target.id === "start") {
      this.expObj.start = e.target.value;
    } else if (e.target.id === "end") {
      this.expObj.end = e.target.value;
    }
  };

  handleExpSubmit = (e) => {
    e.preventDefault();
    this.expObj.submitted = "hidden";
    this.expArr = this.expArr.concat(this.expObj);
    this.setState({ experience: this.expArr }, function () {
      console.log(this.state.experience);
    });
    this.expObj = {
      company: "",
      position: "",
      tasks: "",
      start: "",
      end: "",
      submitted: "",
    };
  };
  handleExpAdd = (e) => {
    this.setState({
      experience: this.state.experience.concat({
        company: "",
        position: "",
        tasks: "",
        start: "",
        end: "",
        submitted: "",
      }),
    });
    console.log(this.state.experience);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Contact</h1>
        <Contact
          name={this.state.contact.name}
          email={this.state.contact.email}
          phone={this.state.contact.phone}
          submitted={this.state.contact.submitted}
          handleContact={this.handleContactChange}
          handleSubmit={this.handleContactSubmit}
          handleEdit={this.handleContactEdit}
        />
        <h1>Experience</h1>
        {this.state.experience.map((ex, index) => (
          <Experience
            key={index}
            company={ex.company}
            position={ex.position}
            tasks={ex.tasks}
            start={ex.start}
            end={ex.end}
            submitted={ex.submitted}
            handleChange={this.handleExpChange}
            handleSubmit={this.handleExpSubmit}
            handleAdd={this.handleExpAdd}
          />
        ))}
        <button onClick={this.handleExpAdd}>Add </button>
      </React.Fragment>
    );
  }
}

export default App;
