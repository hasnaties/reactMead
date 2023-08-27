import React from "react";

const Action = (props) => (
    <div>
        <button 
            className="big-button" 
            onClick= {props.handleAction} 
            disabled= {!(props.btnState)}
            >
            What should I do?
        </button>
    </div>
);

export default Action;