import React, { useState } from "react";

const EditResponseForm = (props) => {
    const [newResponse, setNewResponse] = useState({ 
        body: props.response.body, 
        section: props.response.section 
    })

    const handleFormChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewResponse({
            ...newResponse,
            [updatingField]: event.currentTarget.value
        })
    }

    const clearForm = () => {
        setNewResponse({ body: "", section: "" })
    }

    const validateResponse = () => {
        const responseSections = ["Beginning", "Middle", "End"]
        if (!responseSections.includes(newResponse.section)) {
            setNewResponse({ ...newResponse, section: null })
        }
        if (newResponse.body.trim === '') {
            setNewResponse({ ...newResponse, body: null })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const holdResponse = { ...newResponse }
        validateResponse()
        if (!props.updateResponse(newResponse, props.response.id)) {
            clearForm()
        } else {
            setNewResponse({ ...holdResponse })
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-response">
                <label>
                    <div className={`response-body-label ${newResponse.section}`}>
                        Response:
                    </div>
                    <div className="new-response-textarea">
                        <textarea 
                            name="body"
                            id="body"
                            value={newResponse.body}
                            onChange={handleFormChange}
                            rows={5}
                        />
                    </div>
                </label>
                <div className="response-section-select">
                    <label>
                        <div className={`response-section-label ${newResponse.section}`}>
                            Section:
                        </div>
                        <select 
                            name="section" 
                            id="section" 
                            onChange={handleFormChange}
                            value={newResponse.section}
                        >
                            <option name="section" id="section" value="">Select</option>
                            <option name="section" id="section" value="Beginning">Beginning</option>
                            <option name="section" id="section" value="Middle">Middle</option>
                            <option name="section" id="section" value="End">End</option>
                        </select>
                    </label>
                </div>
                <input className={`submit-button ${newResponse.section}`} type="submit" value="Add Response"/>
            </div>
        </form>
    )
}

export default EditResponseForm