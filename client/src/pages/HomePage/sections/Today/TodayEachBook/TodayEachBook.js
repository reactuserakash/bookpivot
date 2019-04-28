import React, { Component } from 'react';
import "./TodayEachBook.css";
//import icon
import DownloadIcon from "./../../../../../assets/icons/download-icon.svg";

class TodayEachBook extends Component {
    render() {
        return (
            <li className="today-book-list-item">
                <img src={this.props.img} alt="today-book-img" className="today-book-list-item-img"/>
                <p className="today-book-name">{this.props.bookName}</p>
                <p className="today-author-name">{this.props.authorName}</p>
                <a href={this.props.downloadLink} className="download-href"><p className="today-book-download-icon"><img src={DownloadIcon} className="today-book-download-icon" alt="download-icon"/>Download</p></a>
            </li>
        );
    }
}

export default TodayEachBook;