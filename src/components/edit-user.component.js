import React, { Component } from "react";
import axios from 'axios'

export default class EditUser extends Component {
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

  componentDidMount() {
    axios.get('https://learn-programming-2021.herokuapp.com/users/'+ this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          userRole: response.data.userRole,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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

   axios.post('https://learn-programming-2021.herokuapp.com/users/update/' + this.props.match.params.id, user)
   .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <h3>Edit User</h3>
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
            <input
              type="submit"
              value="Edit User"
            />
          </div>
        </form>
      </div>
    );
  }
}
