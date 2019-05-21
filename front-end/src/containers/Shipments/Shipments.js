import React from 'react';
import Item from './Item/Item'
import {Container, Row, Col} from "reactstrap";
import { FormGroup, Label, Input } from 'reactstrap';
import './Shipments.scss'

export default class Shipments extends React.Component {

    constructor(props) {
        super(props);
        let data = [
            {
                id: 1,
                name: 'ballon',
                cell: '9'
            },
            {
                id: 2,
                name: 'afzal',
                cell: '7'
            },
            {
                id: 3,
                name: 'muneeb',
                cell: '6'
            },
            {
                id: 5,
                name: 'zubair',
                cell: '8'
            },
            {
                id: 9,
                name: 'ali',
                cell: '5'
            },
            {
                id: 8,
                name: 'husnain',
                cell: '1'
            }
        ];
        this.state = {
            data: data
        }
    }

    _orderShipments = (e) => {
        let newdata = this.state.data.sort(this._sort(e.target.value));
        this.setState({
            data: newdata
        })
    };

    _sort = (property) => {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    };


    render() {
        return (
            <Container className="shipments">
                <div className="filter-shipments">
                    <Row>
                        <Col  xl="3" lg="4" md="6" sm="6" xs="12">
                            <FormGroup>
                                <Label for="exampleSelect">Order Shipments By : </Label>
                                <Input type="select" name="select" id="exampleSelect" onChange={this._orderShipments}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>

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
