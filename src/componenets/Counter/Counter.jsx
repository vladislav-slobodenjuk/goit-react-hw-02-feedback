import { Component } from 'react';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = statName => {
    this.setState(prevState => ({
      [statName]: prevState[statName] + 1,
    }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositive = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="Counter__controls">
          {/* <Button qwe={this.handleIncrease} /> */}

          <button
            className="good"
            type="button"
            onClick={() => this.handleIncrease('good')}
          >
            Good
          </button>
          <button
            className="neutral"
            type="button"
            onClick={() => this.handleIncrease('neutral')}
          >
            Neutral
          </button>
          <button
            className="bad"
            type="button"
            onClick={() => this.handleIncrease('bad')}
          >
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <ul className="">
          <li className="item good" key="Good">
            Good: {this.state.good}
          </li>
          <li className="item neutral" key="Neutral">
            Neutral: {this.state.neutral}
          </li>
          <li className="item bad" key="Bad">
            Bad: {this.state.bad}
          </li>
          <li className="item total" key="Total">
            Total: {this.countTotal()}
          </li>
          <li className="item positive" key="Positive">
            Positive feedback: {this.countPositive()}%
          </li>
        </ul>
      </>
    );
  }
}

export default Counter;
