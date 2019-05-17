
import orderInfo from './reducers/orderInfo';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import shoppingCart from './reducers/shoppingCart';
import home from './reducers/home';
import profile from './reducers/product';
import product from './reducers/product';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  orderInfo,
  auth,
  common,
  shoppingCart,
  home,
  profile,
  product,
  router: routerReducer
});
