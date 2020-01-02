import React from "react";
import PageLoading from "../componets/PageLoading";
import PageError from "../componets/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        ModalIsOpen: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleOpenModal = e => {
        this.setState({ ModalIsOpen: true });
    };

    handleCloseModal = e => {
        this.setState({ ModalIsOpen: false });
    };

    handleDeleteBadge = async () => {
        this.setState({ loading: true, error: null });
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push("/badges");
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                ModalIsOpen={this.state.ModalIsOpen}
                badge={this.state.data}
                onDeleteBadge={this.handleDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainer;
