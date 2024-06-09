import React, { useState } from "react";
import './Stack.css';
import StackRound from "./StackRound/StackRound";
import { STACKS } from "../../utils/data";
import StackActive from "./StackActive/StackActive";

const Stack = () => {
    const [ selectedStack, setSelectedStack ] = useState(STACKS[0]);
    const handleSelectStack = ( data ) => {
        setSelectedStack( data );
    }
    return (
        <div className="stack_container">
            <div className="stack_content">
                {STACKS.map( (item ) => (
                    <StackRound 
                        key={ item.title }
                        title={ item.title }
                        percent={ item.percent }
                        num={ item.num }
                        isActive={ selectedStack.title === item.title }
                        onClick={ () => {
                            handleSelectStack(item);
                            document.querySelector('.stackActive_container').classList.toggle('closeActiveStack');
                            document.querySelector('body').classList.toggle('hidden');
                        }}
                    />
                ))}
            </div>

            <StackActive
                heading={ selectedStack.title }
                stacks={selectedStack.stacks} 
            />
        </div>
    );
};

export default Stack;