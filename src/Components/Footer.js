import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#bfbfbf", marginRight: "2rem" }} />
            <div>
              <p>123, Gujarat Housing Society </p>
              <p>Kalol.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "00ff00", marginRight: "2rem" }}
              />
              <u>1800-800-800</u>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ff0033", marginRight: "2rem" }}
              />
              aryanvaghela53@gmail.com
            </h4>
          </div>
        </div>
      </div>
      <div className="right">
        <h4><u>About Company</u></h4>
        <p>
          This is me Aryan Vaghela. CEO & Founder of RedixWeb. I enjoy
          discussing new projects and design challenges.
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "1e90ff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#00ffff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#483d8", marginRight: "2rem" }}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
