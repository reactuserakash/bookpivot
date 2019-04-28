import React, { Component } from 'react';
import "./Hero.css";

//import component
import Sectionbar from "./Sectionbar/Sectionbar";
import Heromain from "./Heromain/Heromain";

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <Sectionbar/>
                <Heromain/>
            </div>
        );
    }
}

export default Hero;