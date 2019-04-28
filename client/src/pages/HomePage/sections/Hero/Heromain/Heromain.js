import React, { Component } from 'react';
import "./Heromain.css";

//import module
import {NavLink} from "react-router-dom";

class Heromain extends Component {
    state = {
        bookName: null
    }
    onInputChange = () =>{
        var bookName = document.getElementById("searchBookName").value
        this.setState({bookName:bookName})
    }
    render() {
        return (
            <div className="Heromain">
                <div className="Hero-Container">
                    <p className="text-1">welcome to bookpivot</p>
                    <p className="text-2">New Way To Explore Books</p>
                    <p className="text-3">Find Books, Read Books, Download Books</p>
                    <input onChange={this.onInputChange} id="searchBookName" className="search-box-1" placeholder="Search Your Book ..."/>
                    <br/>
                    <NavLink to={"/search/bookname="+this.state.bookName}><button className="search-button-1">Search</button></NavLink>
                </div>
            </div>
        );
    }
}

export default Heromain;