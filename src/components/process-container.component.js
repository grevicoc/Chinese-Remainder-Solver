import React, { Component } from 'react';
import './process-container.css';
import countResult from '../functions/math-operations';

export default class ProcessContainer extends Component{
    render(){
        try {
            console.log(this.props.array)
            console.log(countResult(this.props.array));
        } catch (err) {
            console.log(err)
        }
        return (
            <div className="process-container">
                
            </div>
        )
    }
}