import React, { Component } from 'react';
import "./Bundle.css";

//import module
import {NavLink} from "react-router-dom";

//import icon
import BookIcon from "./../../../../assets/icons/book-bundle.svg";
//import component
import BundleEachBook from "./BundleEachBook/BundleEachBook";

class Bundle extends Component {
    render() {
        console.log(this.props.books)
        if(this.props.books !== undefined) {
        var bundleBooksList = (
            <ul className="bundle-book-list">
                {this.props.books.map((book,index)=>{
                    return (
                        <BundleEachBook
                            key={book._id}
                            img={book.coverURL}
                        />
                    )
                })}
            </ul>
        )}
        return (
            <div className="Bundle-section">
                <div className="Bundle-section-container">
                    <img src={BookIcon} alt="bookIcon" className="bundle-section-book-icon"/>
                    <p className="bundle-heading">Another Collection of Books</p>
                    <p className="bundle-subtopic">In this section get a full collection of books on different topics, just visit the full page and get all the books. Hope you will enjoy it. </p>
                    {bundleBooksList}
                    <NavLink to={"/collection"}><button className="find-more-bundle-btn">See full collection</button></NavLink>
                </div>
            </div>
        );
    }
}

export default Bundle;