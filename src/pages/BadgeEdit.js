import React from "react";

import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../componets/Badge";
import BadgeForm from "../componets/BadgeForm";
import api from "../api";
import PageLoading from "../componets/PageLoading";

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstname: "",
            lastname: "",
            email: "",
            job: "",
            twitter: ""
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try {
            await api.badges.update(
                this.props.match.params.badgeId,
                this.state.form
            );
            this.setState({ loading: false });
            this.props.history.push("/Badges");
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img
                        className="BadgeEdit__hero-image img-fluid"
                        src={header}
                        alt="Logo"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstname={
                                    this.state.form.firstname || "Nombres"
                                }
                                lastname={
                                    this.state.form.lastname || "Apellidos"
                                }
                                twitter={this.state.form.twitter || "twitter"}
                                job={this.state.form.job || "Trabajo"}
                                email={this.state.form.email || "email"}
                                avatar="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>

                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;
