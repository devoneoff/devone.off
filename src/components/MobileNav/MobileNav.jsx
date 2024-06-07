import React from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu}) => {

    return (
        <>
            <div
                className={ `mobile-menu ${ isOpen ? "active" : "" }` }
                onClick={ toggleMenu }
            >
                <div className="mobile-menu-container">
                    <ul>
                        <li><a href="#" className="menu_itemOne">Home</a></li>
                        <li><a href="#" className="menu_itemTwo">About</a></li>
                        <li><a href="#" className="menu_itemThree">Stack</a></li>
                        <li><a href="#" className="menu_itemFour">Case</a></li>
                        <li><a href="#" className="menu_itemFive">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;