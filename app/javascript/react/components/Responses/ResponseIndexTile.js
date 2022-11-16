import React from "react";

const ResponseIndexTile = (props) => {
    const { response } = props
    return (
        <div className="response-tile">
            <div className="card">
                <div className="card-divider">
                    <p>
                        {response.user.username}
                    </p>
                    <h1>
                        {response.title}
                    </h1>
                </div>
                <div className="card-section">
                    <p>
                        {response.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResponseIndexTile