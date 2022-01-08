import {call, delay, put, select} from 'redux-saga/effects';

import {getLoad, setLoadSuccess} from '../../reducer/loader.reducer';

export function* setLoad() {
  try {
    let loading = true;
    yield put(getLoad(loading));
  } catch (error) {
    console.log(error);
  }
}

export function* getData() {
  try {
    let loading = false;
    yield put(setLoadSuccess(loading));
  } catch (error) {
    console.log(error);
  }
}
