import React from "react";
import Option from "./Option";

const Options = (props) => (
        <div>
            <div className="widget-header">
                <p className="widget-header__title">Your Options</p>
                <button 
                className="button button--link"
                onClick= {props.removeAll}
                >
                Remove All
                </button>
            </div>

            {props.optionsList.length === 0 && <p className="widget__message">Please add options to get started!</p>}
            {props.optionsList.map((option, index) => {
                return (
                    <Option 
                      count= {index + 1}
                      key= {option} 
                      option= {option}
                      removeOne= {props.removeOne}
                    />
                );
            })}
        </div>
);

export default Options;