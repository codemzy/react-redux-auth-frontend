import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand" href="#">Navbar</a>
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Sign In</a>
                </li>
              </ul>
            </nav>
        );
    }
}

export default Header;