import { Component } from 'react';
import Statistics from 'componenets/Statistics/Statistics';
import Section from 'componenets/Section/Section';
import FeedbackOptions from 'componenets/FeedbackOptions/FeedbackOptions';
import Notification from 'componenets/Notification/Notification';

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
    const optionsArray = Object.keys(this.state);
    const total = this.countTotal();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsArray}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>

        <Section title="Statistics">
          {total && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positive={this.countPositive()}
            />
          )}
          {!total && <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}

export default Counter;
