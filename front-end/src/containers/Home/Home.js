import React, { Component } from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
import Shipments from '../../components/Shipments/Shipments'
import Assistance from '../../components/Assistance/Assistance'

class Home extends Component {



    render() {
        return (
            <div className="home">

                {/*header*/}
                <Navigation />

                {/*section for main shipments*/}
                <Shipments/>

                {/*section for assistance*/}
                <Assistance/>

                {/*footer of the web*/}
                <Footer/>

            </div>
        );
    }
}

export default Home;
