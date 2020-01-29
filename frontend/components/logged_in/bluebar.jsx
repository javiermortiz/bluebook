import React from 'react';
import { Link } from 'react-router-dom';

class Bluebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropdownOpen: false};
        this.openDropdown = this.openDropdown.bind(this);
    }

    openDropdown () {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
    }

    render () {
        const { currentUser, logout } = this.props;
        return (
            <div className="bluebar">
                <Link to={`/newsfeed/${currentUser.id}`}><p className="logo">b</p></Link>
                <nav className="bluebar_navbar">
                    <ul>
                        <li><Link to={`/profile/${currentUser.id}`}>{currentUser.first_name}</Link></li>
                        <li><button onClick={this.openDropdown}>&#9662;</button></li>
                    </ul>
                    {
                        this.state.dropdownOpen && 
                        <ul id="dropdown">
                            <li>
                                <button onClick={logout}>Log out</button>
                            </li>
                        </ul>
                    }
                </nav>
            </div>
        )
    }
    
}

export default Bluebar;