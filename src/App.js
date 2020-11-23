import "./App.css";
import React, { Component } from "react";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Education from "./components/education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        phone: "",
        submitted: "",
        displayed: "hidden",
      },
      experience: [
        {
          company: "",
          position: "",
          tasks: "",
          start: "",
          end: "",
          submitted: "",
          displayed: "hidden",
        },
      ],
      education: [
        {
          name: "",
          study: "",
          start: "",
          end: "",
          submitted: "",
          displayed: "hidden",
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
      displayed: "hidden",
    };
    this.expArr = [];
    this.eduObj = {
      name: "",
      study: "",
      start: "",
      end: "",
      submitted: "",
      displayed: "hidden",
    };
    this.eduArr = [];
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
    this.contactObj.displayed = "";
    this.setState({ contact: this.contactObj });
  };

  // edits contact info
  handleContactEdit = (e) => {
    this.contactObj.submitted = "";
    this.setState({ contact: this.contactObj });
    // this.nameEdit.current.value = this.contactObj.name;
  };

  // updates experience input values
  handleExpChange = (e) => {
    if (e.target.id === "company") {
      this.expObj.company = e.target.value;
    } else if (e.target.id === "position") {
      this.expObj.position = e.target.value;
    } else if (e.target.id === "tasks") {
      this.expObj.tasks = e.target.value;
    } else if (e.target.id === "expStart") {
      this.expObj.start = e.target.value;
    } else if (e.target.id === "expEnd") {
      this.expObj.end = e.target.value;
    }
  };
  // submits values to state/display
  handleExpSubmit = (e) => {
    e.preventDefault();
    this.expObj.submitted = "hidden";
    this.expObj.displayed = "";
    this.expArr[e.target.id] = this.expObj;
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
  // adds additional experience section
  handleExpAdd = (e) => {
    this.setState({
      experience: this.state.experience.concat({
        company: "",
        position: "",
        tasks: "",
        start: "",
        end: "",
        submitted: "",
        displayed: "hidden",
      }),
    });
  };
  // edit functionality for individual experience
  handleExpEdit = (e) => {
    this.expObj = this.expArr[e.target.id];
    this.expObj.submitted = "";
    this.expArr[e.target.id] = this.expObj;
    this.setState({ experience: this.expArr });
  };

  // updates education input
  handleEduChange = (e) => {
    if (e.target.id === "eduName") {
      this.eduObj.name = e.target.value;
    } else if (e.target.id === "study") {
      this.eduObj.study = e.target.value;
    } else if (e.target.id === "eduStart") {
      this.eduObj.start = e.target.value;
    } else if (e.target.id === "eduEnd") {
      this.eduObj.end = e.target.value;
    }
  };
  // submits values to state/display
  handleEduSubmit = (e) => {
    e.preventDefault();
    this.eduObj.submitted = "hidden";
    this.eduObj.displayed = "";
    this.eduArr[e.target.id] = this.eduObj;
    this.setState({ education: this.eduArr }, function () {
      console.log(this.state.education);
    });
    this.eduObj = {
      name: "",
      study: "",
      start: "",
      end: "",
      submitted: "",
    };
  };
  // adds additional education section
  handleEduAdd = (e) => {
    this.setState({
      education: this.state.education.concat({
        name: "",
        study: "",
        start: "",
        end: "",
        submitted: "",
        displayed: "hidden",
      }),
    });
  };
  // edit functionality for individual education section
  handleEduEdit = (e) => {
    this.eduObj = this.eduArr[e.target.id];
    this.eduObj.submitted = "";
    this.eduArr[e.target.id] = this.eduObj;
    this.setState({ education: this.eduArr });
  };

  render() {
    return (
      <div className="mx-auto col-4 d-flex flex-column">
        <h1 className="align-self-center">CV App</h1>
        <h2 className="mt-3">Contact</h2>
        <Contact
          name={this.state.contact.name}
          email={this.state.contact.email}
          phone={this.state.contact.phone}
          submitted={this.state.contact.submitted}
          displayTog={this.state.contact.displayed}
          handleContact={this.handleContactChange}
          handleSubmit={this.handleContactSubmit}
          handleEdit={this.handleContactEdit}
        />
        <h2 className="mt-4 pt-3 border-top">Experience</h2>
        {this.state.experience.map((ex, index) => (
          <Experience
            index={index}
            key={index}
            company={ex.company}
            position={ex.position}
            tasks={ex.tasks}
            start={ex.start}
            end={ex.end}
            submitted={ex.submitted}
            displayTog={ex.displayed}
            handleChange={this.handleExpChange}
            handleSubmit={this.handleExpSubmit}
            handleAdd={this.handleExpAdd}
            handleEdit={this.handleExpEdit}
          />
        ))}
        <button
          onClick={this.handleExpAdd}
          className="btn btn-primary mt-2 addBtn">
          Add{" "}
        </button>
        <h2 className="mt-4 pt-3 border-top">Education</h2>
        {this.state.education.map((ed, index) => (
          <Education
            index={index}
            key={index}
            name={ed.name}
            study={ed.study}
            start={ed.start}
            end={ed.end}
            submitted={ed.submitted}
            displayTog={ed.displayed}
            handleChange={this.handleEduChange}
            handleSubmit={this.handleEduSubmit}
            handleAdd={this.handleEduAdd}
            handleEdit={this.handleEduEdit}
          />
        ))}
        <button
          onClick={this.handleEduAdd}
          className="btn btn-primary mt-2 addBtn">
          Add{" "}
        </button>
      </div>
    );
  }
}

export default App;
