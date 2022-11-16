import React from "react";

const FullPage = (props) => {

    const signIn = () => {
        window.location.pathname = "/users/sign_up"
        // sign_in/user tile
    }

    return (
        <div className="grid-x full-page">
            <div className="cell medium-8">
                {props.page}
            </div>
            <div className="cell medium-4">
                {props.user}
                <div onClick={signIn}>
                    <h1>Click me!</h1>
                </div>
            </div>
        </div>
    )
}

export default FullPage