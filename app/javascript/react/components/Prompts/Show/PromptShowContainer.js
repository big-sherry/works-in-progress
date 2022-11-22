import React, { useState, useEffect } from "react";
import PromptShowTile from "./PromptShowTile";
import ResponseOptionButtons from "../../Responses/Options/ResponseOptionButtons";
import ResponsesIndexContainer from "../../Responses/Index/ResponsesIndexContainer";
import NewResponseFormContainer from "../../Responses/New/NewResponseFormContainer";

const PromptShowContainer = (props) => {
    
    const [prompt, setPrompt] = useState({ responses: [] })
    const [responseOption, setResponseOption] = useState("Responses")
    const [responseOptionComp, setResponseOptionComp] = useState()
    const [errors, setErrors] = useState("")
    const path = window.location.pathname
    const pathArray= path.split("/")
    const promptId = pathArray[pathArray.length - 1]
    
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
                window.location.reload()
                return true
            } else {
                setErrors(postedResponse.errors)
                return false
            }
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    const updateResponse = async (formPayload, responseId) => {
        try {
            const response = await fetch(`/api/v1/prompts/${promptId}/responses/${responseId}`, {
                method: 'PUT',
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
            const updatedResponse = await response.json()
            if (updatedResponse.response) {
                window.location.reload()
                return true
            } else {
                setErrors(updatedResponse.errors)
                return false
            }
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    const deleteResponse = async (responseId) => {
        try {
            const response = await fetch(`/api/v1/responses/${responseId}`, {
                method: 'DELETE',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(responseId)
            })
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            window.location.reload()
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
            
    let responseOptionComps = {
        "Responses":    <ResponsesIndexContainer
                            responses={prompt.responses}
                        />
    }
        
    if (props.user) {
        responseOptionComps = {
            "Responses":        <ResponsesIndexContainer
                                    responses={prompt.responses}
                                />,
            "Create Response":  <NewResponseFormContainer 
                                    postResponse={postResponse}
                                    setResponseOptionComp={setResponseOptionComp}
                                />,
            "Your Responses":   <ResponsesIndexContainer 
                                    responses={props.user.responses}
                                    user={props.user}
                                    deleteResponse={deleteResponse}
                                    updateResponse={updateResponse}
                                    setResponseOptionComp={setResponseOptionComp}
                                    setResponseOption={setResponseOption}
                                />
        }
    }

    const optionClick = (event) => {
        if (event.target.textContent != responseOption) {
            setResponseOption(event.target.textContent)
            setResponseOptionComp(responseOptionComps[event.target.textContent])
        }
    }

    let loginMessage = ""
    if (!props.user) {
        loginMessage =  <div className="login-message">
                            Log in or sign up to create your own responses!
                        </div>
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
            {loginMessage}
            <div className="response-errors">
                {errors}
            </div>
            {responseOptionComp}
        </div>
    )
}

export default PromptShowContainer