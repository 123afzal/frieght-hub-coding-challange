import React from 'react';
import { Table} from "reactstrap";
import './Item.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import {getSearchData} from "../../../actions";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderShipmentData(shipment,i){
        return (<tr key={i}>
            <td>{shipment.id}</td>
            <td>{shipment.name}</td>
            <td>{shipment.status}</td>
            <td className="cursor-pointer white-color" onClick={()=>this._showShipmentDetails(`details/${shipment.id}`, shipment.id)}>
                <i className="fa fa-edit orange-color"></i>
            </td>
        </tr>)
    }

    _showShipmentDetails = (route, id) => {
        this.props.actions.getSearchData(id);
        browserHistory.push(route)
    };

    render() {
        return (
            <Table responsive className="shipment">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Shipment Name</th>
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
            getSearchData
        }, dispatch)
    };
};

/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(Item);
