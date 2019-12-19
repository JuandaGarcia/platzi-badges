import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.Badges.map(Badge => {
                    return (
                        <li className="BadgesListItem" key={Badge.id}>
                            <img
                                className="BadgesListItem__avatar"
                                src={Badge.avatar}
                                alt="avatar"
                            />
                            <div className="info">
                                <p>
                                    <strong>
                                        {Badge.firstName} {Badge.lastName}
                                    </strong>
                                </p>
                                <p className="twitter">@{Badge.twitter}</p>
                                <p>{Badge.job}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;
