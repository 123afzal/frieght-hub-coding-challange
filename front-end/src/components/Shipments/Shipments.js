import React from 'react';
import Item from './Item/Item'
import {Container, Row, Col} from "reactstrap";

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
            <Container>
                <Row>
                    {
                        this.state.data.length > 0 ?
                            this.state.data.map((shipment, index) => {
                                return (<Col xl="3" lg="4" md="6" sm="6" xs="12" key={index}>
                                    {
                                        <Item shipment={shipment} key={index}/>
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
