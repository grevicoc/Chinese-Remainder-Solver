import React, { Component } from 'react';

function StepVisualizer(props) {    
    let displayed = [];
    try {
        for (var i=0; i<props.array.length;i++){
            displayed.push(<TestFunc step={i}/>);
        }
    } catch (error) {
        console.log(error);
    }
    return (
        <div className="process-sub-container">
            {displayed}
        </div>
    )

}

export default StepVisualizer;