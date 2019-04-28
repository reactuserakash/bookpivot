import React, { Component } from 'react';
import "./PoadingPage.css";

class LoadingPage extends Component {
    render() {
        return (
            <div className="Loading-page">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}

export default LoadingPage;