import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  // include home and about route in same chunk e.g post
  resolve: () => import(/* webpackChunkName: "post" */ './PostRoute'),
  ssrMode: 'boundary',
  name: 'Post',
});
