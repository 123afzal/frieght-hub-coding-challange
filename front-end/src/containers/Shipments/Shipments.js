import React from 'react';
import Item from './Item/Item'
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import './Shipments.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShipments, updatePage,orderShipmentsBy, getSearchData } from '../../actions';

import Pagination from '../../components/Pagination';

class Shipments extends React.Component {

    constructor(props){
        super(props);
        this.state={searchId: ''};
    }

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

    _handleSearchChange =(e) => {
        console.log(this.state.searchId);
        this.setState({searchId: e.target.value})
    };

    _handleSearchData = () => {
        this.props.actions.getSearchData(this.state.searchId);
    };

    _handleResetData = () => {
      this.setState({
          searchId: ''
      });
        this.props.actions.getShipments();
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
                                <div className="dis-flex">
                                    <Input type="text"
                                           value={this.state.searchId}
                                           placeholder="Search by shipment id"
                                           onChange={this._handleSearchChange}/>
                                    <Button className="orange-color cursor-pointer margin-l-20" onClick={this._handleSearchData}>Search</Button>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col xl="4" lg="4" md="6" sm="6" xs="12">
                            <Button className="orange-color cursor-pointer margin-t-30" onClick={this._handleResetData}>Reset</Button>
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
            orderShipmentsBy,
            getSearchData
        }, dispatch)
    };
};

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Shipments);