import React, { useState } from "react";
import './StackActive.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const StackActive = ({ heading, stacks }) => {

    const toggleCloseActiveStack = () => {
        document.querySelector('.stackActive_container').classList.toggle('closeActiveStack');
        document.querySelector('body').classList.toggle('hidden');
    }

    return (
        <>
            <div className="stackActive_container closeActiveStack">
                <div className="stackActive_container_title">
                    <div></div>
                    <div><h3>Stack<span className="gradientTextTitle">{heading}</span></h3></div>
                    <div><button onClick={ toggleCloseActiveStack } className="btnToggleCloseActiveStack"><span className="material-symbols-rounded">close_small</span></button></div>
                </div>
            
                <div className="stackActive_content_All">
                    {stacks.map((item, index) => (
                        <React.Fragment key={`skill_${index}`}>
                            <div className="stackActive_content">
                                <CircularProgressbar
                                    value={item.percentStack}
                                    text=''
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 8,
                                        // strokeLinecap: "butt",
                                        trailColor: "#191840",
                                        textSize: '14px',
                                    })}
                                />
                                <div className="stackActive_title">{item.stack}</div>
                                <div className="stackActive_percentage">{item.percentStack}%</div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default StackActive;