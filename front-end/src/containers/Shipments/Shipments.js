import React from 'react';
import Item from './Item/Item'
import { Container, Row, Col } from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import './Shipments.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShipments, updatePage } from '../../actions';

import Pagination from '../../components/Pagination';

class Shipments extends React.Component {

    _orderShipments = (e) => {
        let newdata = this.state.data.sort(this._sort(e.target.value));
        this.setState({
            data: newdata
        })
    };

    _sort = (property) => {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
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
                        <Col xl="3" lg="4" md="6" sm="6" xs="12">
                            <FormGroup>
                                <Label for="exampleSelect">Order Shipments By : </Label>
                                <Input type="select" name="select" onChange={this._orderShipments} defaultValue="default">
                                    <option disabled value="default">Default</option>
                                    {
                                        this._renderOptions(sortingFields)
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
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
};

/* Map Actions to Props */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getShipments,
            updatePage
        }, dispatch)
    };
};

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Shipments);