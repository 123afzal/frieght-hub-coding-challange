import React, {Component} from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
// import Shipments from '../../components/Shipments/Shipments'
import Assistance from '../../components/Assistance/Assistance'

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from  'react-redux';

class Home extends Component {


    render() {
        return (
            <div className="home">

                {/*header*/}
                <Navigation/>

                {/*section for main shipments*/}
                {
                    this.props.children
                }

                {/*section for assistance*/}
                <Assistance/>

                {/*footer of the web*/}
                <Footer/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

Home.propTypes = {
    children: PropTypes.object,
    actions: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
