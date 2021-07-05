import React, { Component } from 'react';
import './process-container.css';

export default class ProcessContainer extends Component{
    render(){
        console.log(this.props.array);
        return (
            <div className="process-container">
                {this.props.array}
            </div>
        )
    }
}