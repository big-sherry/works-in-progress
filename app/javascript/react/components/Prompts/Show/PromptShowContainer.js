import React, { useState, useEffect } from "react";
import PromptShowTile from "./PromptShowTile";
import ResponseOptionButtons from "../../Responses/Options/ResponseOptionButtons";
import ResponsesIndexContainer from "../../Responses/Index/ResponsesIndexContainer";
import NewResponseFormContainer from "../../Responses/New/NewResponseFormContainer";

const PromptShowContainer = (props) => {
    const [prompt, setPrompt] = useState({
        responses: []
    })

    const [responseOption, setResponseOption] = useState("Responses")
    const [responseOptionComp, setResponseOptionComp] = useState()
    const responseOptionComps = {
        "Responses":        <ResponsesIndexContainer
                                responses={prompt.responses}
                            />,
        "Create Response":  <NewResponseFormContainer />
    }
    const path = window.location.pathname
    const promptId = path[path.length - 1]

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

    const optionClick = () => {
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
            {responseOptionComp}
        </div>
    )
}

export default PromptShowContainer