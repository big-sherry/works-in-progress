import React from "react"

const PromptShowTile = (props) => {
    const { prompt } = props
    return (
        <div className='prompt-show-item'>
            <div className='prompt-show-tile'>
                <div className='card'>
                    <div className='card-divider'>
                        <h1>{prompt.title}</h1>
                    </div>
                    <div className='card-section'>
                        <p>{prompt.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptShowTile