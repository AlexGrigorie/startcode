import React, { Component } from "react";
import registrationStyles from "../styles/registration.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaFacebook,
  FaTwitterSquare,
  FaGooglePlus,
} from "react-icons/fa";

export default class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      errors: {},
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  validateForm(email, password, confirmPassword) {
    let isValid = true;
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      isValid = false;
      errors.email = "Your email address has a bad format.";
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors.matchPassword = "Passwords doesn't match!";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    let checkRegistration = false;

    if (this.validateForm(user.email, user.password, user.confirmPassword)) {
      axios
        .post("https://learn-programming-2021.herokuapp.com/user/registration", user)
        .then((res) => console.log(res.data));
      checkRegistration = true;

      alert("Te-ai inregistrat cu succes");
    }
    if (checkRegistration) {
      this.props.history.push({
        pathname: "/",
      });
    }
  }

  render() {
    return (
      <div className={registrationStyles.bodyItem}>
        <div className={registrationStyles.formRegistration}>
          <div className={registrationStyles.centerContent}>
            <form onSubmit={this.onSubmit}>
              <h1 className={registrationStyles.h1Item}>Registration</h1>
              <div className={registrationStyles.containerForm}>
                <div>
                  <label>First name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter first name"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    className={registrationStyles.inputName}
                  />
                </div>
                <div>
                  <label>Last name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter last name"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    className={registrationStyles.inputName}
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    className={registrationStyles.inputName}
                  />
                  <div style={{ color: "red" }}>{this.state.errors.email}</div>
                </div>

                <div className={registrationStyles.containerUsername}>
                  <label>Username</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    className={registrationStyles.inputName}
                  />
                </div>

                <div className={registrationStyles.containerPassword}>
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    className={registrationStyles.inputName}
                  />
                </div>

                <div className={registrationStyles.containerConfirmPsw}>
                  <label>Confirm password</label>
                  <input
                    type="password"
                    required
                    placeholder="Confirm password"
                    value={this.state.confirmPassword}
                    onChange={this.onChangeConfirmPassword}
                    className={registrationStyles.inputName}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.errors.matchPassword}
                  </div>
                </div>
              </div>

              <div className={registrationStyles.forgotPsw}>
                <Link to="#">Forgot your password?</Link>
              </div>
              <div className={registrationStyles.buttonEl}>
                <input
                  className={registrationStyles.buttonRegistration}
                  type="submit"
                  value="Registration"
                />
              </div>
              <div className={registrationStyles.singUp}>
                <p>Or Sing Up Using</p>
              </div>
              <div className={registrationStyles.socialItem}>
                <Link to="#" className={registrationStyles.socialBtns}>
                  <FaFacebook
                    color="#3b5998"
                    className={registrationStyles.fa}
                  />
                </Link>
                <Link to="#" className={registrationStyles.socialBtns}>
                  <FaTwitterSquare color="#55acee" className={registrationStyles.fa} />
                </Link>
                <Link to="#" className={registrationStyles.socialBtns}>
                  <FaGooglePlus color="#dd4b39" className={registrationStyles.fa} />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
