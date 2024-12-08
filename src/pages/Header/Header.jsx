/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.jpg";
import GlobeIcon from "../../assets/components/GlobeImg/GlobeImg";

// Popover
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-right_wrapper">
            <a href="./index.html">
              <img className="header-logo" src={Logo} alt="logo" />
            </a>

            <nav className="header-nav">
              <a className="header-link" href="#">
                About Us
              </a>
              <a className="header-link" href="#">
                Services
              </a>
              <a className="header-link" href="#">
                Projects
              </a>
              <a className="header-link" href="#">
                News
              </a>
              <a className="header-link" href="#">
                Contact Us
              </a>
            </nav>
          </div>

          <div className="header-button_wrapper">
            <Popover className="relative">
              <PopoverButton className="popover-btn">
                <GlobeIcon className="header-globe" color="#fff" size={30} />
              </PopoverButton>
              <PopoverPanel anchor="bottom" className="popover-panel">
                <a href="/analytics">Ru</a>
                <a href="/engagement">Eng</a>
                <a href="/security">Uz</a>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
