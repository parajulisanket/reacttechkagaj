import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Logo1 from "../../assets/Logo1.png";
import "./NavBar.css";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const [news, setNews] = useState([
    "आधिकारिक रुपमा छुट: ग्राहकोंको लागि",
    "विवादि: अब मात्र ५ मिनेटमा चार्ज, ४०० किलोमिटर यात्रा",
    "टाटा मोटर्सका नयाँ ई- मोडलहरु बुटवलमा लन्च",
    "स्मार्टफोन चार्ज नभए समस्या भनेको छ",
    "मुख्य न्यायाधिवक्तालाई पेसी सूचना पठाउने अनलाइन प्रणाली सुरु",
    "सामसुङका सहायक सीईओ हान जोङ-ही हृदयघातका कारण निधन",
    "नेपालमा हुन्डाई क्रेटा ईभी र स्थानिय उत्पादन क्रेटा आईस सार्वजनिक",
    "नेपालमा पहिलो १००% विद्युतीय पिकअप 'Riddara' छिट्टै सार्वजनिक",
    "स्मार्टफोन आयातमा वृद्धि, आठ महिनामा २१ अर्ब नाघ्यो",
    "ट्विटरको ऐतिहासिक ब्लू बर्ड लोगो ३४ हजार डलरमा बिक्री",
    "सामसुङका सहायक सीईओ हान जोङ-ही हृदयघातका कारण निधन",
    "नेपालमा हुन्डाई क्रेटा ईभी र स्थानिय उत्पादन क्रेटा आईस सार्वजनिक",
    "नेपालमा पहिलो १००% विद्युतीय पिकअप 'Riddara' छिट्टै सार्वजनिक",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNews((prevNews) => [...prevNews.slice(1)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <nav className="navbar">
      {/* Top part with logo (optional) */}
      <div className="nav-top">
        <div className="logo">
          <img src={logo} alt="TechKagaj Logo" />
        </div>
      </div>

      {/* Menu bar */}
      <div className="menu-bar">
        <div className="row">
          {/* Left navigation */}
          <div className="left-nav">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="separator"></li>
              <li>
                <a href="#">टेक अपडेट</a>
              </li>
              <li>
                <a href="#">टिप्स</a>
              </li>
              <li>
                <a href="#">रिभ्यु</a>
              </li>
              <li>
                <a href="#">टेलिकम</a>
              </li>
              <li>
                <a href="#">इन्टरनेट</a>
              </li>
              <li>
                <a href="#">ग्याजेट्स</a>
              </li>
              <li>
                <a href="#">टेक्नोलोजी</a>
              </li>
              <li>
                <a href="#">सोसल मिडिया</a>
              </li>
              <li>
                <a href="#">स्टार्टअप</a>
              </li>
            </ul>
          </div>

          {/* Right side - date, search, hamburger */}
          <div className="right-nav">
            <div className="date-time">१० चैत २०८१, सोमबार</div>

            <Search />

            <button
              type="button"
              className="hamburger-button"
              aria-label="Menu"
              onClick={toggleMenu} 
            >
              <div className={`hamburgermenu ${isMenuOpen ? "open" : ""}`}>
                <div className="hamburger line1"></div>
                <div className="hamburger line2"></div>
                <div className="hamburger line3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* marquee to show trending news */}
      <div className="marquee">
        <div className="trending">
          <h3>Trending:</h3>
        </div>
        <div className="marquee-wrap">
          <div className="marquee-news">
            {news.concat(news).map((item, index) => (
              <div key={index} className="marquee-item">
                <div className="logo-container">
                  <img src={Logo1} alt="Logo" className="news-logo" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
