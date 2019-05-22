import React from 'react';
import Item from './Item/Item'
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import './Shipments.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShipments, updatePage,orderShipmentsBy } from '../../actions';

import Pagination from '../../components/Pagination';

class Shipments extends React.Component {

    _orderShipments = (e) => {
        let value = e.target.value;
        this.props.actions.orderShipmentsBy(value);
    };

    componentWillMount = () => {
        this.props.actions.getShipments();
    };

    updatePage = (page) => {
        let skip = page * 20;
        this.props.actions.updatePage(skip);
    };

    _renderOptions = (sortingFields) => {
        return sortingFields.map((field,index) => {
            return <option key={index}>{field}</option>
        })
    };


    render() {
        const { shipments, limit, count, skip } = this.props,
            totalPages = Math.ceil(count / limit),
            data = shipments.length > limit ? shipments.slice(skip, (skip + limit)) : shipments;
        let sortingFields = ["name","type","mode","status","userId"];
        return (
            <Container className="shipments">
                <div className="filter-shipments">
                    <Row>
                        <Col xl="4" lg="4" md="6" sm="6" xs="12">
                            <FormGroup>
                                <Label for="orderByShipments">Order Shipments By : </Label>
                                <Input type="select" name="select" onChange={this._orderShipments} defaultValue="default">
                                    <option disabled value="default">Default</option>
                                    {
                                        this._renderOptions(sortingFields)
                                    }
                                </Input>
                            </FormGroup>
                        </Col>

                        <Col xl="4" lg="4" md="6" sm="6" xs="12">
                            <FormGroup>
                                <Label for="searchShipments">Search : </Label>
                            </FormGroup>
                        </Col>

                        <Col xl="4" lg="4" md="6" sm="6" xs="12">
                            <Pagination
                                totalElements={count}
                                totalPages={totalPages}
                                getRequest={this.updatePage}
                            />
                        </Col>
                    </Row>
                </div>

                <Row>
                    {
                        data.length > 0 ? <Col xl="12" lg="12" md="6" sm="6" xs="12" className="shipment-table">
                                {
                                    <Item shipments={data}/>
                                }</Col>
                            : <div className="text-center">
                                <p>No Shipments to show</p>
                            </div>
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
};

/* Map Actions to Props */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getShipments,
            updatePage,
            orderShipmentsBy
        }, dispatch)
    };
};

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Shipments);