import {
  call, put, takeEvery, select, takeLatest,
} from 'redux-saga/effects';

import { get, remove } from 'lodash';
import { nanoid } from 'nanoid';

import firebaseDataService from '../services/firebaseData';
import {
  sessionKeySelector, pickerStateSelector,
  sessionIdSelector, clientIdSelector,
} from '../selectors';

import { getSessionById } from '../utils';

import {
  ENTER_APP, RESET_SESSION, UPDATE_ANSWERS_EVERYONE_BUTTON,
  UPDATE_SELECTED_QUESTS, UPDATE_GHOST_NAME, FILTER_GHOSTS, RESET_PICKER,
  setPickerState, resetSessionComplete, resetPicker, setSessionKey,
  setClientId,
} from '../actions';

const createPickerStateObject = (picker, sessionId) => {
  const {
    selectedEvidences, evidenceButtons, questButtons,
    talksToEveryOne, ghostName,
  } = picker;

  return {
    sessionId,
    selectedEvidences,
    evidenceButtons,
    questButtons,
    talksToEveryOne,
    ghostName,
  };
};

function* enterApp(action) {
  const { sessionId } = action;
  const clientId = nanoid(10);

  if (sessionId !== '') {
    const data = yield call(firebaseDataService.getSessionById, sessionId);
    const session = getSessionById(sessionId, data.val());

    if (session) {
      const key = Object.keys(data.val())[0];
      const clients = get(session, 'clients', []);
      clients.push(clientId);

      yield call(
        firebaseDataService.updateSession,
        key,
        {
          ...session,
          clients,
        },
      );

      yield put(setPickerState(session));
      yield put(setSessionKey(key));
    } else {
      const picker = yield select(pickerStateSelector);
      const objectToStore = createPickerStateObject(picker, sessionId);

      const newSessionKey = yield call(
        firebaseDataService.createSession,
        {
          ...objectToStore,
          clients: [clientId],
        },
      );
      yield put(setSessionKey(newSessionKey.key));
    }

    yield put(setClientId(clientId));
  }
}

function* removeSession() {
  const sessionId = yield select(sessionIdSelector);
  const clientId = yield select(clientIdSelector);
  const key = yield select(sessionKeySelector);

  const data = yield call(firebaseDataService.getSessionById, sessionId);
  const session = getSessionById(sessionId, data.val());

  const clients = get(session, 'clients', []);

  if (clients.length === 1) {
    yield call(firebaseDataService.removeSession, key);
  } else {
    remove(clients, (el) => el === clientId);

    yield call(
      firebaseDataService.updateSession,
      key,
      {
        ...session,
        clients,
      },
    );
  }

  yield put(resetSessionComplete());
  yield put(resetPicker());
}

function* handlePickerChange() {
  const sessionKey = yield select(sessionKeySelector);
  const sessionId = yield select(sessionIdSelector);
  const picker = yield select(pickerStateSelector);

  const objectToStore = createPickerStateObject(picker, sessionId);

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
