import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import './Item.scss';
import { browserHistory } from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let {id, name, type, mode, origin, destination} = this.props.shipment;
        return (
            <Card className="shipment-card">
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{type}</CardSubtitle>
                    <CardText>{origin} - {destination}</CardText>
                    <Button onClick={()=>{browserHistory.push(`details/${id}`)}}>View Details</Button>
                </CardBody>
            </Card>
        );
    }
}
