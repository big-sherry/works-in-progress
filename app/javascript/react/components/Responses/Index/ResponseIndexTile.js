import React from "react";

const ResponseIndexTile = (props) => {
    const { response } = props

    return (
        <div className="response-tile">
            <div className="response-tile-user">
                <h5>
                    @{response.user.username}
                </h5>
            </div>
            <div className={`response-section ${response.section}`}>
                {response.section}
            </div>
            <p>
                {response.body}
            </p>
            <div className="response-date">

            </div>
            <div className="edit-delete-buttons">
                {props.editResponseButton}
                {props.deleteResponseButton}
            </div>
        </div>
    )
}

export default ResponseIndexTile