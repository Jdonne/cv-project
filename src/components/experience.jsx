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
      handleEdit,
      submitted,
      displayTog,
      index,
    } = this.props;
    return (
      <React.Fragment>
        <div className={displayTog}>
          <div className="d-flex">
            Company: <p className="ml-3 mb-1"> {company}</p>
          </div>
          <div className="d-flex">
            Position: <p className="ml-4 mb-1"> {position}</p>
          </div>
          <div className="d-flex">
            Tasks: <p className="ml-5 mb-1"> {tasks}</p>
          </div>
          <div className="d-flex">
            Duration:{" "}
            <p className="ml-3 mb-1">
              {start} - {end}
            </p>
          </div>
          <button
            onClick={handleEdit}
            className="btn btn-warning mt-2"
            id={index}>
            Edit
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className={submitted + " d-flex flex-column"}
          id={index}>
          <label className="mt-3">
            Company
            <input
              type="text"
              id="company"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            Position
            <input
              type="text"
              id="position"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            Tasks
            <textarea
              id="tasks"
              rows="5"
              cols="40"
              onChange={handleChange}
              className="form-control "></textarea>
          </label>
          <label>
            Start Date
            <input
              type="date"
              id="expStart"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              id="expEnd"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Experience;
