import React, { Component } from 'react';
import './App.css';

import {Route} from "react-router-dom";

import Homepage from "./pages/HomePage/Homepage";
import SearchResultsPage from "./pages/SearchReasultsPage/SearchResultsPage";
import BundlePage from "./pages/BundlePage/BundlePage";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Homepage}/>
        <Route path="/search/bookname=:bookname" exact component={SearchResultsPage}/>
        <Route path="/collection" exact component={BundlePage}/>
      </div>
    );
  }
}

export default App;