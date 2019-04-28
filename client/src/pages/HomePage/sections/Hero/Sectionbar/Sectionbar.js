import React, { Component } from 'react';
import "./Sectionbar.css";

//import module
import jump from "jump.js";

class Sectionbar extends Component { 
    jumpToSection(sectionName) {
        var section = document.querySelector(sectionName)
        jump(section)
    }
    render() {
        return (
            <div className="Sectionbar">
                <div></div>
                <div>
                    <ul className="Section-list">
                        <li>Home</li>
                        <li onClick={()=>this.jumpToSection(".About-section")}>About</li>
                        <li onClick={()=>this.jumpToSection(".Most-popular-section")}>Most Popular</li>
                        <li onClick={()=>this.jumpToSection(".Today-section")}>Today</li>
                        <li onClick={()=>this.jumpToSection(".Bundle-section")}>Bundle</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sectionbar;