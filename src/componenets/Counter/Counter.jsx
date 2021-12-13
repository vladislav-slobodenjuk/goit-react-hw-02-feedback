import { Component } from 'react';
import Statistics from 'componenets/Statistics/Statistics';
import Section from 'componenets/Section/Section';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = keyName => {
    this.setState(prevState => ({
      [keyName]: prevState[keyName] + 1,
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

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotal()}
            positive={this.countPositive()}
          />
        </Section>

        {/* <ul className="">
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
        </ul> */}
      </>
    );
  }
}

export default Counter;
