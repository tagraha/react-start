import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';
import Helmet from 'react-helmet';
import { invokeIncrement } from './../../../redux/modules/counter';
import { loadPost } from './../../../redux/modules/post';

class PostRoute extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.props.incrementAction();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Async Post Example</title>
        </Helmet>

        <h4>
          async example{' '}
          <small>
            (fetch from: https://jsonplaceholder.typicode.com/posts/1)
          </small>
        </h4>
        <p>{this.props.post.asyncPostExample.body}</p>

        <p>Redux counter value: {this.props.counter.counterValue}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  post: state.post,
});

const mapActionsToProps = {
  incrementAction: invokeIncrement,
  asyncDemo: loadPost,
};

// export default PostRoute;
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
)(PostRoute);
