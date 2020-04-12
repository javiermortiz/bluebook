import React from 'react';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin (e) {
        e.preventDefault();
        this.props.processForm({email: 'bluebeetle@dc.com', password: 'bluebeetle'})
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.processForm(this.state);
        // this.setState({
        //     email: '',
        //     password: '',
        // });
    }

    update (field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render () {
        let errorsClass;
        let errorsMessage;

        if (this.props.errors[0] === 'login') {
            errorsClass = "errors";
            errorsMessage = (
                <div className="errors-box" id="login-errors-box">
                    <div className="login-arrow-right"></div>
                    <ul className="login-errors-message">
                        {this.props.errors.slice(1).map(error => {
                            return <li>{error}</li>
                        })}
                    </ul>
                </div>
            )
        }
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
                                className={`login-email ${errorsClass}`}
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
                                className={`login-password ${errorsClass}`}
                            />
                        </div>
                        <div className="login-nav-form-button">
                            <input
                                type="submit"
                                value={this.props.formType}
                                className="login_button"
                            />
                        </div>
                        <div className="login-nav-form-button">
                            <input
                                type="submit"
                                value="Demo log in"
                                className="login_button"
                                onClick={this.demoLogin}
                            />
                        </div>
                        {errorsMessage}
                    </form>
                    
                </nav>

            </div>
            
        )
    }
}

export default LoginForm;
