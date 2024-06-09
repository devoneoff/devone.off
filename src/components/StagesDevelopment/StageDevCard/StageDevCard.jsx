import React from "react";
import './StageDevCard.css';
import '../../Cursor/Cursor.css';

const StageDevCard = ( { title, number, image, about } ) => {
    return (
        <div className="stagesDevCard-container">
            <div className="stagesDevCard-front">
                <div className="stagesDevCard-front_number">{ number }</div>
                <div className="stagesDevCard-front_content">
                    <div className="stagesDevCard-front_content-image">
                        <img src={ require( `../../../images/${image}` ) } alt="" />
                    </div>
                    <div className="stagesDevCard-front_content-title">{ title }</div>
                </div>
            </div>
            <div className="stagesDevCard-back">
                <h3>{ title }</h3>
                <p>{ about }</p>
            </div>
        </div>
    );
};

export default StageDevCard;