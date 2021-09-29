import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/tabel-users.module.css";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.createdAt}</td>
    <td>{props.user.userRole}</td>
    <td>
      <Link to={"/edit/" + props.user._id} className={styles.buttonEdit}>
        edit
      </Link>
      <button
        className={styles.buttonDelete}
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class TabelUsers extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = { users: [] };
  }
  componentDidMount() {
    axios
      .get("https://learn-programming-2021.herokuapp.com/users/")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteUser(id) {
    axios.delete(`https://learn-programming-2021.herokuapp.com/users/${id}`).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  userList() {
    return this.state.users.map((currentuser) => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />;
    });
  }

  render() {
    return (
      <div>
        <h2 className={styles.h2Item}>
          <i className="fa fa-users"></i>User Administration
        </h2>
        <div className={styles.buttonPostion}>
          <button className={styles.buttonPermissions}>Permissions</button>
          <button className={styles.buttonRoles}>Roles</button>
        </div>
        <hr  />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date/Time Added</th>
              <th>User Roles</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
        <Link to="/add" className={styles.buttonAddUser}>
          Add User
        </Link>
      </div>
    );
  }
}
