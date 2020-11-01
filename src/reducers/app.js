import {
  CHANGE_PAGE, ENTER_APP, RESET_SESSION_COMPLETE,
  SET_SESSION_KEY, SET_CLIENT_ID,
} from '../actions';

const defaultState = {
  page: '',
  sessionId: '',
  sessionKey: null,
  clientId: null,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      const { page } = action;

      return ({
        ...state,
        page,
      });
    }

    case ENTER_APP: {
      const { page, sessionId } = action;

      return ({
        page,
        sessionId,
      });
    }

    case SET_CLIENT_ID: {
      const { clientId } = action;

      return {
        ...state,
        clientId,
      };
    }

    case RESET_SESSION_COMPLETE: {
      return defaultState;
    }

    case SET_SESSION_KEY: {
      const { sessionKey } = action;

      return {
        ...state,
        sessionKey,
      };
    }

    default:
      return state;
  }
};

export default app;
