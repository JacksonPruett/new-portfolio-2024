import React, { Component } from 'react'
import './HeroImg2styles.css'

// This defines a new React component named HeroImg2.
// It extends the Component class, which is a base class for React components that allows them to have state and lifecycle methods.
class HeroImg2 extends Component {
    // React components must have a render method, which returns the JSX that defines the structure of the component.
    render(){
  return (
  <div className='hero-img'>
    <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
    </div>
  </div>
  )
}}

export default HeroImg2;