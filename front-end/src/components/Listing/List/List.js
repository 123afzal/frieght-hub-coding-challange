import React, { Component } from 'react';
import {Collapse} from 'reactstrap';
import ChildList from './child-list/child-list'
import './List.css';

class List extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        let {title, childs} = this.props;
        return (
            <div className="list">
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" onClick={this.toggle}>
                                <span className="max-250 float-left">
                                    {title}
                                </span>
                                <span className={this.state.collapse ? "accordion-up" : "accordion-down"}>
                                        <i className={this.state.collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
                                </span>
                            </button>
                        </h5>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                            <div className="card-body">
                                <div className="accordion inner-accordion">
                                    {
                                        childs.map((child, i) => (<ChildList {...child} key={i}/>))
                                    }
                                </div>
                            </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default List;
