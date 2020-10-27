import { CHANGE_PAGE } from '../actions';

const defaultState = {
  page: 'picker',
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      const { page } = action;

      return ({ page });
    }

    default:
      return state;
  }
};

export default app;
