import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from '../reducer/index';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/index';
import Reactotron from './reactotron';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

export default configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(saga);
