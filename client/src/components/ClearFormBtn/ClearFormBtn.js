import React from "react";

class ClearFormBtn extends React.Component {
    handleClick() {

    }
    render() {
        return (
            <div className="buttons">
                <button className="button is-warning is-large" onClick={this.handleClick.bind(this)}>Clear Form</button>
            </div>
        )
    }
}

export default ClearFormBtn;