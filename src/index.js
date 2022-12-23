import React from 'react'
import ReactDOM from 'react-dom'

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Part1 = () => {
  return(
    < div >
    <p>{part1} {exercises1}</p>
  </div >
  )
}

const Part2 = () => {
  return(
    < div >
    <p>{part2} {exercises2}</p>
  </div >
  )
}

const Part3 = () => {
  return(
    < div >
    <p>{part3} {exercises3}</p>
  </div >
  )
}


const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}

const Content = () => {
  return(
    < div >
      <Part1 />
      <Part2 />
      <Part3 />
    </div >
  )
}

const Total = () => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))