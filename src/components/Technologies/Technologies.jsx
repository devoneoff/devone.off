import React from "react";
import './Technologies.css';
import TechnologiesCard from "./TechnologiesCard/TechnologiesCard";
import { TECHNOLOGIES } from "../../utils/data";

const Technologies = () => {
    return (
        <div className="technologies_container">
            <div className="technologies_text">
                <p>Using an ever-growing list of technologies</p>
            </div>
            <div className="technologies_items">
                {TECHNOLOGIES.map( ( item ) => (
                    <TechnologiesCard
                        key={ item.title }
                        image={ item.image }
                        title={ item.title }
                    />
                ))}
            </div>
        </div>
    );
};

export default Technologies;