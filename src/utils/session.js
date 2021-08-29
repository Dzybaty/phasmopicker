import { find } from 'lodash';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setSessionId = (value) => {
  cookies.set('sessionId', value, { maxAge: 28800 });
};

export const getSessionId = () => cookies.get('sessionId');

export const resetSessionId = () => cookies.remove('sessionId');

export const getSessionById = (id, objects) => (
  find(objects, (el) => el.sessionId === id) || null
);
