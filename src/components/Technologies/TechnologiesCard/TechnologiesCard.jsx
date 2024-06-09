import React from "react";
import './TechnologiesCard.css';

const TechnologiesCard = ( { title, image } ) => {
    return (
        <div className="techno-card">
            <div className="techno-card-img">
                <img src={require(`../../../images/${image}`)} alt="" />
            </div>
            <span>{title}</span>
        </div>
    );
};

export default TechnologiesCard;