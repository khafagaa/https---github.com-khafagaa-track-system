import {combineReducers} from '@reduxjs/toolkit';
import loaderReducer from './loader.reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

export default rootReducer;
