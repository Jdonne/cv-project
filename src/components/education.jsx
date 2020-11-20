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
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <div>School:{" " + name}</div>
          <div>Study: {" " + study}</div>
          <div>
            Duration: {" " + start} - {end}
          </div>
          <button onClick={handleEdit} id={index}>
            Edit
          </button>
        </div>
        <form onSubmit={handleSubmit} className={submitted} id={index}>
          <label>
            School Name
            <input type="text" id="eduName" onChange={handleChange} />
          </label>
          <label>
            Study
            <input type="text" id="study" onChange={handleChange} />
          </label>
          <label>
            Start Date
            <input type="date" id="eduStart" onChange={handleChange} />
          </label>
          <label>
            End Date
            <input type="date" id="eduEnd" onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Education;
