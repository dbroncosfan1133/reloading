import React from "react";
import { Link } from "react-router-dom";

class UpdateLoadsBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/loads"}>
                    <button className="button is-success is-large" onClick={this.handleClick.bind(this)}>Update Load</button>
                </Link>
            </div>
        )
    }
}

export default UpdateLoadsBtn;