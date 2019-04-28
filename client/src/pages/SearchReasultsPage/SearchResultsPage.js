import React, { Component } from 'react';
import "./SearchResultsPage.css";

//modules
import { connect } from "react-redux";

//actions
import * as Actions from "./../../store/Actions";

//loader
import LoadingPage from "./../LoadingPage/LoadingPage";

//component
import EachSearchResult from "./EachSearchResult/EachSearchResult";

class SearchResultsPage extends Component {
    componentDidMount() {
        this.props.fetchSearchResultData(this.props.match.params.bookname)
    }

    render() {
        var data = this.props.searchresultdata
        var loading = true;
        if(data) {
            var searchResultsList = (
                <ul className="search-results-list">
                    {this.props.searchresultdata.map((book)=>{
                        return (
                            <EachSearchResult
                                key={book._id}
                                bookName={book.bookName}
                                authorName={book.authorName}
                                rating={book.rating}
                                downloadLink={book.downloadLink}
                                bookImg={book.coverURL}/>)
                    })}
                </ul>
            )
            loading = false
        }
        
        var searchpagecontent = null 
        if(loading) {
            searchpagecontent = <LoadingPage/>
        } else {
            if (this.props.searchresultdata.length === 0) {
                searchpagecontent = (
                    <div className="Search-results-page">
                        <h3 className="showing-top-results">Nothing is found</h3>
                    </div>
                )
            } else {
                searchpagecontent = (
                    <div className="Search-results-page">
                        <p className="showing-top-results">Showing Top Results of BookPivot</p>
                        {searchResultsList}
                    </div>
                )
            }
        } 

        return (
            <div>
                {searchpagecontent}
            </div>
        );
    }
}


const mapStatetoProps = state => {
    return {
        searchresultdata : state.searchresultdata 
    }
}
  
const mapDispatchtoProps = dispatch => {
    return {
       fetchSearchResultData: (searchstring) => dispatch(Actions.fetchSearchResultData(searchstring)),
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(SearchResultsPage);