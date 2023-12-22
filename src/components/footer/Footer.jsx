import React from "react";
import { homeData } from "../../dummyData";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a
              href={"https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" style={{ color: "white" }}></i>
            </a>
            <a
              href={"https://twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" style={{ color: "white" }}></i>
            </a>
            <a
              href={"https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" style={{ color: "white" }}></i>
            </a>
            <a
              href={"https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" style={{ color: "white" }}></i>
            </a>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <a
                href={"https://www.apple.com/app-store/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              </a>
              <span>App Store</span>

              <a
                href={"https://www.playstore.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              </a>
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
