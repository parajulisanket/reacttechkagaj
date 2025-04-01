import React from "react";
import "./Menu.css";
import Group from "../../assets/Group.png";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Overlay behind the menu */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button className="close-btn" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img src={Group} alt="TechKagaj Logo" className="menu-logo" />
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="menu-search">
          <input type="text" placeholder="यहाँ टाईप गर्नुहोस् ..." />
          <button>
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

        <div className="side-menu-item">
          <ul className="menu-list">
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  home
                </span>
                होमपेज
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  newsmode
                </span>
                टेक अपडेट
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  variables
                </span>
                टिप्स
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  preview
                </span>
                रिभ्यू
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  call_quality
                </span>
                टेलिकम
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  router
                </span>
                इन्टरनेट
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  devices_other
                </span>
                ग्याजेट्स
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  temple_hindu
                </span>
                टेक्नोलोजी
              </a>
            </li>
            <li>
              <a href="#">
                <span
                  className="material-symbols-outlined"
                  style={{ backgroundColor: "#009f00" }}
                >
                  group
                </span>
                सोसल मिडिया
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
