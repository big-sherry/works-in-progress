import React from 'react';
import { Link } from 'react-router-dom';

const PromptIndexTile = (props) => {
    const { prompt } = props
    return (
        <div className='prompt-index-tile'>
            <Link to={`/prompts/${prompt.id}`} >
                <div className='card'>
                    <div className='card-divider'>
                        <h1>{prompt.title}</h1>
                    </div>
                    <div className='card-section'>
                        <p>{prompt.body}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PromptIndexTile