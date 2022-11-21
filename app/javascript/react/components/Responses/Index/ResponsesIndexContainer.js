import React from "react";
import ResponseIndexTile from "./ResponseIndexTile";

const ResponsesIndexContainer = (props) => {

    let loginMessage = ""
    if (props.user) 

    const promptResponses = props.responses.reverse()

    const responseIndex = promptResponses.map((response) => {
        let editResponseButton
        let deleteResponseButton
        if (props.user) {
            response.user = props.user
           // set edit button to a button
           // set delete button to a button
           // will these both need fetches? prob
        }
        return (
            <ResponseIndexTile
                key={response.id}
                response={response}
            />
        )
    })

    return (
        <div className="prompt-show-item">
            <div className="response-index-container">
                {responseIndex}
            </div>
        </div>
    )
}

export default ResponsesIndexContainer