import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Color from './Color'

class App extends Component {
  render() {
    let colors = [
      {
        value: 0
      },
      {
        value: 0
      },
      {
        value: 0
      }
    ]
    return (
      <div className="App">
        <header>
          <h1>COLOR PICKER</h1>
        </header>
        <main>
          {colors.map((color, index) => (
            <Color
              key={index}
              value={this.state.value}
              onChange={this.updateColorValue}
            />
          ))}

          <button type="button">Click Me!</button>

          {/* <p>{this.state.}</p> */}
        </main>
      </div>
    )
  }
}

export default App
