import React, { Component } from 'react';
import "./About.css";

//import components
import AboutHeader from "./AboutHeader/AboutHeader";
import EachAbout from "./EachAbout/EachAbout";


class About extends Component {
    state = {
        eachTopic : [
            {id:1,subTopic:"Top",topic:"Best of category",text:"Find different types of books, and you can find most downloaded books from most popular section of this site."},
            {id:2,subTopic:"Hot",topic:"New release",text:"Get two new books at today section. This is how users can find whats new in website and they will come everyday."},
            {id:3,subTopic:"We Find",topic:"Good for you",text:"Sometimes people want a full collection, so we provides a bundle section where they get a full collection."}
        ]
    }
    render() {
        var list = (
            <div className="Topic-list-row">
                <ul className="Topic-list">{this.state.eachTopic.map((topic,index)=>{
                        return (
                            <EachAbout
                                key={index}
                                subTopic={topic.subTopic}
                                topic={topic.topic}
                                text={topic.text}
                            />
                        )
                    })}
                </ul>
            </div>
        )
        return (
            <div className="About-section">
                <AboutHeader/>
                {list}
            </div>
        );
    }
}

export default About;