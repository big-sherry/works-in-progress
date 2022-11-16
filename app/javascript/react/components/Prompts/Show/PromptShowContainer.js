import React, { useState, useEffect } from "react";
import PromptShowTile from "./PromptShowTile";

const PromptShowContainer = (props) => {
    const [prompt, setPrompt] = useState({
        responses: []
    })

    const getPrompt = async () => {
        try {
            const path = window.location.pathname
            const promptId = path[path.length - 1]
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
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
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
        </div>
    )
}

export default PromptShowContainer