import React from "react";
import { Link } from "react-router-dom";

class LoginBtn extends React.Component {
  handleClick() {
    console.log('Clicked');
  }
  render() {
    return (
      <div className="buttons">
        <Link to={"/main"}>
          <button className="button loginBtn is-large" onClick={this.handleClick.bind(this)}>Login</button>
        </Link>
      </div>
    )
  }
}


export default LoginBtn;