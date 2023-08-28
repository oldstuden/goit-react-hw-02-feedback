import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posFeedback: 0,
  };
  handleClick = evt => {
    const { value } = evt.target;
    this.setState(pState => ({
      [value]: pState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(pState => ({
      total: pState.good + pState.neutral + pState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(pState => ({
      posFeedback: ((pState.good / pState.total) * 100).toFixed(2),
    }));
  };
  render() {
    return (
      <div>
        <h2>Feedback</h2>
        <div onClick={this.handleClick}>
          <button value="good">Good</button>
          <button value="neutral">Neutral</button>
          <button value="bad">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.posFeedback}%</p>
        </div>
      </div>
    );
  }
}
