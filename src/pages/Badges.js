import React from "react";

import "./styles/Badges.css";
import logo from "../images/badge-header.svg";
import BadgeList from "../componets/BadgesList";
import PageLoading from "../componets/PageLoading";
import PageError from "../componets/PageError";
import { Link } from "react-router-dom";
import api from "../api";
import MiniLoader from "../componets/MiniLoader";

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading === true && this.state.data === undefined) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges__conf-logo"
                                src={logo}
                                alt="Conf logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <div className="Badge__container">
                            <div className="Badges__buttons">
                                <Link
                                    to="/Badges/new"
                                    className="btn btn-primary"
                                >
                                    New Badge
                                </Link>
                            </div>
                        </div>
                        <BadgeList Badges={this.state.data} />
                        {this.state.loading && <MiniLoader />}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
