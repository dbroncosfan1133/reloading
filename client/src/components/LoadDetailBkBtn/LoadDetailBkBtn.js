import React from "react";
import { Link } from "react-router-dom";

class LoadDetailBkBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/loads"}>
                    <button className="button is-warning is-large" onClick={this.handleClick.bind(this)}>Go Back</button>
                </Link>
            </div>
        )
    }
}

export default LoadDetailBkBtn;