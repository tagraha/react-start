/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { invokeIncrement } from './../../../redux/modules/counter';

class CounterRoute extends Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <p>
          <em>
            This is a small demo component that contains state.  It's useful for
            testing the hot reloading experience of an asyncComponent.
          </em>
        </p>
        <p>
          Current value: {this.state.counter}
        </p>
        <p>
          Redux counter value: {this.props.counter}
        </p>
        <p>
          <button onClick={this.incrementCounter} style={{ marginRight: 6 }}>Increment</button>
          <button onClick={this.props.incrementAction}>Redux Increment</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counterValue,
});

const mapActionsToProps = {
  incrementAction: invokeIncrement,
};

// export default CounterRoute;
export default connect(mapStateToProps, mapActionsToProps)(CounterRoute);
