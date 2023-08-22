import React from "react";
import Option from "./Option";

const Options = (props) => {
    
    return (
        <div>
            <button onClick= {props.removeAll}>Remove All</button>
            <p>Options: </p>
            {props.optionsList.map((option, index) => {
                return (
                    <Option 
                      key= {index} 
                      option= {option}
                      removeOne= {props.removeOne}
                    />
                );
            })}
        </div>
    );
}

export default Options;