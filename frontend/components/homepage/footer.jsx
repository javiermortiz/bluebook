import React from 'react'

const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <h2 className="footer-name">Javier M Ortiz</h2>
            <ul className="footer-list">
                <li><a href="https://www.javiermortiz.com/" target="_blank"><i className="far fa-folder-open"></i><span>Portfolio</span></a></li>
                <li><a href="https://github.com/javiermortiz" target="_blank"><i className="fab fa-github-square"></i> <span>Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/javiermortiz/" target="_blank"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a></li>
                <li><a href="https://angel.co/u/javiermortiz" target="_blank"><i className="fab fa-angellist"></i><span>AngelList</span></a></li>
            </ul>
        </div>
    </div>
);

export default Footer;