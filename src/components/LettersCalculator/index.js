import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: 0}

  change = event => {
    this.setState({word: event.target.value.length})
  }

  render() {
    const {word} = this.state
    return (
      <div className="bg">
        <div>
          <h1>
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label htmlFor="username" className="label">
            Enter the word
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.change}
          />
          <p>No of letters: {word}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="img"
          className="img-size"
        />
      </div>
    )
  }
}

export default LettersCalculator
