import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { StatisticEmpty } from './statisticEmpty';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './Wrapper.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = value => {
    this.setState(pState => ({
      [value]: pState[value] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    if (result === 0) {
      return 0;
    }
    return ((good / result) * 100).toFixed(2);
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              posFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <StatisticEmpty message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Wrapper>
    );
  }
}
