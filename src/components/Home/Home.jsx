import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <img src="./assets/images/bg.png" className="bg-image" alt="" />
            <div className="bg-home"></div>
            <div className="home_content">
                <div className="home_content_title">
                    <h1>Modern solutions<br />for the digital age</h1>
                    <h3>We make the digital world accessible to everyone and help you achieve success and grow</h3>
                </div>
                <div className="home_content_scroll">
                    <div className="line line1"></div>
                    <div className="mouse">
                        <img src="./assets/images/mouse.png" alt="" />
                    </div>
                    <div className="line line2"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;