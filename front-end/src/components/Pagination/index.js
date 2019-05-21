import React from 'react';
import './style.css';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,
      currentPage: 0
    };
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.getRange = this.getRange.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  getPrev() {
    let { currentPage } = this.state;
    if (currentPage > 0) {
      this.props.getRequest(currentPage - 1);
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  }

  getNext() {
    let { currentPage } = this.state;
    if (this.props.totalPages > currentPage + 1) {
      this.props.getRequest(currentPage + 1);
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  }

  getRange(limit, start, end) {
    let ret = [];
    if (limit < end) {
      end = limit;
      if (limit < this.state.limit) {
        start = 0;
      } else {
        start = limit - this.state.limit;
      }
    }
    for (let i = start; i < end; i++) {
      ret.push(
        <li key={i}>
          <a key={i} style={{ cursor: "pointer" }} className={(i === this.state.currentPage ? "active" : "")}
            onClick={() => {
              this.getIndex(i);
            }}>
            {i + 1}
          </a>
        </li>
      );
    }
    return ret;
  }

  getIndex(i) {
    this.props.getRequest(i);
    this.setState({
      currentPage: i
    });
  }


  render() {
    return (
      <div className="pagination">
        <ul style={{ display: "inline-flex", listStyle: "none" }}>
          <li key="a">
            <a style={{ cursor: "pointer" }}
              onClick={this.getPrev}
              type="submit" className="btn btn-primary"
            >
              Previous
      </a>

          </li>
          {this.getRange(Math.ceil(this.props.totalElements / this.state.limit), this.state.currentPage, this.state.currentPage + this.state.limit)}
          <li key="z">
            <a style={{ cursor: "pointer" }}
              onClick={this.getNext}
              type="submit" className="btn btn-primary"
            >
              Next
      </a>
          </li>
        </ul>
      </div>
    );
  }
}