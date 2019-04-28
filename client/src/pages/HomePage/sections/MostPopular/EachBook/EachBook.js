import React, { Component } from 'react';
import "./EachBook.css";
//import icon
import DownloadIcon from "./../../../../../assets/icons/download-icon.svg";

class EachBook extends Component {
    render() {
        return (
            <li className="Each-book-item">
                <div className="each-book-item-card">
                    <div><img src={this.props.img} alt="book-cover-img" className="popular-book-cover"/></div>
                    <div>
                        <p className="popular-book-name">{this.props.bookName}</p>
                        <p className="popular-author-name">{this.props.authorName}</p>
                        <a href={this.props.downloadLink} className="download-href"><p className="dowload-icon-name"><img src={DownloadIcon} className="popular-book-download-icon" alt="download-icon"/>Download</p></a>
                    </div>  
                </div>
            </li>
        );
    }
}

export default EachBook;