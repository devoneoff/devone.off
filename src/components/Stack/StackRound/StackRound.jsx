import React, { useState } from "react";
import './StackRound.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const StackRound = ( { title, percent, num, isActive, onClick } ) => {


    // const toggleShowMoreStacks = () => {
    //     document.querySelector('.stackActive_container').classList.toggle('closeActiveStack');
    // }

    return (
        <>
            <div className={ `stackRound_container ${ isActive ? "active" : "" } stackRound_container${ num }` } onClick={ () => onClick() }>
                <CircularProgressbar
                    value={ percent }
                    // text={`${value}%`}
                    text=''
                    circleRatio={0.75}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        // strokeLinecap: "butt",
                        trailColor: "#2B2A61",
                        textSize: '14px',
                    })}
                />
                <div className={ `stackRound_title stackRound_title${num}` }>{ title }</div>
                <div className="stackRound_percentage">{ percent }%</div>
            </div>
        </>
    );
};

export default StackRound;