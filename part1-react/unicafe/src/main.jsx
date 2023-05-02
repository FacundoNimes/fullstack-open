import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average.toFixed(2)} />
          <Statistic text="Positive Percentage" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [counters, setCounters] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    const newCounterState = {
      ...counters,
      good: counters.good + 1,
    }
    setCounters(newCounterState);
  };

  const handleBad = () => {
    const newCounterState = {
      ...counters,
      bad: counters.bad + 1,
    }
    setCounters(newCounterState);
  };

  const handleNeutral = () => {
    const newCounterState = {
      ...counters,
      neutral: counters.neutral + 1,
    }
    setCounters(newCounterState);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Statistics good={counters.good} neutral={counters.neutral} bad={counters.bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
