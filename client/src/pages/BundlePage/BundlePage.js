import React, { Component } from 'react';
import "./BundlePage.css";

//modules
import { connect } from "react-redux";

//actions
import * as Actions from "./../../store/Actions";

//loader
import LoadingPage from "./../LoadingPage/LoadingPage";

//icon
import BundleIcon from "./../../assets/icons/book-bundle.svg";

//component
import BundlePageBook from "./BundlePageBook/BundlePageBook";

class BundlePage extends Component {
    componentDidMount(){
        this.props.fetchBundlepageData()
    }
    render() {
        var loading = true
        var bundlePageBookList = null;
        var data = this.props.bundlepagedata[0]
        if(data) {
            bundlePageBookList = data["bundlePageBookList"]
            var bundlepagebooklist = (
                <ul className="bundle-page-book-list">
                    {bundlePageBookList.map((book)=>{
                        return (
                            <BundlePageBook
                                key={book._id}
                                bookName={book.bookName}
                                authorName={book.authorName}
                                coverURL={book.coverURL}
                                downloadLink={book.downloadLink}
                            />
                        )
                    })}
                </ul>
            )
            loading = false
        }
        var bundlepagecontent = null
        if(loading) {
            bundlepagecontent = <LoadingPage/>
        } else {
            bundlepagecontent = (
                
                <div className="bundle-page">
                    <div className="bundle-page-container">
                        <img className="bundle-page-icon" src={BundleIcon} alt="bundle-icon"/>
                        <p className="bundle-page-heading">Get All Books of a Collection</p>
                        {bundlepagebooklist}
                    </div>
                </div>
            )
        }
        return (
            <div>
                {bundlepagecontent}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
      bundlepagedata : state.bundlepagedata 
    }
}
  
const mapDispatchtoProps = dispatch => {
    return {
       fetchBundlepageData: () => dispatch(Actions.fetchBundlepageData())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BundlePage);