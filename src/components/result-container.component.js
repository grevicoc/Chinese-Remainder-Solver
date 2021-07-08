import React, { Component } from 'react';
import './result-container.css';

export default class ResultContainer extends Component{
    render(){
        return (
            <div className="result-container">
                {this.props.val}
            </div>
        )
    }
}