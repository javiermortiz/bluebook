import React from 'react';
import { Link } from 'react-router-dom';

class Profilebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdownOpen: false };
        this.openDropdown = this.openDropdown.bind(this);
    }

    openDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        const { currentUser } = this.props;
        return (
            <nav className="profile_nav group">
                <ul className="profile_nav_list group">
                    <li><Link to={`/${currentUser.id}`}>Timeline</Link></li>
                    <li><Link to=''>About</Link></li>
                    <li><Link to=''>Friends</Link></li>
                    <li><Link to=''>Photos</Link></li>
                </ul>
            </nav>
        )
    }

}

export default Profilebar;