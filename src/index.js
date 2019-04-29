import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ""
    }
    this.inputChange = this.inputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  inputChange(event) {
    this.setState({ val: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const x = this.state.val[0]
    const y = this.state.val[1]
    horse(x, y)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="App">
        <p>Исходное положение</p>
        <input id="val1" value={this.state.val} onChange={this.inputChange} />

        <button>ОК</button>
      </form>
    )
  }
}

function horse(x, y) {
  x.toLowerCase()
  if (x === "a") x = 1
  else if (x === "b") x = 2
  else if (x === "c") x = 3
  else if (x === "d") x = 4
  else if (x === "e") x = 5
  else if (x === "f") x = 6
  else if (x === "g") x = 7
  else if (x === "h") x = 8
  else return
  y = Number(y)
  let arr = []
  arr.push([x - 1, y + 2])
  arr.push([x + 1, y + 2])
  arr.push([x + 2, y + 1])
  arr.push([x + 2, y - 1])
  arr.push([x + 1, y - 2])
  arr.push([x - 1, y - 2])
  arr.push([x - 2, y + 1])
  arr.push([x - 2, y - 1])
  arr = arr.filter(step => {
    return (step[0] > 0) & (step[0] < 9) & (step[1] > 0) & (step[1] < 9)
  })

  arr = arr.map(element => {
    let x = element[0]
    if (x === 1) x = "A"
    else if (x === 2) x = "B"
    else if (x === 3) x = "C"
    else if (x === 4) x = "D"
    else if (x === 5) x = "E"
    else if (x === 6) x = "F"
    else if (x === 7) x = "G"
    else if (x === 8) x = "H"
    return x + element[1]
  })
  alert(arr)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
