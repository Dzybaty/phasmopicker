import {
  call, put, takeEvery, select, takeLatest,
} from 'redux-saga/effects';

import { get, remove, debounce } from 'lodash';

import firebaseDataService from '../services/firebaseData';
import {
  sessionKeySelector, pickerStateSelector,
  sessionIdSelector, clientIdSelector, clientsSelector,
} from '../selectors';

import {
  getSessionById, generateUuid, getUserLanguage, saveUserLanguage,
} from '../utils';

import {
  ENTER_APP, RESET_SESSION, UPDATE_ANSWERS_EVERYONE_BUTTON, INIT_APP, SET_APP_LANG,
  UPDATE_SELECTED_QUESTS, UPDATE_GHOST_NAME, FILTER_GHOSTS, RESET_PICKER,
  setPickerState, resetSessionComplete, resetPicker, setSessionKey,
  setClientId, setAppLang,
} from '../actions';

const updateDebounced = debounce(firebaseDataService.updateSession, 800);

const createPickerStateObject = (picker, sessionId) => {
  const {
    selectedEvidences, evidenceButtons, questButtons,
    talksToEveryOne, ghostName, excludedEvidences,
  } = picker;

  return {
    sessionId,
    selectedEvidences,
    excludedEvidences,
    evidenceButtons,
    questButtons,
    talksToEveryOne,
    ghostName,
  };
};

function* enterApp(action) {
  const { sessionId } = action;
  const clientId = generateUuid();

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

  if (sessionId === '') {
    yield put(resetSessionComplete());
    yield put(resetPicker());
    return;
  }

  const clientId = yield select(clientIdSelector);
  const key = yield select(sessionKeySelector);
  const clients = yield select(clientsSelector);

  if (clients.length < 2) {
    yield call(firebaseDataService.removeSession, key);
  } else {
    const picker = yield select(pickerStateSelector);
    const objectToStore = createPickerStateObject(picker, sessionId);

    remove(clients, (el) => el === clientId);

    yield call(
      firebaseDataService.updateSession,
      key,
      {
        ...objectToStore,
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
    yield call(updateDebounced, sessionKey, objectToStore);
    return;
  }

  if (!sessionKey && sessionId.length > 0) {
    const newSessionKey = yield call(firebaseDataService.createSession, objectToStore);
    yield put(setSessionKey(newSessionKey.key));
  }
}

function* init() {
  const userLang = getUserLanguage();

  yield put(setAppLang(userLang));
}

function* updateUserLang(action) {
  const { newLang } = action;

  yield call(saveUserLanguage, newLang);
}

function* rootSaga() {
  yield takeEvery(INIT_APP, init);
  yield takeEvery(SET_APP_LANG, updateUserLang);
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
