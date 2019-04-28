import React, { Component } from 'react';
import "./Homepage.css";

//modules
import { connect } from "react-redux";

//actions
import * as Actions from "./../../store/Actions";

//loader
import LoadingPage from "./../LoadingPage/LoadingPage";

//homepage sections
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import MostPopular from "./sections/MostPopular/MostPopular";
import Today from "./sections/Today/Today";
import Bundle from "./sections/Bundle/Bundle";
import Footer from "./sections/Footer/Footer";

class Homepage extends Component {
    componentDidMount(){
        this.props.fetchHomepageData()
    }
    render() {
        var mostPopularBooksList = null
        var todaySpecialBooksList = null
        var bundleBooksList = null
        var data = this.props.homepagedata[0]
        var loading = true
        if(data) {
            mostPopularBooksList = data["mostPopularBooksList"]
            todaySpecialBooksList = data["todaySpecialBooksList"]
            bundleBooksList = data["bundleBooksList"]
            loading = false
        }
        var homepageContent = null
        if(loading) {
            homepageContent = <LoadingPage/>
        } else {
            homepageContent = (
                <div className="Homepage">
                    <Hero/>
                    <About/>
                    <MostPopular books={mostPopularBooksList}/>
                    <Today books={todaySpecialBooksList}/>
                    <Bundle books={bundleBooksList}/>
                    <Footer/>
                </div>
            )
        }

        return (
           <div>
               {homepageContent}
           </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
      homepagedata : state.homepagedata 
    }
}
  
const mapDispatchtoProps = dispatch => {
    return {
       fetchHomepageData: () => dispatch(Actions.fetchHomepageData()),
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Homepage);

//export default Homepage;