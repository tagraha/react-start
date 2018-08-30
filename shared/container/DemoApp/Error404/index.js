import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import(/* webpackChunkName: "Error404" */ './Error404'),
});
