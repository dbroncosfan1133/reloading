import React from "react";
import { Link } from "react-router-dom";

class ViewLoadDataBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/data"}>
                    <button className="button is-success is-large" onClick={this.handleClick.bind(this)}>View Load Data</button>
                </Link>
            </div>
        )
    }
}

export default ViewLoadDataBtn;