import React from "react";
import ResponseIndexTile from "./ResponseIndexTile";
import EditResponseForm from "../Edit/EditResponseForm";

const ResponsesIndexContainer = (props) => {
    const promptResponses = props.responses.reverse()

    const responseIndex = promptResponses.map((response) => {
        const editClick = (event) => {
            props.setResponseOption("Create Response")
            props.setResponseOptionComp(<EditResponseForm
                                            response={response}
                                            updateResponse={props.updateResponse}
                                        />)
        }
    
        const deleteClick = (event) => {
            props.deleteResponse(response.id)
        }

        let editResponseButton = ""
        let deleteResponseButton = ""
        if (props.user) {
            response.user = props.user
            editResponseButton = <div className="response-button" onClick={editClick}>Edit</div>
            deleteResponseButton = <div className="response-button" onClick={deleteClick}>Delete</div>
        }
        return (
            <ResponseIndexTile
                key={response.id}
                response={response}
                editResponseButton={editResponseButton}
                deleteResponseButton={deleteResponseButton}
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