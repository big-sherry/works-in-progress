import React, { useState, useEffect } from 'react';
import PromptIndexTile from './PromptIndexTile';

const PromptsIndexContainer = (props) => {
    const [prompts, setPrompts] = useState([])

    const getPrompts = async () => {
        try {
            const response = await fetch('api/v1/prompts')
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const fetchedPrompts = await response.json()
            setPrompts(fetchedPrompts.prompts)
        } catch(err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    
    useEffect(() => {
        getPrompts()
    }, [])
    
        const promptsIndex = prompts.map((prompt) => {
            return (
                <PromptIndexTile
                    key={prompt.id}
                    prompt={prompt}
                />
            )
        })
    
    return (
        <div className='grid-x'>
            {promptsIndex}
        </div>
    )
}

export default PromptsIndexContainer