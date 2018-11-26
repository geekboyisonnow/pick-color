import React, { Component } from 'react'

class Color extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: 180,
      saturation: 50,
      lightness: 50
    }
  }

  updateHueValue = event => {
    console.log(event.target.value)

    this.setState({
      hue: event.target.value
    })
  }

  updateSaturationValue = event => {
    console.log(event.target.value)

    this.setState({
      saturation: event.target.value
    })
  }

  updateLightnessValue = event => {
    console.log(event.target.value)

    this.setState({
      lightness: event.target.value
    })
  }

  render() {
    let color = `hsl(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%)`
    return (
      <div
        className="color-picker"
        style={{
          backgroundColor: color
        }}
      >
        <header>
          <h1>Pick A Color</h1>
        </header>
        <main>
          <section class="flex">
            <section class="slider">
              <input
                type="range"
                value={this.state.hue}
                onChange={this.updateHueValue}
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
              <label htmlFor="hue">Hue</label>
              <input
                type="range"
                value={this.state.saturation}
                onChange={this.updateSaturationValue}
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

              <label htmlFor="saturation">Saturation</label>
              <input
                type="range"
                value={this.state.lightness}
                onChange={this.updateLightnessValue}
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
              <label htmlFor="lightness">Lightness</label>
            </section>
          </section>
        </main>
      </div>
    )
  }
}
export default Color
