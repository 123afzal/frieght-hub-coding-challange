import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let {id, name, cell} = this.props.shipment;
        console.log(this.props);
        return (
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        );
    }
}
