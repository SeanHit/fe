import React from 'react'
export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date().toLocaleTimeString()}
  }

  componentWillMount(){
    console.log('componentWillMount start');
  }
  componentDidMount(){
    this.timeId = setInterval(()=>{
      this.setState({date: new Date().toLocaleTimeString()});
    },1000)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount start');
    window.clearInterval(this.timeId);
  }

  render(){
    return (
      <div>
        <span>现在的时间:</span>
        <h1>It's time is {this.state.date}</h1>
      </div>
    )
    
  }
    
    

}