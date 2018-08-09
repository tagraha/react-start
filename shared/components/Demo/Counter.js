import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps() {
    return null;
  }

  render() {
    const { count } = this.props;
    return <span>{count}</span>;
  }
}

Counter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  count: PropTypes.number.isRequired,
};
