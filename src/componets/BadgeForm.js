import React from "react";

class BadgeForm extends React.Component {
    // state = {};

    // handleChange = e => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    handleClick = e => {
        console.log("Button was clicked");
    };

    /* handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submit");
        console.log(this.state);
    }; */

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Frist Name</label>
                        <input
                            onChange={this.props.onChange}
                            name="firstname"
                            className="form-control"
                            type="text"
                            value={this.props.formValues.firstname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            name="lastname"
                            className="form-control"
                            type="text"
                            value={this.props.formValues.lastname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            name="email"
                            className="form-control"
                            type="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <input
                            onChange={this.props.onChange}
                            name="job"
                            className="form-control"
                            type="text"
                            value={this.props.formValues.job}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            name="twitter"
                            className="form-control"
                            type="text"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                    {this.props.error && (
                        <p className="text-danger">
                            {this.props.error.message}
                        </p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;
