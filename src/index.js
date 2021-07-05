import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import InputContainer from './components/input-container.component';
import ProcessContainer from './components/process-container.component';
import ResultContainer from './components/result-container.component';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        arrayOfEquation : []
    }
  }

  handleUpdate = (num,remainders,moduluss)=>{
    let tempArray=[];
    for (var i=0;i<num;i++){
      tempArray.push([remainders[i],moduluss[i]]);
    }
    this.setState({arrayOfEquation:tempArray});
  }

  render(){
    return (
      <div className="main-container">
        <InputContainer handleUpdate={this.handleUpdate}/>
        <ProcessContainer array={this.state.arrayOfEquation}/>
        <ResultContainer cn="result-container"/>
      </div>
    )
  }
}

  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );