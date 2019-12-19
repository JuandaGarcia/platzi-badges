import React from "react";

import Badge from "../componets/Badge";
import Navbar from "../componets/Navbar";
import BadgeForm from "../componets/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
    state = {
        form: {
            firstname: "",
            lastname: "",
            email: "",
            job: "",
            twitter: ""
        }
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstname={this.state.form.firstname}
                                lastname={this.state.form.lastname}
                                job={this.state.form.job}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatar="https://icon-library.net/images/boy-icon-png/boy-icon-png-10.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
