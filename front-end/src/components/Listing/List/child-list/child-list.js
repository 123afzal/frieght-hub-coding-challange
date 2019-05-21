import React, { Component } from 'react';
import {Collapse} from 'reactstrap';
import './child-list.css';

class ChildList extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        let {name, descritpion} = this.props
        return (
            <div className="child-list">
                <div className="card">
                    <div className="card-header" id="headingwhere-is-my-eMagazines">
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" onClick={this.toggle}>
                                <span className="max-250 float-left">
                                    {name}
                                </span>
                                <span className={this.state.collapse ? "accordion-up" : "accordion-down"}>
                                        <i className={this.state.collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="card-body">
                            {descritpion}
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default ChildList;
