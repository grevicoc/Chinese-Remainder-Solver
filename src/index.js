import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import InputContainer from './components/input-container.component';
import ProcessContainer from './components/process-container.component';
import ResultContainer from './components/result-container.component';

import countResult from './functions/math-operations';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        arrayOfEquation : null    //kumpulan eq yang akan diolah menjadi suatu hasil angka yang memenuhi semua eq tersebut dan proses perhitungannya
    }
  }

  handleUpdate = (num,remainders,moduluss)=>{
    const tempArray = [];
    for (var i=0;i<num;i++){
      const num1 = remainders[i];
      const num2 = moduluss[i];
      tempArray.push([parseInt(num1),parseInt(num2)]);
    }
    this.setState({arrayOfEquation : tempArray});
  }

  render(){
    let valueResult, processResult;
    try{
        let result = countResult(this.state.arrayOfEquation);
        
        //olah hasil nilai
        valueResult = result[0];

        //olah hasil proses
        processResult = result[1];
    } catch (err){
      console.log(err);
      valueResult = this.state.arrayOfEquation == null ? "" : "ERROR, Equations are not Relatively Prime!";   //kalo masih pertama kali gausah diprint error
    }
    return (
      <div className="main-container">
        <InputContainer handleUpdate={this.handleUpdate}/>
        <ProcessContainer array={processResult} />
        <ResultContainer val={valueResult}/>
      </div>
    )
  }
}

  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );