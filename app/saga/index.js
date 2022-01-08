import {takeLatest, all} from 'redux-saga/effects';
import sagaAction from './saga.action';
import {setLoad, getData} from './sagas/data.saga';

export default function* root() {
  yield all([
    takeLatest(sagaAction.SET_LOAD, setLoad),
    takeLatest(sagaAction.GET_DATA, getData),
  ]);
}
