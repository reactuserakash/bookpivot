import React, { Component } from 'react';
import "./EachSearchResult.css";
//icon
import DownloadIcon from "./../../../assets/icons/download-icon.svg";

class EachSearchResut extends Component {
    render() {
        return (
            <li className="each-search-result">
                <div className="each-search-result-container">
                    <div>
                        <p className="search-result-book-name">{this.props.bookName}</p>
                        <p className="search-result-author-name">{this.props.authorName}</p>
                        <p className="search-result-book-rating">Rating : {this.props.rating}</p>
                        <a href={this.props.downloadLink} className="download-href-search"><p className="search-result-book-downloadlink"><img src={DownloadIcon} className="search-result-book-download-icon" alt="download-icon"/>Download</p></a>
                    </div>
                    <div>
                        <img className="search-result-book-image" src={this.props.bookImg} alt="book-cover"/>
                    </div>
                    
                </div>
                <hr className="hr-line"/>
            </li>
        );
    }
}

export default EachSearchResut;