import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('derived triggered');
    return null;
  }
  render() {
    return <span>{this.props.count}</span>;
  }
}

Counter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  count: PropTypes.number,
};
