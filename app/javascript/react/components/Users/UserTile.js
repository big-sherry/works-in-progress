import React from "react";

const UserTile = (props) => {
    const { user } = props

    if (user) {
        return (
            <div className="user-tile cell medium-12">
                <div className="user-profile-pic">
                    <img src={user.profile_pic?.url} />
                </div>
                <div className="user-tile-username">
                    <h1>
                        @{user.username}
                    </h1>
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