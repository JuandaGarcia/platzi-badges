import React from "react";
import "./styles/Home.css";
import header from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <React.Fragment>
            <div className="Home">
                <div className="Home__col">
                    <div>
                        <img src={logo} alt="Logo" />
                        <h1 className="mayus">Print your badges</h1>
                        <p>The easiest way to manage your conference</p>
                        <Link to="/Badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>
                <div className="Home__col">
                    <img className="logo" src={header} alt="Logo" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
