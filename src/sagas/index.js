import {
  call, put, takeEvery, select, takeLatest,
} from 'redux-saga/effects';

import firebaseDataService from '../services/firebaseData';
import { sessionKeySelector, pickerStateSelector, sessionIdSelector } from '../selectors';
import { getSessionById } from '../utils';

import {
  ENTER_APP, RESET_SESSION, UPDATE_ANSWERS_EVERYONE_BUTTON,
  UPDATE_SELECTED_QUESTS, UPDATE_GHOST_NAME, FILTER_GHOSTS, RESET_PICKER,
  setPickerState, resetSessionComplete, resetPicker, setSessionKey,
} from '../actions';

function* enterApp(action) {
  const { sessionId } = action;

  if (sessionId !== '') {
    const data = yield call(firebaseDataService.getSessionById, sessionId);
    const session = getSessionById(sessionId, data.val());

    if (session) {
      const key = Object.keys(data.val())[0];
      yield put(setPickerState(session));
      yield put(setSessionKey(key));
    }
  }
}

function* removeSession() {
  const key = yield select(sessionKeySelector);

  if (key) {
    yield call(firebaseDataService.removeSession, key);
  }

  yield put(resetSessionComplete());
  yield put(resetPicker());
}

function* handlePickerChange() {
  const sessionKey = yield select(sessionKeySelector);
  const sessionId = yield select(sessionIdSelector);
  const picker = yield select(pickerStateSelector);

  const {
    selectedEvidences, evidenceButtons, questButtons,
    talksToEveryOne, ghostName,
  } = picker;

  const objectToStore = {
    sessionId,
    selectedEvidences,
    evidenceButtons,
    questButtons,
    talksToEveryOne,
    ghostName,
  };

  if (sessionKey && sessionId !== '') {
    yield call(firebaseDataService.updateSession, sessionKey, objectToStore);
    return;
  }

  if (!sessionKey && sessionId.length > 0) {
    const newSessionKey = yield call(firebaseDataService.createSession, objectToStore);
    yield put(setSessionKey(newSessionKey.key));
  }
}

function* rootSaga() {
  yield takeEvery(ENTER_APP, enterApp);
  yield takeEvery(RESET_SESSION, removeSession);
  yield takeLatest([
    UPDATE_GHOST_NAME,
    UPDATE_SELECTED_QUESTS,
    UPDATE_ANSWERS_EVERYONE_BUTTON,
    FILTER_GHOSTS,
    RESET_PICKER,
  ], handlePickerChange);
}

export default rootSaga;
