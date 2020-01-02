import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <Gravatar
                    className="BadgesListItem__avatar"
                    email={this.props.badge.email}
                />

                <div>
                    <strong>
                        {this.props.badge.firstname} {this.props.badge.lastname}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.job}
                </div>
            </div>
        );
    }
}

function useSearchBadges(Badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(Badges);

    React.useMemo(() => {
        const result = Badges.filter(Badges => {
            return `${Badges.firstname} ${Badges.lastname}`
                .toLowerCase()
                .includes(query.toLocaleLowerCase());
        });

        setFilteredBadges(result);
    }, [Badges, query]);

    return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
    const Badges = props.Badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(Badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.id}`}
                            >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
