import React from 'react';

class SignupForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors () {
        if (!this.props.errors.length) return null;
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    return (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    )
                })}
            </ul>
        )
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.setState({email: '', password: ''});
    }

    update (field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render () {
        return (
            <div className="global_signup_container">

                <div className="global_signup">

                    <div className="signup_map_container">

                    </div>

                    <div className="signup_form">

                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Email
                            <input
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label>
                                Password
                            <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            <input
                                type="submit"
                                value={this.props.formType}
                            />
                            {this.renderErrors()}
                        </form>

                    </div>

                </div>
            
            </div>
        )
    }
}

export default SignupForm;
