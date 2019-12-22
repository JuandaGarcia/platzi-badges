import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/platziconf-logo.svg";

function NotFound() {
    return (
        <React.Fragment>
            <div className="Home">
                <div className="Home_col">
                    <div className="center">
                        <img src={logo} alt="Logo" />
                        <h1 className="mayus">404 Not Found</h1>
                        <br />
                        <Link to="/" className="btn btn-primary">
                            Go to home
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;
