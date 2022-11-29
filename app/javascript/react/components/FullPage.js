import React from "react";

const FullPage = (props) => {
    return (
        <div className="grid-x full-page">
            <div className="cell medium-8">
                {props.page}
            </div>
            <div className="cell medium-4 grid-x">
                {props.user}
            </div>
        </div>
    )
}

export default FullPage