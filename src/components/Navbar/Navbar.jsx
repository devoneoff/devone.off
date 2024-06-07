import React, { useState } from "react";
import './Navbar.css';
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import MobileNav from "../MobileNav/MobileNav";

const  Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState( false );
    const toggleMenu = () => {
        setOpenMenu( !openMenu );
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav_wrapper">
                <div className="nav_content">
                    <div className="nav_logo">
                        <div className="nav_logo_image">
                            <img src="./logo.png" alt="Logo" />
                        </div>
                        <div className="nav_logo_text">
                            DEVONE<span className="gradientText">.OFF</span>
                        </div>
                    </div>
                    <ul>
                        <li><a href="#" className="menu_itemOne" id="menu_itemOne">Home</a></li>
                        <li><a href="#" className="menu_itemTwo" id="menu_itemTwo">About</a></li>
                        <li><a href="#" className="menu_itemThree" id="menu_itemThree">Stack</a></li>
                        <li><a href="#" className="menu_itemFour" id="menu_itemFour">Case</a></li>
                        <li><a href="#" className="menu_itemFive" id="menu_itemFive">Contact</a></li>
                    </ul>
                    <div className="theme">
                        <ButtonTheme />
                    </div>
                    <button className="menu-btn" onClick={ toggleMenu }>
                        <span
                            className="material-symbols-outlined"
                            style={{fontSize: "1.8rem"}}
                        >
                            { openMenu ? "close" : "menu" }
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;