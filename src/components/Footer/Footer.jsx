import React from "react";
import './Footer.css';

const Footer = () => {

    return (
        <div className="footer_container">
            <div className="footer_column">
                © 2021 -2024 DEVONE<span className="gradientText">.OFF</span>
            </div>
            <div className="footer_column">Privacy Policy</div>
            <div className="footer_column">
                <a href="#">
                    up 
                    <span className="material-symbols-rounded">arrow_upward_alt</span>
                </a>
            </div>
        </div>
    );
};

export default Footer;