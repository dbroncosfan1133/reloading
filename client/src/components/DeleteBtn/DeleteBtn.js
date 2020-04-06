import React from "react";
import "./style.css";

function DeleteBtn(props) {
    return (
        <div className="buttons">
            <span className="button is-danger delete-btn" {...props} role="button" tabIndex="0">
                ✗
            </span>
        </div>
    )
}

export default DeleteBtn;