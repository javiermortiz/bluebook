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
        let profileUrl = window.profileURL;
        if (currentUser.profileUrl) {
            profileUrl = currentUser.profileUrl
        }
        return (
            <header className="bluebar">

                <nav className="bluebar_nav group">

                    <h1 className="bluebar_nav_logo"><Link to={`/`}>b</Link></h1>

                    <ul className="bluebar_nav_list group">
                        <li>
                            <Link to={`/${currentUser.id}`}>
                                <img className="thumbnail" src={profileUrl} />
                                <div className="current-user">{currentUser.first_name}</div>
                            </Link>
                        </li>
                        <li><button onClick={this.openDropdown}>&#9662;</button></li>
                    </ul>
                    {
                        this.state.dropdownOpen && 
                        (
                        <div id="dropdown">
                            <div className="bluebar-up-arrow"></div>
                            <ul className="dropdown-list">
                                <li>
                                    <button onClick={logout}>Log out</button>
                                </li>
                            </ul>
                        </div>
                        )
                    }
                </nav>
            </header>
        )
    }
    
}

export default Bluebar;