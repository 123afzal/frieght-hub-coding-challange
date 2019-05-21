import React, { Component } from 'react';
import { Link } from 'react-router';
import './Baner.css';

class Baner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
        let dropDown =  document.getElementsByClassName("help-dropdown-tb")[0];
        dropDown.style.display = dropDown.style.display !== 'block' ? 'block' : 'none'
    }
    render() {
        return (
            <div className="">
                <div className="after-header-sec">

                </div>

                <div className="main-banner">
                    <div className="main-banner-content">
                        <div className="container">
                            <div className="main-banner-content-inner">
                                <div className="help-dropdown text-center" onClick={this.toggleDropDown}>
                                    Help
                                    <span>
                                        <i className={this.state.dropdownOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}>
                                        </i>
                                    </span>
                                    <div className="help-dropdown-tb">
                                        <ul>
                                            <li><Link to="#">Help 1</Link></li>
                                            <li><Link to="#">Help 2</Link></li>
                                            <li><Link to="#">Help 3</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="search-banner">
                                    <input type="text" placeholder="Search Our Help Section" name=""/>

                                    <button className="search-btn"><i className="fa fa-search"></i></button>
                                    <span className="search-close"><i className="fa fa-times"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img alt="image30" src={require("../../assets/banner.jpg")} style={{width:"100%"}} />
                </div>
            </div>
        );
    }
}

export default Baner;
