import React from 'react'
import ReactDOM from 'react-dom'

const tick = () => 
{
  let element = (
    <div>
      <h1>Hello My Friends</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(() => {
  tick();
}, 1000);