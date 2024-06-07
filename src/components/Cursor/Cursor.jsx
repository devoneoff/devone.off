import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [cursorDotStyle, setCursorDotStyle] = useState({
    left: 0,
    top: 0,
    });
    const [cursorEffectStyle, setCursorEffectStyle] = useState({
    left: 0,
    top: 0,
    });
    const [showEffect, setShowEffect] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;

            setCursorDotStyle({
                left: `${posX}px`,
                top: `${posY}px`,
            });
        };
        const handleMouseClick = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;
            setCursorEffectStyle({
                left: `${posX}px `,
                top: `${posY}px `,
            });
            setShowEffect(true);
            setTimeout(() => {
                setShowEffect(false);
            }, 100); // время видимости эффекта в миллисекундах
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
        };
    }, []);

    return (
        <div>
            <div
                className="cursor-dot"
                style={cursorDotStyle}
                data-cursor-dot
            >
                <img src="./cursor.png" alt="" />
            </div>
            {showEffect && (
            <div
            className={`cursor-effect ${showEffect ? 'show' : 'hide'}`}
            style={cursorEffectStyle}
            data-cursor-effect
            >
                <img src="./cursorEffect.png" alt="" />
            </div>
            )}
        </div>
    );
};

export default Cursor;