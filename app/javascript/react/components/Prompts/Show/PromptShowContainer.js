import React, { useState, useEffect } from "react";
import PromptShowTile from "./PromptShowTile";
import ResponseOptionButtons from "../../Responses/Options/ResponseOptionButtons";
import ResponsesIndexContainer from "../../Responses/Index/ResponsesIndexContainer";
import NewResponseFormContainer from "../../Responses/New/NewResponseFormContainer";

const PromptShowContainer = (props) => {
    const [prompt, setPrompt] = useState({ responses: [] })
    const path = window.location.pathname
    const promptId = path[path.length - 1]
    const [errors, setErrors] = useState("")
    const [responseOption, setResponseOption] = useState("Responses")
    const [responseOptionComp, setResponseOptionComp] = useState()
    
    const getPrompt = async () => {
        try {
            const response = await fetch(`/api/v1/prompts/${promptId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedPrompt = await response.json()
            setPrompt({
                ...fetchedPrompt.prompt,
                responses: [...fetchedPrompt.prompt.responses]
            })
            setResponseOptionComp(
                <ResponsesIndexContainer
                    responses={fetchedPrompt.prompt.responses}
                    />
                    )
                } catch(err) {
                    console.error(`Error in fetch: ${err.message}`)
                }
            }
            
            const postResponse = async (formPayload) => {
                try {
                    const response = await fetch(`/api/v1/prompts/${promptId}/responses`, {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                body: JSON.stringify(formPayload)
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const postedResponse = await response.json()
            if (postedResponse.response) {
                setPrompt({
                    ...prompt,
                    responses: [...prompt.responses, postedResponse.response]
                })
                setResponseOptionComp(
                    <ResponsesIndexContainer
                    responses={[...prompt.responses, postedResponse.response]}
                    />
                    )
                    return true
                } else {
                setErrors(postedResponse.errors)
                return false
            }
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    
    const responseOptionComps = {
        "Responses":        <ResponsesIndexContainer
                                responses={prompt.responses}
                            />,
        "Create Response":  <NewResponseFormContainer 
                                postResponse={postResponse}
                                setResponseOptionComp={setResponseOptionComp}
                            />
    }
    
    const optionClick = (event) => {
        if (event.target.textContent != responseOption) {
            setResponseOption(event.target.textContent)
            setResponseOptionComp(responseOptionComps[event.target.textContent])
        }
    }
    
    useEffect(() => {
        getPrompt()
    }, [])

    return (
        <div className="prompt-show-container">
            <PromptShowTile
                prompt={prompt}
            />
            <ResponseOptionButtons 
                responseOption={responseOption}
                optionClick={optionClick}
                options={Object.keys(responseOptionComps)}
            />
            {errors}
            {responseOptionComp}
        </div>
    )
}

export default PromptShowContainer