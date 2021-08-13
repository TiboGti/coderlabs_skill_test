import React from 'react';

class Form extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
    return (
      <div className="container">
          <div className="container">

        <h1 className="text-center">New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
            <div className="row">
          <div className=" col-md-6 mb-3">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              />
          </div>
          <div className=" col-md-6 mb-3">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              />
          </div>
              </div>
              
          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="Email"
              name="Email"
              />
          </div>
             <div className="row">

          <div className="mb-3 col-md-6">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="JobTitle"
              />
          </div>

          <div className="mb-3 col-md-6">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="Twitter"
              />
          </div>
              </div>

          <button onClick={this.handleClick} className="btn btn-primary  ">
            Save
          </button>
        </form>
    </div>
      </div>
    );
  }
}

export default Form;

