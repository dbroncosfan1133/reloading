import React from "react";
import { Link } from "react-router-dom";

class MainPgButton extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/main"}>
                    <button className="button is-danger is-large" onClick={this.handleClick.bind(this)}>Main Page</button>
                </Link>
            </div>
        )
    }
}

export default MainPgButton;