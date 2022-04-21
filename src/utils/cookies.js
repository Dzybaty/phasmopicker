import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setSessionId = (value) => {
  cookies.set('sessionId', value, { maxAge: 28800 });
};

export const getSessionId = () => cookies.get('sessionId');

export const resetSessionId = () => cookies.remove('sessionId');

export const saveUserLanguage = (lang) => {
  cookies.set('userLang', lang, { maxAge: 28800 });
};

export const getUserLanguage = () => {
  const langFromCookies = cookies.get('userLang');

  if (langFromCookies) {
    return langFromCookies;
  }

  const fullLang = navigator.language || navigator.userLanguage || 'en-US';
  const lang = fullLang.split('-');
  return lang[0];
};
