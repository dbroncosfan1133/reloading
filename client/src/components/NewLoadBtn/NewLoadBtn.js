import React from "react";
import { Link } from "react-router-dom";

class NewLoadsBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/newload"}>
                    <button className="button is-success is-large" onClick={this.handleClick.bind(this)}>New Load Data</button>
                </Link>
            </div>
        )
    }
}

export default NewLoadsBtn;