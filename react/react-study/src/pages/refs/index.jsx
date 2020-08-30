import React, { createRef } from 'react'
const ref= createRef();
const FancyButton = (props,ref) => {
  return <Input className="FancyButton" ref={ref} >
        </Input>
  }
const Input = ()=>(<button className="FancyButton" ref={ref} >
  ssss
</button>)

export default class Ref extends React.Component{
  componentDidMount(){
    console.log( ref.current);
  }
  render(){
    return <FancyButton ref={ref}>eee</FancyButton>
  }
}