import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  // include home and about route in same chunk e.g post
  resolve: () => import(/* webpackChunkName: "PostRoute" */ './PostRoute'),
  ssrMode: 'boundary',
  name: 'Post',
});
