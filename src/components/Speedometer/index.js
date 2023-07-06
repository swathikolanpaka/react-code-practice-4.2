// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  increaseSpeed = () => {
    if (count < 200) {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed + 10,
      }))
    } else {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed + 0,
      }))
    }
  }
  applyBreak = () => {
    if (speed > 0) {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed - 10,
      }))
    } else {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed + 0,
      }))
    }
  }

  render() {
    let {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-props"
        />
        <h2 className="speed-change">Speed is {speed}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button className="btn1" onClick={this.increaseSpeed}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
