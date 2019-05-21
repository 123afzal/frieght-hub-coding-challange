import React, { Component } from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'

class Home extends Component {



    render() {
        return (
            <div className="home">

                {/*header*/}
                <Navigation />

                {/*section for main content*/}
                <div>
                    <div className="clearfix"></div>

                    <div className="listing">
                        <div className="container">
                            <div className="need-help">
                                <i className="fa fa-question-circle"></i>
                                Need help? Please Contact Us, we are always happy to assist!
                            </div>
                        </div>
                    </div>
                </div>

                {/*footer of the web*/}
                <Footer/>

            </div>
        );
    }
}

export default Home;
