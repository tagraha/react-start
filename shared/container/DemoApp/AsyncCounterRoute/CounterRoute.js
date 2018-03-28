/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';

import { invokeIncrement, loadPost } from './../../../redux/modules/counter';

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
    const { post } = this.props;
    return (
      <div>
        <h3>Counter</h3>
        <p>
          <em>
            This is a small demo component that contains state. It's useful for testing the hot
            reloading experience of an asyncComponent.
          </em>
        </p>
        <p>Current value: {this.state.counter}</p>
        <p>Redux counter value: {this.props.counter}</p>
        <p>
          <button onClick={this.incrementCounter} style={{ marginRight: 6 }}>
            Increment
          </button>
          <button onClick={this.props.incrementAction}>Redux Increment</button>
        </p>

        <div>
          <h4>
            async example <small>(fetch from: https://jsonplaceholder.typicode.com/posts/1)</small>
          </h4>
          {post.body}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counterValue,
  post: state.counter.asyncPostExample,
});

const mapActionsToProps = {
  incrementAction: invokeIncrement,
  asyncDemo: loadPost,
};

// export default CounterRoute;
export default compose(
  connect(mapStateToProps, mapActionsToProps),
  withJob({
    work: ({ match, post, asyncDemo }) =>
      // Execute the redux-thunk powered action that returns a Promise and
      // fetches the post.
      asyncDemo(),

    // Any time the post id changes we need to trigger the work.
    shouldWorkAgain: (prevProps, nextProps) => {
      prevProps.post.id !== nextProps.post.id;
    },
  }),
)(CounterRoute);
