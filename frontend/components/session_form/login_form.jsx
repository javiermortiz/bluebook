import React from 'react';

class LoginForm extends React.Component {
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
            <div className="login_bluebar_container">

                <div className="login_bluebar">

                    <div className="login_logo">
                        <h1>bluebook</h1>
                    </div>

                    <div className="login_form_container">
                        <form onSubmit={this.handleSubmit} className="login_form">
                            <div className="login-email">
                                <label htmlFor="input-email">
                                    Email
                            </label>
                                <input
                                    id="input-email"
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </div>
                            <div className="login-password">
                                <label htmlFor="input-password">
                                    Password
                            </label>
                                <input
                                    id="input-password"
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                            <input
                                type="submit"
                                value={this.props.formType}
                                className="login_button"
                            />
                            {this.renderErrors()}
                        </form>
                    </div>

                </div>

            </div>
            
        )
    }
}

export default LoginForm;
