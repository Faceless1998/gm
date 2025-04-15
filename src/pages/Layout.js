import React from "react";
import MobileMenu from "../components/MobileMenu";

import Logo from "./../assets/logo.png";
const Layout = () => {
  return (
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            {/* <a className="navbar-brand" href="#home">
              <img src={Logo} alt="" />
            </a> */}
            <MobileMenu
              links={[
                { href: "#home", text: "HOME" },
                { href: "#listing", text: "LISTING" },
                { href: "#house", text: "BLOCKS" },
                { href: "#about", text: "ABOUT" },
                { href: "#price", text: "PRICING" },
                { href: "#contact", text: "CONTACT US" },
              ]}
            />

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#listing">
                  Listing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#house">
                  Blocks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="navbar-brand" href="#home">
                  <img src={Logo} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>

              {/* <div className="User_option">
                <a href="Login">Sign In</a>
                <a href="register">Sign Up</a>
              </div> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Layout;
