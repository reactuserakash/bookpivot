import React, { Component } from 'react';
import "./EachAbout.css";

class EachAbout extends Component {
    render() {
        return (
            <li className="Topic-list-item">
                <p className="subTopicName">{this.props.subTopic}</p>
                <p className="topicName">{this.props.topic}</p>
                <p className="topicText">{this.props.text}</p>
            </li>
        );
    }
}

export default EachAbout;