import React from "react";
import NewResponseForm from "./NewResponseForm";

const NewResponseFormContainer = (props) => {
    return (
        <NewResponseForm 
            postResponse={props.postResponse}
        />
    )
}

export default NewResponseFormContainer