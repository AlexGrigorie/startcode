import React, { Component } from "react";
import userProfileStyles from "../styles/profile.module.css";
import logo from "../images/logo2.png";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaPlayCircle,
  FaYoutube,
  FaFacebook,
  FaUserCircle,
  FaSignOutAlt,
  FaSortDown,
} from "react-icons/fa";

export default class UserProfile extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <div className={userProfileStyles.bodyItem}>
        <nav className={userProfileStyles.navbar}>
          <div className={userProfileStyles.navbarItemsPosition}>
          <Link to="/profile">
              <img className={userProfileStyles.navLogo} src={logo} />
            </Link>
            <Link className={userProfileStyles.navbarItem}>
              <FaBook className={userProfileStyles.fa} />
              Cursul meu
            </Link>
            <Link className={userProfileStyles.navbarItem}>
              <FaPlayCircle className={userProfileStyles.fa} />
              Playground
            </Link>
            <FaYoutube
              style={{ padding: "5px", marginTop: "10px", marginLeft: "15px" }}
              className={
                userProfileStyles.navbarItem + " " + userProfileStyles.navSocial
              }
            />
            <FaFacebook
              style={{
                padding: "5px",
                marginTop: "10px",
                marginRight: "15px",
                marginLeft: "5px",
              }}
              className={
                userProfileStyles.navbarItem + " " + userProfileStyles.navSocial
              }
            />
            <Link to="#"
              className={
                userProfileStyles.navbarItem +
                " " +
                userProfileStyles.academyBtn
              }
            >
              Alătură-te academiei!
            </Link>

            <div
              className={
                userProfileStyles.navbarItem + " " + userProfileStyles.tooltip
              }
            >
              {state}
              <span className={userProfileStyles.tooltiptext}>
                Salut, <b>{state}!</b>
                <button className={userProfileStyles.buttonProfile}>
                  <FaUserCircle style={{ marginRight: "2px" }} />
                  Profilul meu
                </button>
                <button className={userProfileStyles.buttonSignOut}>
                  <FaSignOutAlt />
                  Deloghează-te
                </button>
              </span>
            </div>
            <div>
              <span
                className={
                  userProfileStyles.navbarItem +
                  " " +
                  userProfileStyles.navArrow +
                  " " +
                  userProfileStyles.tooltip
                }
              >
                <FaSortDown />
              </span>
            </div>
          </div>
        </nav>
        <footer>
          <div className={userProfileStyles.footerContainer}>
            <div>
              <Link to="/contact" className={userProfileStyles.anchorFooter}>
                Contact
              </Link>
            </div>
            <div>
              <Link to="#" className={userProfileStyles.anchorFooter}>
                Termeni și condiții
              </Link>
            </div>
            <div>
              <Link to="#" className={userProfileStyles.anchorFooter}>
                Politica cookies
              </Link>
            </div>
          </div>
          <div className={userProfileStyles.rights}>
            Copyright © 2021 StartCode. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}
