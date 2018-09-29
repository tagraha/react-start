/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterRoute extends Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h3>
          Counter <small>non redux</small>
        </h3>
        <p>
          <em>
            This is a small demo component that contains state. It's useful for
            testing the hot reloading experience of an asyncComponent.
          </em>
        </p>
        <p>Current value: {counter}</p>
        <p>
          <button type="button" onClick={this.incrementCounter}>
            Increment
          </button>
        </p>
      </div>
    );
  }
}

CounterRoute.propTypes = {
  counter: PropTypes.number,
};

CounterRoute.defaultProps = {
  counter: 0,
};

export default CounterRoute;
