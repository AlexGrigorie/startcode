import React, { Component } from "react";
import loginStyles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMailOutline } from "react-icons/io5";
import {
  FaLock,
  FaFacebook,
  FaTwitterSquare,
  FaGooglePlus,
} from "react-icons/fa";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://learn-programming-2021.herokuapp.com/user/")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    let checkUser = false;
    this.state.users.map((currentUser) => {
      if (
        currentUser.email === user.email &&
        currentUser.password === user.password
      ) {
        user.username = currentUser.username;
        debugger;
        checkUser = true;
      }
    });

    if (checkUser) {
      this.props.history.push({
        pathname: "/profile",
        state: user.username,
      });
    } else {
      alert("Utilizatorul nu există în baza de date");
    }
  }
  render() {
    return (
      <div className={loginStyles.bodyItemLogin}>
        <div className={loginStyles.formRegistration}>
          <div className={loginStyles.centerContent}>
            <form onSubmit={this.onSubmit}>
              <h1 className={loginStyles.h1Item}>Login</h1>
              <div className={loginStyles.containerForm}>
                <div className={loginStyles.containerEmail}>
                  <label>Email</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter email"
                    value={this.state.email}
                    className={loginStyles.inputItem}
                    onChange={this.onChangeEmail}
                  />
                  <IoMailOutline className={loginStyles.containerEmailIcon} />
                </div>
                <div className={loginStyles.containerPassword}>
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password"
                    value={this.state.name}
                    className={loginStyles.inputItem}
                    onChange={this.onChangePassword}
                  />
                  <FaLock className={loginStyles.containerPasswordIcon} />
                </div>
              </div>
              <div className={loginStyles.forgotPsw}>
                <Link to="#">Forgot your password?</Link>
              </div>
              <div className={loginStyles.buttonEl}>
                <input
                  className={loginStyles.buttonLogin}
                  type="submit"
                  value="Login"
                />
              </div>
              <div className={loginStyles.buttonEl}>
                <Link
                  to="/registration"
                  className={loginStyles.buttonRegistration}
                >
                  Registration
                </Link>
              </div>
              <div className={loginStyles.singUp}>
                <p>Or Sing Up Using</p>
              </div>
              <div className={loginStyles.socialItem}>
                <Link to="#" className={loginStyles.socialBtns}>
                  <FaFacebook color="#3b5998" className={loginStyles.fa} />
                </Link>
                <Link to="#" className={loginStyles.socialBtns}>
                  <FaTwitterSquare color="#55acee" className={loginStyles.fa} />
                </Link>
                <Link to="#" className={loginStyles.socialBtns}>
                  <FaGooglePlus color="#dd4b39" className={loginStyles.fa} />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
