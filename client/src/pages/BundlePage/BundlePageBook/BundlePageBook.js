import React, { Component } from 'react';
import "./BundlePageBook.css";
//icon
import DownloadIcon from "./../../../assets/icons/download-icon.svg";

class BundlePageBook extends Component {
    render() {
        return (
            <li className="bundle-page-book">
                <img className="bundle-page-book-img" src={this.props.coverURL} alt="book cover"/>
                <p className="bundle-page-book-name">{this.props.bookName}</p>
                <p className="bundle-page-author-name">{this.props.authorName}</p>
                <a href={this.props.downloadLink} className="download-href"><p className="bundle-page-book-download-text"><img src={DownloadIcon} className="bundle-page-book-download-icon" alt="download-icon"/>Download</p></a>                
            </li>
        );
    }
}

export default BundlePageBook;