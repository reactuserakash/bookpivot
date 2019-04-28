import React, { Component } from 'react';
import "./AboutHeader.css";

//import icon
import Cube from "./../../../../../assets/icons/single-cube.svg";

class AboutHeader extends Component {
    render() {
        return (
            <div className="About-header">
                <img src={Cube} alt="cube" className="cube-logo"/>
                <p className="about-1">Explore something New</p>
                <p className="about-2">BookPivot is an online service to download pdf for free.<br/>
                You can get unlimited books without any issues of adds<br/> or any limited downloads per day. 
                </p>
            </div>
        );
    }
}

export default AboutHeader;