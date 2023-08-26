import React from "react";

const Action = (props) => (
    <div>
        <button 
            onClick= {props.handleAction}
            disabled= {!(props.btnState)}
            >
            What should I do?
        </button>
    </div>
);

export default Action;