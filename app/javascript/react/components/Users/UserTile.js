import React from "react";

const UserTile = (props) => {
    const { user } = props

    const signOut = () => {
        window.location.pathname = "/users/sign_out"
    }

    if (user) {
        return (
            <div className="user-tile cell medium-12">
                <div className="user-profile-pic">
                    <img src={user.profile_pic?.url} />
                </div>
                <h1 className="user-tile-username">
                    @{user.username}
                </h1>
                <p className="user-button" onClick={signOut}>
                    Sign Out
                </p>
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