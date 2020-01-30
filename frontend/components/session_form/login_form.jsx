import React from 'react';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors () {
        if (this.state.errors === "") return null;
        return (
            <div className="errors-box" id="login-errors-box">
                <div className="login-arrow-right"></div>
                <p className="login-errors-message">
                    Wrong email/password.
                </p>
            </div>
        )
    }

    handleSubmit (e) {
        e.preventDefault();
        const user = {email: this.state.email, password: this.state.password};
        if (Object.values(user).every(stateField => stateField !== "")) {
            this.props.processForm(user);
            this.setState({
                email: '',
                password: '',
            });
        } else {
            this.setState({ errors: 'errors' });
        }
    }

    update (field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render () {
        return (
            <div className="login-header">

                <nav className="login-nav">

                    <h1 className="login-nav-logo">bluebook</h1>

                    <form onSubmit={this.handleSubmit} className="login-nav-form">
                        <div className="login-nav-form-email">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type='email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className={`login-email ${this.state.errors}`}
                            />
                        </div>
                        <div className="login-nav-form-password">
                            <label htmlFor="password">
                                Password
                        </label>
                            <input
                                id="password"
                                type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className={`login-password ${this.state.errors}`}
                            />
                        </div>
                        <div className="login-nav-form-button">
                            <input
                                type="submit"
                                value={this.props.formType}
                                className="login_button"
                            />
                        </div>
                        {this.renderErrors()}
                    </form>

                </nav>

            </div>
            
        )
    }
}

export default LoginForm;
