import React from 'react';
import {Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Shipment-Details.css'
import {getShipments} from "../../actions";

class ShipmentDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleNameChange = (shipment) => {

    };

    _handleSaveData = (shipment) => {
        console.log(shipment);
    };

    render() {
        let shipment = this.props.shipments[0];
        return (
            <Container className="shipment-details">
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <Form>
                            <FormGroup row>
                                <Label for="shipmentName" sm={2}>Shipment Name : </Label>
                                <Col sm={10}>
                                    <Input type="text" placeholder="Shipment name" value={shipment.name} onChange={() => this._handleNameChange(shipment)}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="shipmentName" sm={2}>Shipment Mode : </Label>
                                <Col sm={10}>
                                    {shipment.mode.toUpperCase()}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Type" sm={2}>Shipment Type : </Label>
                                <Col sm={10}>
                                    {shipment.type}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Origin" sm={2}>Shipment Origin : </Label>
                                <Col sm={10}>
                                    {shipment.origin}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Destination" sm={2}>Shipment Destination : </Label>
                                <Col sm={10}>
                                    {shipment.destination}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Destination" sm={2}>Shipment Status : </Label>
                                <Col sm={10}>
                                    {shipment.status}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Destination" sm={2}>Total</Label>
                                <Col sm={10}>
                                    {shipment.total}
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col>
                        <Button className="orange-color cursor-pointer margin-t-30" onClick={() => this._handleSaveData(shipment)}>Save</Button>
                    </Col>
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
    };
};

/* Map Actions to Props */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getShipments
        }, dispatch)
    };
};

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(ShipmentDetails);