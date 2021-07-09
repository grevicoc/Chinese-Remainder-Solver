import React, { Component } from 'react';
import './result-container.css';

export default class ResultContainer extends Component{
    render(){
        return (
            <div className="result-container">
                <span className="result-text">Result: </span>
                <span className="val-text">{this.props.val}</span>
            </div>
        )
    }
}