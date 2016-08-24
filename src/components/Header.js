import React from 'react';
import {Link, IndexLink} from 'react-router';
import { connect } from 'react-redux';

class Header extends React.Component {
    
    _renderAccountLinks() {
      if (this.props.authenticated) {
        return (
          <li className="nav-item">
            <Link to="/signout" className="nav-link" activeClassName="active">Sign Out</Link>
          </li>
        );
      } else {
        return (
          <div>
            <li className="nav-item">
              <Link to="/signin" className="nav-link" activeClassName="active">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" activeClassName="active">Register</Link>
            </li>
          </div>
        );
      }
    }
    
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
              <IndexLink to="/" className="navbar-brand" activeClassName="active">Home</IndexLink>
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  {this._renderAccountLinks()}
                </li>
              </ul>
            </nav>
        );
    }
}

export default connect((state) => {
  return {
    authenticated: state.auth.authenticated
  };
})(Header);