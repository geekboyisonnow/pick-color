import React, { Component } from 'react'

class Color extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorValue: props.colorValue
    }
  }

  updateColorValue = event => {
    console.log(event.target.value)

    this.setState({
      colorValue: event.target.value()
    })
  }

  render() {
    return (
      <section>
        <button type="button" onChange={this.state.colorValue} />

        <input
          type="range"
          value={this.state.colorValue}
          onChange={this.updateColorValue}
          min="0"
          max="360"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="0" />
          <option value="10" />
          <option value="20" />
          <option value="30" />
          <option value="40" />
          <option value="50" />
          <option value="60" />
          <option value="70" />
          <option value="80" />
          <option value="90" />
          <option value="100" />
          <option value="110" />
          <option value="120" />
          <option value="130" />
          <option value="140" />
          <option value="150" />
          <option value="160" />
          <option value="170" />
          <option value="180" />
          <option value="190" />
          <option value="200" />
          <option value="210" />
          <option value="220" />
          <option value="230" />
          <option value="240" />
          <option value="250" />
          <option value="260" />
          <option value="270" />
          <option value="280" />
          <option value="290" />
          <option value="300" />
          <option value="310" />
          <option value="320" />
          <option value="330" />
          <option value="340" />
          <option value="350" />
          <option value="360" />
        </datalist>

        <label for="hue">Hue</label>

        <input
          type="range"
          value={this.state.colorValue}
          onChange={this.updateColorValue}
          min="0"
          max="100"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="0" />
          <option value="10" />
          <option value="20" />
          <option value="30" />
          <option value="40" />
          <option value="50" />
          <option value="60" />
          <option value="70" />
          <option value="80" />
          <option value="90" />
          <option value="100" />
        </datalist>

        <label for="saturation">Saturation</label>

        <input
          type="range"
          value={this.state.colorValue}
          onChange={this.updateColorValue}
          min="0"
          max="100"
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="0" />
          <option value="10" />
          <option value="20" />
          <option value="30" />
          <option value="40" />
          <option value="50" />
          <option value="60" />
          <option value="70" />
          <option value="80" />
          <option value="90" />
          <option value="100" />
        </datalist>

        <label for="lightness">Lightness</label>
      </section>
    )
  }
}
export default Color
