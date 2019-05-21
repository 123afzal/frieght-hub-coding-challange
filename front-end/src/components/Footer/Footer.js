import React, { Component } from 'react';
import { Link } from 'react-router';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-social">
                        <Link to="#"><i className="fa fa-facebook-square"></i></Link>
                        <Link to="#"><i className="fa fa-twitter-square"></i></Link>
                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                        <Link to="#"><i className="fa fa-youtube-square"></i></Link>
                    </div>
                    <div className="footer-navigation">
                        <Link to="#">Terms & Conditions</Link> | <Link to="#">Privacy Policy</Link> | <Link
                        to="#">Disclaimer</Link> | <Link to="#">About us</Link> | <Link to="#">Contact us</Link>
                    </div>
                    <div className="footer-copyright">
                        © 2009 - 2018 TFC International Ltd. All Rights Reserved. Registered trademarks and
                        Copyrights are the property of their respective owners.
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
