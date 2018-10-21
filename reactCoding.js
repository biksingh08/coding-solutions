//made using online React compiler
//https://stackblitz.com/edit/react-ksy1rv
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 10000
    }

  }

  prop(time){
    if(time >= 0){
      var minutes = Math.floor(time / 60);
      var hours = Math.floor(time / 3600);
      var seconds = time - minutes * 60;
      return [hours,minutes,seconds]
    }
    else {
      var minutes = 0;
      var hours = 0;
      var seconds = 0;
      return [hours,minutes,seconds]
    }

  }

  render(){
    const totalTime = this.prop(this.state.count)
      return(
        <div>
          <h1> Hours: {totalTime[0]}</h1>
          <h1> Minutes: {totalTime[1]}</h1>
          <h1> Seconds: {totalTime[2]}</h1>
        </div>
      )

  }

  componentDidMount(){
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)

  }

  componentWillUnmount(){
    clearInterval(this.myInterval)
  }

}

render(<Timer />, document.getElementById('root'));
