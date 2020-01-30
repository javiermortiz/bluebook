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
