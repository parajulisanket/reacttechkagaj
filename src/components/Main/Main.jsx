import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Main.css";
import NTC from "../../assets/NTC.gif";
import Logo1 from "../../assets/Logo1.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import Tech1 from "../../assets/Tech1.jpg";
import Tech2 from "../../assets/Tech2.jpg";
import Tech3 from "../../assets/Tech3.jpg";
import Tech4 from "../../assets/Tech4.jpg";
import Tech5 from "../../assets/Tech5.png";
import Tech6 from "../../assets/Tech6.jpg";
import Tech7 from "../../assets/Tech7.jpg";
import Tech8 from "../../assets/Tech8.jpeg";
import Tech9 from "../../assets/Tech9.jpg";
import Tech10 from "../../assets/Tech10.jpg";
import GBLIME from "../../assets/GBLIME.gif";

const staticNewsData = [
  {
    link: "https://techkagaj.com",
    image: img1,
    title: "पोखरामा स्काईवेलको नयाँ सोरूम विस्तार",
  },
  {
    link: "https://techkagaj.com",
    image: img2,
    title: "भिभो एप्पललाई चुनौती दिन नयाँ रणनीतिसहित तयारीमा",
  },
  {
    link: "https://techkagaj.com",
    image: img3,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img4,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img5,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img6,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img7,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img8,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
  {
    link: "https://techkagaj.com",
    image: img9,
    title: "नेपालमा सनलङ इलेक्ट्रिक कार्गो पिकअप सार्वजनिक",
  },
];

const Main = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    setNewsData(staticNewsData);
  }, []);

  return (
    <div className="main-container">
      <div className="container1">
        {/* Left part */}
        <div className="left-part">
          <div className="left-main">
            <div className="left-head">
              <div className="advertisement">
                <div className="widget">
                  <a href="https://www.ntc.net.np/post/monsoon-offer-2081">
                    <img
                      width="1140"
                      height="110"
                      src={NTC}
                      className="image wp-image-12720 attachment-full size-full"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                      decoding="async"
                      fetchPriority="high"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="left-body">
              <div className="left-body-area">
                <div className="left-title">
                  <h2>
                    <img src={Logo1} alt="" /> <a>टेक अपडेट</a>
                  </h2>
                  <div className="arrow">
                    <a href="#">
                      {" "}
                      थप समाचार <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="left-contain">
                  {/* Map over the news data and render the Card component */}
                  {newsData.map((news, index) => (
                    <Card
                      key={index}
                      link={news.link}
                      image={news.image}
                      title={news.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="TechTipsList">
            <div className="TechTipsList-container">
              <div className="TechTipsList-header">
                <div className="tech-tips-logo">
                  <img src={Logo1} alt="Tech Tips Logo" />
                  <h2>टेक टिप्स</h2>
                </div>
                <a href="#" className="more-news">
                  थप समाचार →
                </a>
              </div>

              <div className="tech-tips-grid">
                {/* Row 1 */}
                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech1} alt="Laptop buying guide" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>
                      ल्यापटप किन्दै हुनुहुन्छ ? यी कुरामा विशेष ध्यान दिनुहोस्
                    </h3>
                  </div>
                </div>

                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech2} alt="ATM safety" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>एटिएमको सुरक्षित प्रयोग तथा सावधानीका उपाएहरु ।</h3>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech3} alt="Website differences" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>यसरी बुझ्नुहोस् स्थिर र गतिशिल वेबसाइटको अन्तर</h3>
                  </div>
                </div>

                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech4} alt="WordPress features" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>कस्ता छन् त वर्डप्रेसका विशेषता ?</h3>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech5} alt="Conferencing platforms" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>
                      बजारमा के के छन् कन्फरेन्सिंग प्लेटफर्म ? जुम कि गुगल मिट
                      रोज्ने ?
                    </h3>
                  </div>
                </div>

                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech6} alt="Stylus pen" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>स्टाइलस पेन के हो अनि किन आवश्यक?</h3>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech7} alt="Car sensors" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>के कस्ता छन् कारमा हुने विभिन्न सेन्सरहरु ?</h3>
                  </div>
                </div>

                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech8} alt="Programming languages" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>कुन प्रोग्रामिंग भाषा सिक्ने ?</h3>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech9} alt="Computer cooling" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>कम्प्युटर अत्याधिक तातेको समयमा कसरी कुल गर्ने?</h3>
                  </div>
                </div>

                <div className="tech-tip-item">
                  <div className="tech-tip-image">
                    <img src={Tech10} alt="Programming benefits" />
                  </div>
                  <div className="tech-tip-title">
                    <h3>के कस्ता छन् सबैले प्रोग्रामिंग सिक्नुका फाइदाहरु ?</h3>
                  </div>
                </div>

                {/* Advertisement Banner */}
                <div className="tech-advertisement">
                  <a
                    href="https://globalimebank.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GBLIME} alt="Global IME Bank Advertisement" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="right-part">
          <div className="right-header">
            <h2>
              <img className="small-logo" src={Logo1} alt="Trending Icon" />
              <a href="#">ट्रेंडिंग</a>
            </h2>
          </div>

          <div className="right-images">
            {/* Create a grid layout for the trending images */}
            {newsData.slice(0, 4).map((news, index) => (
              <div className="right-image" key={index}>
                <a href={news.link} className="news-link">
                  <div className="image-text">
                    <img
                      className="news-image"
                      src={news.image}
                      alt={news.title}
                    />
                    <p>{news.title}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
