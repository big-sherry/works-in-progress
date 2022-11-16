import React from "react";

const ResponseIndexTile = (props) => {
    const { response } = props
    return (
        <div className="response-tile">
            <div className="card">
                <div className="card-section">
                    <h5>
                        {response.user.username}
                    </h5>
                    <p>
                        {response.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResponseIndexTile