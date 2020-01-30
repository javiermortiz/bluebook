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
            <header className="bluebar">

                <nav className="bluebar_nav group">

                    <h1 className="bluebar_nav_logo"><Link to={`/newsfeed/${currentUser.id}`}>b</Link></h1>

                    <ul className="bluebar_nav_list group">
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
            </header>
        )
    }
    
}

export default Bluebar;