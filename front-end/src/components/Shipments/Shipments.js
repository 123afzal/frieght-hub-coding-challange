import React from 'react';
import Item from './Item/Item'
import { Container, Row, Col } from "reactstrap";
import './Shipments.scss'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShipments, updatePage } from '../../actions';

import Pagination from '../Pagination';

class Shipments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skip: 0
        };
    }

    componentWillMount = () => {
        this.props.actions.getShipments();
    }

    updatePage = (page) => {
        let skip = page * 20;
        this.props.actions.updatePage(skip);

    }

    render() {
        const { shipments, limit, count, skip } = this.props,
            totalPages = Math.ceil(count / limit),
            data = shipments.length > limit ? shipments.slice(skip, (skip + limit)) : shipments;

        return (
            <Container className="shipments">
                <Row>
                    <Pagination
                        totalElements={count}
                        totalPages={totalPages}
                        getRequest={this.updatePage}
                    />
                </Row>
                <Row>
                    {
                        data.length > 0 ?
                            data.map((shipment, index) => {
                                return (<Col xl="3" lg="4" md="6" sm="6" xs="12" key={index}>
                                    {
                                        <Item shipment={shipment} key={index} />
                                    }
                                </Col>);
                            })
                            : null
                    }
                </Row>
            </Container>

        );
    }
}


/* Map state to props */
const mapStateToProps = (state) => {
    let shipments = [
        ...state.shipments.data,
    ];
    return {
        shipments,
        count: shipments.length,
        skip: state.shipments.skip,
        limit: state.shipments.limit,
    };
}

/* Map Actions to Props */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getShipments,
            updatePage
        }, dispatch)
    };
}

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Shipments);