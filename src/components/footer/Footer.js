import React from "react";
import "./Footer.css";
import { MdLanguage } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="social-div">
          <p>Fragen? Einfach anrufen: 0800-000-9677</p>
        </div>
        <div>
          <ul className="link-div">
            <div className="div-list">
              <a href="">
                <li>Häufig gestellte Fragen (FAQ)</li>
              </a>
              <a href="">
                <li>Mitgliedschaft kündigen</li>
              </a>
              <a href="">
                <li>Hilfe-Center</li>
              </a>
              <a href="">
                <li>Nutzungsbedingungen</li>
              </a>
            </div>
            <div className="div-list">
              <a href="">
                <li>Datenschutz</li>
              </a>
              <a href="">
                <li>Cookie-Einstellungen</li>
              </a>
              <a href="">
                <li>Impressum</li>
              </a>
            </div>
          </ul>
        </div>
        <div className="select-div">
          <MdLanguage className="text-[2rem]" />
          <select name="" id="">
            <option value="0">Deutsch</option>
            <option value="1">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Footer;
