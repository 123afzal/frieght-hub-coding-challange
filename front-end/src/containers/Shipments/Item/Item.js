import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import './Item.scss';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let { id, name, type, mode, origin, destination } = this.props.shipment;
        return (
            <Card className="shipment-card">
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{type} - {mode}</CardSubtitle>
                    <CardText>{origin} - {destination}</CardText>
                    <Button>View Details</Button>
                </CardBody>
            </Card>
        );
    }
}
