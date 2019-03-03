import React from "react";

const alertFeedBack = (props) => {
    const {type, message} = props;
    let className = "alert-dismissible fade show alert alert-" + type;
    return (
        <div className={className} role="alert">
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default alertFeedBack;