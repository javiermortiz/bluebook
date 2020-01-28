import React from 'react';

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors () {
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

    handleSubmit () {
        this.props.processForm(this.state);
    }

    update (field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render () {
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input
                            type='email'
                            onChange={this.update('email')} 
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type='password'
                            onChange={this.update('password')}
                        />
                    </label>
                    <input 
                        type="submit" 
                        value={this.props.formType}
                    />
                </form>
            </div>
        )
    }
}

export default SessionForm;
