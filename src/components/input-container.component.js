import React, { Component } from 'react';
import './input-container.css';

function EquationForm  (props)  {
    return(
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" id={`${props.num}`} placeholder={`Remainder ${props.num}`} onChange={props.remainderFunction} />
            </div>
            <div className="col">
                <input type="text" className="form-control" id={`${props.num}`} placeholder={`Modulus ${props.num}`} onChange={props.modulusFunction}/>
            </div>
        </div>
    )
}

export default class InputContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            numOfEquation : 2,
            remainders : [null,null,null,null],
            moduluss : [null,null,null,null]
        }
    }

    clickAdd = ()=>{
        if (this.state.numOfEquation===4){
            alert("Maximum four equation!")
        }else{
            this.setState({numOfEquation:this.state.numOfEquation+1});
        }
    }

    clickDelete = ()=>{
        if (this.state.numOfEquation===2){
            alert("Need two equation minimum!")
        }else{
            this.setState({numOfEquation:this.state.numOfEquation-1});
        }
    }

    handleChangeRemainder = (o)=>{
        let index = parseInt(o.target.id);

        let tempArray = this.state.remainders;
        tempArray[index-1] = o.target.value;
        
        this.setState({remainders:tempArray});
        // console.log(this.state.remainders);
    }

    handleChangeModulus = (o)=>{
        let index = parseInt(o.target.id);

        let tempArray = this.state.moduluss;
        tempArray[index-1] = o.target.value;
        
        this.setState({moduluss:tempArray});
        // console.log(this.state.moduluss);
    }

    render(){
        let equations = [];
        for (var i=0;i<this.state.numOfEquation;i++){
            equations.push(<EquationForm num={i+1} key={i+1} remainderFunction={this.handleChangeRemainder} modulusFunction={this.handleChangeModulus}/>)
        }
        return (
            <div className="input-container">
                <span>
                    Input your equation here:
                </span>
                <form>
                    {equations}
                    <div className="button-container">
                        <button type="button" onClick={this.clickAdd} className="btn btn-primary btn-sm add-button">+</button>
                        <button type="button" onClick={this.clickDelete} className="btn btn-primary btn-sm delete-button">-</button>
                    </div>
                    <button type="button" className="btn btn-primary submit-button" onClick={() => this.props.handleUpdate(this.state.numOfEquation,this.state.remainders,this.state.moduluss)}>Submit</button>
                </form>
                
            </div>
        )
    }
}