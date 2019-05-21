import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-md navbar-dark nav-bg">
                <div className="container">
                    <Link to="#" className="navbar-brand">
                        <img src={require('../../assets/logo.jpg')} alt="logo"/>
                    </Link>
                    <span className="top-nav-close pull-right">
                          <i className="fa fa-times fa-2x"></i>
                      </span>
                </div>
            </Nav>
        );
    }
}

export default Navigation;


