import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';
import Helmet from 'react-helmet';
import { invokeIncrement } from './../../../redux/modules/counter';
import { loadPost } from './../../../redux/modules/post';

// internal Components
import Counter from './../../../components/Demo/Counter';

class PostRoute extends Component {
  constructor(props) {
    super(props); // eslint-disable-line
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

        <h3>Redux</h3>
        <h4>
          async example{' '}
          <small>
            (fetch from: https://jsonplaceholder.typicode.com/posts/1)
          </small>
        </h4>
        <p>{this.props.post.asyncPostExample.body}</p>

        <p>
          Redux counter value:{' '}
          <Counter count={this.props.counter.counterValue} />
        </p>
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

PostRoute.propTypes = {
  counter: PropTypes.number.isRequired, // eslint-disable-line react/forbid-prop-types
  post: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  incrementAction: PropTypes.func.isRequired, // eslint-disable-line react/forbid-prop-types
};

// export default PostRoute;
export default compose(
  connect(mapStateToProps, mapActionsToProps),
  withJob({
    work: (
      { match, post, asyncDemo }, // eslint-disable-line
    ) =>
      // Execute the redux-thunk powered action that returns a Promise and
      // fetches the post.
      asyncDemo(),

    // Any time the post id changes we need to trigger the work.
    shouldWorkAgain: (prevProps, nextProps) => {
      // eslint-disable-line
      prevProps.post.id !== nextProps.post.id;
    },
  }),
)(PostRoute);
