import React from 'react'
export default class Event extends React.Component{

  handleClick(a,b,e){
    e.preventDefault();
    console.log(a,e);
  }

  render(){
    return (
      <div>
        <button onClick ={this.handleClick.bind(this,1,2)}>按钮</button>
      </div>
    )
    
  }
  
}