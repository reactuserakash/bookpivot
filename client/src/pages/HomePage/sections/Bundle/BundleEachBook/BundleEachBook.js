import React, { Component } from 'react';
import "./BundleEachBook.css";

class BundleEachBook extends Component {
    render() {
        return (
            <li className="bundle-book-list-item">
                <img src={this.props.img} alt="today-book-img" className="bundle-book-list-item-img"/>
            </li>
        );
    }
}

export default BundleEachBook;