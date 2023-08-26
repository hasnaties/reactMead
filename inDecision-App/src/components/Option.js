import React from "react";

const Option = (props) => (
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

export default Option;