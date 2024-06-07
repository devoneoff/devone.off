import React from "react";
import './ButtonTheme.css';
import { useState } from "react";

const ButtonTheme = () => {
    const [ changeTheme, setChangeTheme ] = useState( false );
    const toggleTheme = () => {
        setChangeTheme( !changeTheme );
        // styles theme button
        document.querySelector('.buttonToggleTheme').classList.toggle("light");
        document.querySelector('.themeButton').classList.toggle("light");
        document.querySelector('.circle1').classList.toggle("light");
        document.querySelector('.circle2').classList.toggle("light");
        document.querySelector('.circle3').classList.toggle("light");
        document.querySelector('.toggleTheme').classList.toggle("light");
        document.querySelector('.inRound').classList.toggle("light");
        document.querySelector('.sky').classList.toggle("light");
        document.querySelector('.sky_und').classList.toggle("light");
        document.querySelector('.starButton1').classList.toggle("light");
        document.querySelector('.starButton2').classList.toggle("light");
        document.querySelector('.starButton3').classList.toggle("light");
        document.querySelector('.starButton4').classList.toggle("light");
        document.querySelector('.starButton5').classList.toggle("light");
        document.querySelector('.starButton6').classList.toggle("light");
        // styles page Home
        document.querySelector('body').classList.toggle("light");
        document.querySelector('.nav_logo_text').classList.toggle("light");
        document.querySelector('#menu_itemOne').classList.toggle("light");
        document.querySelector('#menu_itemTwo').classList.toggle("light");
        document.querySelector('#menu_itemThree').classList.toggle("light");
        document.querySelector('#menu_itemFour').classList.toggle("light");
        document.querySelector('#menu_itemFive').classList.toggle("light");
        document.querySelector('.menu-btn').classList.toggle("light");
        document.querySelector('.home_content_title').classList.toggle("light");
        document.querySelector('.line1').classList.toggle("light");
        document.querySelector('.line2').classList.toggle("light");
        document.querySelector('.mouse').classList.toggle("light");
        document.querySelector('.bg-home').classList.toggle("light");
        // styles page About
        document.querySelector('.about_container').classList.toggle("light");
        document.querySelector('.about_card').classList.toggle("light");
        document.querySelector('.about_table_title1').classList.toggle("light");
        document.querySelector('.about_table_title2').classList.toggle("light");
        document.querySelector('.about_table_title3').classList.toggle("light");
        document.querySelector('.about_table_title4').classList.toggle("light");
        // styles page Technologies
        document.querySelector('.technologies_text').classList.toggle("light");
        // styles page Result Experiences
        document.querySelector('.resultExperience-title').classList.toggle("light");
        document.querySelector('.number_item_text_green').classList.toggle("light");
        document.querySelector('.number_item_text_yellow').classList.toggle("light");
        document.querySelector('.number_item_text_pink').classList.toggle("light");
        
        // styles page Stages
        document.querySelector('.stagesDev_title_itemOne').classList.toggle("light");
        document.querySelector('.stagesDev_title_itemTwo').classList.toggle("light");
        document.querySelector('.stagesDev_title_itemThree').classList.toggle("light");
        document.querySelector('.stages_line').classList.toggle("light");
        document.querySelector('.stages_lineTwo').classList.toggle("light");


    }
    
    return (
        <button class="buttonToggleTheme" onClick={ toggleTheme }>
            <div className="themeButton">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="toggleTheme">
                    <div className="inRound"></div>
                </div>
                <div className="sky">
                    <div className="sky_round"></div>
                    <div className="sky_round"></div>
                    <div className="sky_round"></div>
                    <div className="sky_round"></div>
                    <div className="sky_round"></div>
                    <div className="sky_round"></div>
                </div>
                <div className="sky_und">
                    <div className="sky_und_round"></div>
                    <div className="sky_und_round"></div>
                    <div className="sky_und_round"></div>
                    <div className="sky_und_round"></div>
                    <div className="sky_und_round"></div>
                    <div className="sky_und_round"></div>
                </div>
                <div className="cosmosstar">
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton1" />
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton2" />
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton3" />
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton4" />
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton5" />
                    <img src="./assets/images/cosmostar.png" alt="" className="starButton6" />
                </div>
            </div>
        </button>
    )
}

export default ButtonTheme;