import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUserRole = this.onChangeUserRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      userRole: "",
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeUserRole(e) {
    this.setState({
      userRole: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      userRole: this.state.userRole,
    };

    console.log(user);

    axios
      .post("https://learn-programming-2021.herokuapp.com/users/add", user)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div>
            <label>User-Role: </label>
            <input
              type="text"
              required
              value={this.state.userRole}
              onChange={this.onChangeUserRole}
            />
          </div>
          <div>
            <input type="submit" value="Create User" />
          </div>
        </form>
      </div>
    );
  }
}
