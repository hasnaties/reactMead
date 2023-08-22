import React from "react";

const Option = (props) => {
    
    return (
        <div>
            {props.option}
            <button 
              onClick= {() => {
                props.removeOne(props.option);
              }}>

              rmv
            </button>
        </div>
    );
}

export default Option;