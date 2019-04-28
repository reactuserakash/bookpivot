import React, { Component } from 'react';
import "./Today.css";

//import component
import TodayEachBook from "./TodayEachBook/TodayEachBook";
//import icon
import bookIcon from "./../../../../assets/icons/book-today.svg";

class Today extends Component {
    render() {
        console.log(this.props.books)
        if(this.props.books !== undefined) {
        var todayBooksList = (
            <ul className="today-book-list">
                {this.props.books.map((book)=>{
                    return (
                        <TodayEachBook
                            key={book._id}
                            bookName={book.bookName}
                            authorName={book.authorName}
                            img={book.coverURL}
                            downloadLink={book.downloadLink}
                        />
                    )
                })}
            </ul>
        )}
        return (
            <div className="Today-section">
                <div className="Today-section-container">
                    <img src={bookIcon} alt="bookIcon" className="today-section-book-icon"/>
                    <p className="todays-special-heading">Today's Special</p>
                    <p className="todays-special-subtopic">Want to know which new books you will get in this website everyday, then here it is. No more search, just download the new books from this section. </p>
                    {todayBooksList}
                </div>
            </div>
        );
    }
}

export default Today;