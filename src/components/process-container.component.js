import React, { Component } from 'react';
import './process-container.css';

//fungsi yang membantu mengconvert dari raw data ke jsx
function Converter(props){
    if (props.step===0){
        let equations = [];
        for (var i=0; i<props.eq.length; i++){
            equations.push(
                <div key={i}>
                    <span>X &equiv; {props.eq[i][0]} (mod {props.eq[i][1]})</span>
                    <br/>
                </div>
            )
        }
        return (
            <div className="card">
                <div className="card-header">Step {props.step}</div>
                <div className="card-body">
                    {equations}
                </div>
            </div>
        )
    }

    //variabel untuk membantu menentukan k-berapa suatu koefisien di salah satu persamaan
    let minusOnOdd = Math.floor(props.step/2);
    let minusOnEven = props.step/2 - 1;

    if (props.step%2!==0){
        let first = (
            <div>
                <span>X = {props.eq[0]} + {props.eq[1]}k{props.step}</span>
            </div>
        )

        let notFirst = (
            <div>
                <span>Masukkan step {props.step-1} ke step {props.step-2}</span>
                <br/>
                <span>X = {props.eq[0]} + {props.eq[1]}k{props.step-minusOnOdd}</span>
            </div>
        )
        return (
            <div className="card">
                <div className="card-header">Step {props.step}</div>
                <div className="card-body">
                    {props.step===1 ? first : notFirst}
                </div>
            </div>
        )
    }else{
        let idx, shown;
        try {
            idx = props.step;
            shown = (
                <div>
                    <span>Masukkan step {props.step-1} ke step {0}</span>
                    <br/>
                    <span>{props.eqs[idx-1][0]} + {props.eqs[idx-1][1]}k{props.step/2} &equiv; {props.eqs[0][idx/2][0]} (mod {props.eqs[0][idx/2][1]}) </span>
                    <br/>
                    <span>k{props.step/2} = {props.eq[0]} + {props.eq[1]}k{props.step-minusOnEven}</span>
                </div>
            )
        } catch (error) {
            console.log(error);
        }
        return (
            <div className="card">
                <div className="card-header">Step {props.step}</div>
                <div className="card-body">
                    {shown}
                </div>
            </div>
        )
    }
}

export default class ProcessContainer extends Component{
    render(){
        let displayed = [];
        try{
            for (var i=0;i<this.props.array.length;i++){
                displayed.push(<Converter step={i} eq={this.props.array[i]} eqs={this.props.array} key={i} />)
            }
        } catch (err){
            console.log(err)
        }

        return (
            <div className="process-container">
                {displayed}
            </div>
        )
    }
}