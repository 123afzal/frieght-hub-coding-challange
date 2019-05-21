import React, { Component } from 'react';
import './Home.css';
import Listing from "../../components/Listing/Listing";
import Footer from '../../components/Footer/Footer';
import Baner from  '../../components/Baner/Baner';
import Navigation from '../../components/Navigation/Navigation'
import Shipments from '../../components/shipments/shipments'

class Home extends Component {



    render() {
        return (
            <div className="home">

                {/*header*/}

                {/*section for navigations*/}
                {/*<Navigation />*/}


                {/*section for banner*/}
                {/*<Baner />*/}

                {/*section for main content*/}
                {/*Listing of lists main content in container*/}
                {/*<Listing/>*/}


                {/*footer of the web*/}
                {/*<Footer/>*/}

                <Shipments/>

            </div>
        );
    }
}

export default Home;
