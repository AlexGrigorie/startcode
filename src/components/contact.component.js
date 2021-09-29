import React, { Component } from "react";
import styles from "../styles/contact.module.css";
import stylesMain from "../styles/profile.module.css";
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
import logo from "../images/logo2.png";

export default class UserContact extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <body className={stylesMain.bodyItem}>
        <nav className={stylesMain.navbar}>
          <div className={stylesMain.navbarItemsPosition}>
          <Link to="/profile">
              <img className={stylesMain.navLogo} src={logo} />
            </Link>
            <Link to="#" className={stylesMain.navbarItem}>
              <FaBook className={stylesMain.fa} />
              Cursul meu
            </Link>
            <Link to="#" className={stylesMain.navbarItem}>
              <FaPlayCircle className={stylesMain.fa} />
              Playground
            </Link>
            <FaYoutube
              style={{ padding: "5px", marginTop: "10px", marginLeft: "15px" }}
              className={
                stylesMain.navbarItem + " " + stylesMain.navSocial
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
                stylesMain.navbarItem + " " + stylesMain.navSocial
              }
            />
            <Link
              className={
                stylesMain.navbarItem +
                " " +
                stylesMain.academyBtn
              }
            >
              Alătură-te academiei!
            </Link>

            <div
              className={
                stylesMain.navbarItem + " " + stylesMain.tooltip
              }
            >
              {state}
              <span className={stylesMain.tooltiptext}>
                Salut, <b>{state}!</b>
                <button className={stylesMain.buttonProfile}>
                  <FaUserCircle style={{ marginRight: "2px" }} />
                  Profilul meu
                </button>
                <button className={stylesMain.buttonSignOut}>
                  <FaSignOutAlt />
                  Deloghează-te
                </button>
              </span>
            </div>
            <div>
              <Link
                className={
                  stylesMain.navbarItem +
                  " " +
                  stylesMain.navArrow +
                  " " +
                  stylesMain.tooltip
                }
              >
                <FaSortDown />
              </Link>
            </div>
          </div>
        </nav>
        <section className={styles.sectionContact}>
          <div className={styles.contact}>
            <h1 className={styles.h1Item}>Contactează-ne</h1>
            <p className={styles.pItem}>
              Ai întrebări sau vrei să raportezi o problemă legată de platformă?
              Îți stăm la dispoziție pentru ajutor.
            </p>
            <Link
              className={styles.contactFacebook}
              to={{pathname:"https://www.facebook.com/alexgabriel.1998/"}}
              target="_blank"
            >
             Facebook
            </Link>
            <Link
              className={styles.contactYoutube}
              to={{pathname:"https://www.youtube.com/channel/UCss5z9Cbaw4ViQlQVJcp9lQ"}}
              target="_blank"
            >
              Youtube
            </Link>
          </div>
          <form>
            <div>
              <label className={styles.labelItem}>Mesajul tău</label>
              <textarea
                name="mesaj"
                id="mesaj"
                placeholder="Scrie aici mesajul tau"
                className={styles.textareaItem}
              ></textarea>
            </div>
            <button className={styles.sentMessageButton}>
              Trimite
            </button>
          </form>
        </section>

        <footer>
          <div className={stylesMain.footerContainer}>
            <div>
              <Link to="/contact" className={stylesMain.anchorFooter}>
                Contact
              </Link>
            </div>
            <div>
              <Link to="#" className={stylesMain.anchorFooter}>
                Termeni și condiții
              </Link>
            </div>
            <div>
              <Link to="#" className={stylesMain.anchorFooter}>
                Politica cookies
              </Link>
            </div>
          </div>
          <div className={stylesMain.rights}>
            Copyright © 2021 StartCode. All rights reserved.
          </div>
        </footer>
      </body>
    );
  }
}
