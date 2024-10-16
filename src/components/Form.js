import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: props.editData || {
        fname: "",
        lname: "",
        numbar: "",
        city: ""
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editData !== this.props.editData) {
      this.setState({
        userDetails: this.props.editData || {
          fname: "",
          lname: "",
          numbar: "",
          city: ""
        }
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = () => {
    this.props.onAddUser(this.state.userDetails);
    this.handleReset();
  }

  handleReset = () => {
    this.setState({
      userDetails: {
        fname: "",
        lname: "",
        numbar: "",
        city: ""
      }
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '4%' }}>
        <form>
          <h2 style={{ color: 'white' }}>Contact Form</h2>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.userDetails.fname}
            onChange={this.handleChange}
            id='fname'
            name='fname'
            placeholder='Enter First Name'
          />

          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.userDetails.lname}
            onChange={this.handleChange}
            id='lname'
            name='lname'
            placeholder='Enter Your Last Name'
          />

          <label htmlFor="numbar">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.userDetails.numbar}
            onChange={this.handleChange}
            id='numbar'
            name='numbar'
            placeholder='Enter Your Phone Number'
          />

          <label htmlFor='city'>Select Your City:</label>
          <select
            id="city"
            className="form-control"
            value={this.state.userDetails.city}
            onChange={this.handleChange}
            name='city'
          >
            <option value="">Select Your City</option>
            <option value="Surat">Surat</option>
            <option value="Delhi">Delhi</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
          <button
            type="button"
            className="btn btn-primary mt-2"
            value="Submit"
            id='submit'
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
