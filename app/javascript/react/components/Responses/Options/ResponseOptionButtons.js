import React, { useState } from "react";

const ResponseOptionButtons = (props) => {
    let optionSelected = ""

    const optionButtons = props.options.map((option) => {
        if (props.responseOption === option) {
            optionSelected = "option-selected"
        } else {
            optionSelected = "option-unselected"
        }
        return (
            <button 
                key={props.options.indexOf(option)}
                type="button" 
                className={`option-button ${optionSelected}`} 
                onClick={props.optionClick}
            >
                {option}
            </button>
        )
    })

    return (
        <div className="response-options">
            <div className="option-buttons-row">
                {optionButtons}
            </div>
        </div>
    )
}

export default ResponseOptionButtons