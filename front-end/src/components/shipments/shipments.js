import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Item from './item/item'

export default class Shipments extends React.Component {

    constructor(props) {
        super(props);
        let data = [
            {
                id: 1,
                name: 'a',
                cell: '019'
            },
            {
                id: 2,
                name: 'a',
                cell: '019'
            },
            {
                id: 3,
                name: 'a',
                cell: '019'
            }
        ];
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>

        );
    }
}
