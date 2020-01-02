import React from "react";
import { Link } from "react-router-dom";
import Badge from "../componets/Badge";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import DeleteBadgeModal from "../componets/DeleteBadgeModal";

function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0);
    }

    return [count, setCount];
}

function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4);
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstname} {badge.lastname}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstname={badge.firstname}
                            lastname={badge.lastname}
                            twitter={badge.twitter}
                            job={badge.job}
                            email={badge.email}
                        />
                    </div>
                    <div className="col">
                        <h1>Actions</h1>
                        <div>
                            <div>
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                    }}
                                    className="btn btn-primary mr-4"
                                >
                                    Increase Count: {count}
                                </button>
                                <Link
                                    className="btn btn-primary mb-4"
                                    to={`/badges/${badge.id}/edit`}
                                >
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button
                                    onClick={props.onOpenModal}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                                <DeleteBadgeModal
                                    isOpen={props.ModalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;
