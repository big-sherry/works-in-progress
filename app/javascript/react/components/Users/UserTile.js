import React from "react";

const UserTile = (props) => {
    const { user } = props

    if (user) {
        return (
            <div className="user-tile">
                <h1>
                    @{user.username}
                </h1>
                <div className="user-profile-pic">
                </div>
            </div>
        )
    } else {
        return (
            <div className="user-tile">
                <h1>
                    Not Signed In
                </h1>
            </div>
        )
    }

}

export default UserTile