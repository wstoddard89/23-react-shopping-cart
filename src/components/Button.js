import React from 'react'
import { greet } from '../actions/example'

export default props => {
  function sendGreeting() {
    greet("Hello World!")
  }

  return (
    <button onClick={sendGreeting}>Click Me</button>
  )
}