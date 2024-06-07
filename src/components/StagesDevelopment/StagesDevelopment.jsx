import React from "react";
import './StagesDevelopment.css';
import StageDevCard from "./StageDevCard/StageDevCard";
import { STAGES } from "../../utils/data";

const StagesDevelopment = () => {
    return (
        <div className="stagesDev-container">
            <div className="stagesDev_title">
                <div className="stagesDev_title-item stagesDev_title_itemOne">speed</div>
                <div className="stages_line"></div>
                <div className="stagesDev_title-item stagesDev_title_itemTwo">quality</div>
                <div className="stages_line stages_lineTwo"></div>
                <div className="stagesDev_title-item stagesDev_title_itemThree">result</div>
            </div>
            <div className="stagesDev_cards">
                {STAGES.map( ( item ) => (
                    <StageDevCard 
                        key={ item.title }
                        title={ item.title }
                        image={ item.image }
                        about={ item.about }
                        number={ item.number }
                    />
                ))}
            </div>
        </div>
    );
};

export default StagesDevelopment;