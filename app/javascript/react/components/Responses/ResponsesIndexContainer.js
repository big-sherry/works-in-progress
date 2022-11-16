import React from "react";
import ResponseIndexTile from "./ResponseIndexTile";

const ResponsesIndexContainer = (props) => {
    const responseIndex = props.responses.map((response) => {
        return (
            <ResponseIndexTile
                key={response.id}
                response={response}
            />
        )
    })

    return (
        <div className="response-index">
            {responseIndex}
        </div>
    )
}

export default ResponsesIndexContainer