import React, { Component } from "react";

class Education extends Component {
  render() {
    const {
      name,
      study,
      start,
      end,
      handleChange,
      handleSubmit,
      handleEdit,
      submitted,
      index,
      displayTog,
    } = this.props;
    return (
      <React.Fragment>
        <div className={displayTog}>
          <div className="d-flex">
            School:<p className="ml-4 mb-1">{name}</p>
          </div>
          <div className="d-flex">
            Study/Degree:<p className="ml-3 mb-1">{study}</p>{" "}
          </div>
          <div className="d-flex">
            Duration:
            <p className="ml-3 mb-1">
              {start} - {end}
            </p>
          </div>
          <button
            onClick={handleEdit}
            id={index}
            className="btn btn-warning mt-2">
            Edit
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className={submitted + " d-flex flex-column"}
          id={index}>
          <label className="mt-3">
            School Name
            <input
              type="text"
              id="eduName"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            Study
            <input
              type="text"
              id="study"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            Start Date
            <input
              type="date"
              id="eduStart"
              onChange={handleChange}
              className="form-control "
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              id="eduEnd"
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

export default Education;
