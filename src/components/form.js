import React from 'react';
import './styles/form.css'

class Form extends React.Component {
  state={};

  /* handleChange = e => {
    /

    this.setState({
      [e.target.name]: e.target.value
    })
  }; */

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div className="container forms shadow-lg">
          <div className="container">

        <h1 className="text-center">New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
            <div className="row">
          <div className=" col-md-6 mb-3">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.fristName}
              />
          </div>
          <div className=" col-md-6 mb-3">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              />
          </div>
              </div>
              
          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="Email"
              name="email"
              value={this.props.formValues.email}
              />
          </div>
             <div className="row">

          <div className="mb-3 col-md-6">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              />
          </div>

          <div className="mb-3 col-md-6">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
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

