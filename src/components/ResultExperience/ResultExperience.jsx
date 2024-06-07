import React from "react";
import './ResultExperience.css';

const ResultExperience = () => {
    return (
        <div className="resultExperience-container">
            <h1 className="resultExperience-title">With the experience to back it up</h1>
            <div className="resultExperience-number">
                <div className="resultExperience-number_item">
                    <div className="resultExperience-number_item_num resultExperience_green">2+</div>
                    <div className="resultExperience-number_item_text number_item_text_green">Years of Experience</div>
                </div>
                <div className="resultExperience-number_item">
                    <div className="resultExperience-number_item_num resultExperience_yellow">10+</div>
                    <div className="resultExperience-number_item_text number_item_text_yellow">Websites</div>
                </div>
                <div className="resultExperience-number_item">
                    <div className="resultExperience-number_item_num resultExperience_pink">5+</div>
                    <div className="resultExperience-number_item_text number_item_text_pink">Web apps</div>
                </div>
            </div>
        </div>
    );
};

export default ResultExperience;