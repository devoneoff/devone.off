import React from "react";
import './MobileFooter.css';

const MobileFooter = () => {
    return (
        <div className="mobile_footer_container">
            <div className="mobile_footer_column">
                <div>© 2021 -2024 DEVONE<span className="gradientText">.OFF</span></div>
                <div>Privacy Policy</div>
            </div>
            <div className="mobile_footer_column">
                <a href="#">
                    up 
                    <span className="material-symbols-rounded">arrow_upward_alt</span>
                </a>
            </div>
        </div>
    );
};

export default MobileFooter;