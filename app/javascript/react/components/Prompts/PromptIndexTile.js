import React from "react";

const PromptIndexTile = (props) => {
    const { prompt } = props
    return (
        <div className="item card prompt-tile">
            <div className="card-divider">
                <h1>{prompt.title}</h1>
            </div>
            <div className="card-section prompt-body">
                <p>{prompt.body}</p>
            </div>
        </div>
    )
}

export default PromptIndexTile