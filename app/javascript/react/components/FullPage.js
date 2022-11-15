import React from "react";
import PromptsIndexContainer from "./Prompts/PromptsIndexContainer";

const FullPage = (props) => {

    return (
        <div className="grid-x full-page">
            <div className="cell medium-8">
                {props.page}
            </div>
            <div className="cell medium-4">
                {props.user}
            </div>
        </div>
    )
}

export default FullPage