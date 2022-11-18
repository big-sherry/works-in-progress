import React, { useState } from "react";

const NewResponseForm = (props) => {
    const [newResponse, setNewResponse] = useState({ body: "" })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("hello")
    }

    const handleFormChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewResponse({
            ...newResponse,
            [updatingField]: event.currentTarget.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-response">
                <label>
                    <div className="response-label">
                        Your Response:
                    </div>
                    <div className="new-response-textarea">
                        <textarea 
                            name="body"
                            id="body"
                            value={newResponse.body}
                            onChange={handleFormChange}
                        />
                    </div>
                </label>
                <div className="submit-button">
                    <input type="submit" value="Add Response"/>
                </div>
            </div>
        </form>
    )
}

export default NewResponseForm