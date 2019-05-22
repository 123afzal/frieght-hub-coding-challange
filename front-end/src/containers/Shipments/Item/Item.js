import React from 'react';
import { Table} from "reactstrap";
import './Item.css';
import {browserHistory} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderShipmentData(shipment,i){
        return (<tr key={i}>
            <td>{shipment.id}</td>
            <td>{shipment.name}</td>
            <td>{shipment.type}</td>
            <td>{shipment.origin}</td>
            <td>{shipment.destination}</td>
            <td>{shipment.status}</td>
            <td className="cursor-pointer white-color" onClick={()=>{browserHistory.push(`details/${shipment.id}`)}}>
                <i className="fa fa-edit orange-color"></i>
            </td>
        </tr>)
    }

    render() {
        return (
            <Table responsive className="shipment">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Shipment Name</th>
                    <th>Type</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.shipments.map((shipment, i) => {
                        return this._renderShipmentData(shipment, i);
                    })
                }
                </tbody>
            </Table>
        );
    }
}
