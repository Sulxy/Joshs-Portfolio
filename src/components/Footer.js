import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css';

// Socials
const socialIcons = [
    {
        name: 'GitHub',
        url: 'https://github.com/Sulxy',
        icon: faGithub,
        color: '#5DE512'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCqvKgsMnZ7FMBD1I3PoFitA',
        icon: faYoutube,
        color: '#FF0000'
    },
];

// Footer
const Footer = () => {
    return (
      <footer className="footer bg-dark text-white">
        <div className="footer-container">
          <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
            {socialIcons.map(({ name, url, icon, color }) => (
              <div
                key={name}
                className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
              >
                <a href={url} className={`icon ${name}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icon} className="footer-icon-size" style={{ color: color }} />
                </a>
                <a href={url} target="_blank" rel="noreferrer">
                  <span className="d-inline-block mx-1 name">{name}</span>
                </a>
              </div>
            ))}
          </section>
          <section className="form-footer">
          <h5 className="designer-text">Designed by Joshua Hale</h5>
            <p>
            <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
            </p>
          </section>
        </div>
      </footer>
    );
  };

  // Export Footer
  export default Footer;