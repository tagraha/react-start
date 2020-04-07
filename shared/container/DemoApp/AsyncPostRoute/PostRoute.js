import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';
import Helmet from 'react-helmet';
import { invokeIncrement } from './../../../redux/modules/counter';
import { loadPost } from './../../../redux/modules/post';

// internal Components
import Counter from './../../../components/Demo/Counter';

const PostRoute = (props) => {
  const { counter, incrementAction, post } = props;

  const increment = () => {
    incrementAction();
  };

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
      <p>{post.asyncPostExample.body}</p>

      <p>
        Redux counter value: <Counter count={counter.counterValue} />
      </p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
  post: state.post,
});

const mapActionsToProps = {
  incrementAction: invokeIncrement,
  asyncDemo: loadPost,
};

PostRoute.propTypes = {
  counter: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  post: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  incrementAction: PropTypes.func.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default compose(
  connect(mapStateToProps, mapActionsToProps),
  withJob({
    work: (
      { match, post, asyncDemo }, // eslint-disable-line
    ) => asyncDemo(), // Execute the redux-thunk powered action that returns a Promise and fetches the post.
    // Any time the post id changes we need to trigger the work.
    shouldWorkAgain: (prevProps, nextProps) =>
      // eslint-disable-line
      prevProps.post.asyncPostExample.id !== nextProps.post.asyncPostExample.id,
  }),
)(PostRoute);
