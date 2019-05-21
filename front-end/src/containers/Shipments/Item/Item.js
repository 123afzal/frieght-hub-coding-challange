import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import './Item.scss';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let {id, name, cell} = this.props.shipment;
        console.log(this.props);
        return (
            <Card className="shipment-card">
                <CardBody>
                    <CardTitle>{id}</CardTitle>
                    <CardSubtitle>{name}</CardSubtitle>
                    <CardText>{cell}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        );
    }
}
