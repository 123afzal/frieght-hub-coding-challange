import React, { Component } from 'react';
import { Link } from 'react-router';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-social">
                        <Link to="https://www.facebook.com/"><i className="fa fa-facebook-square"></i></Link>
                        <Link to="https://www.twitter.com"><i className="fa fa-twitter-square"></i></Link>
                        <Link to="https://www.linkedin.com"><i className="fa fa-linkedin"></i></Link>
                        <Link to="https://www.youtube.com"><i className="fa fa-youtube-square"></i></Link>
                    </div>
                    <div className="footer-copyright">
                        © 2019 Designed & Developed by Syed Afzal Hasan
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
