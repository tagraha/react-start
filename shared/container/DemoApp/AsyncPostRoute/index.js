import React, { Component } from 'react';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  // include home and about route in same chunk e.g post
  resolve: () => import(/* webpackChunkName: "post" */ './PostRoute'),
  LoadingComponent: ({ props }) => <LoadingCaption />,
  ssrMode: 'boundary',
  name: 'Post',
});

class LoadingCaption extends Component {
  render() {
    return <div>loading...</div>;
  }
}
