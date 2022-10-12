import React, { Component } from 'react'
import UpdatedComp from './Hoc'

 class ClickCount extends Component {
  
  render() {
    const {count,incrementCount} = this.props
    return (
        <>
        <span>Click Counter :  {count} </span><br />
      <button onClick={incrementCount}>ClickCount</button>
      </>
    )
  }
}

export default UpdatedComp (ClickCount)