import React, { Component } from "react";

class Experience extends Component {
  render() {
    const {
      company,
      position,
      tasks,
      start,
      end,
      handleChange,
      handleSubmit,
      //   handleAdd,
      submitted,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <div>Company:{" " + company}</div>
          <div>Position: {" " + position}</div>
          <div>Tasks: {" " + tasks}</div>
          <div>
            Duration: {" " + start} - {end}
          </div>
        </div>
        <form onSubmit={handleSubmit} className={submitted}>
          <label>
            Company
            <input type="text" id="company" onChange={handleChange} />
          </label>
          <label>
            Position
            <input type="text" id="position" onChange={handleChange} />
          </label>
          <label>
            Tasks
            <textarea
              id="tasks"
              rows="5"
              cols="40"
              onChange={handleChange}></textarea>
          </label>
          <label>
            Start Date
            <input type="date" id="start" onChange={handleChange} />
          </label>
          <label>
            End Date
            <input type="date" id="end" onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Experience;
