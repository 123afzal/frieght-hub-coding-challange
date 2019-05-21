import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let {id, name, cell} = this.props;
        return (
            <tr>
                <th scope="row">1</th>
                <td>{id}</td>
                <td>{name}</td>
                <td>{cell}</td>
            </tr>
        );
    }
}
