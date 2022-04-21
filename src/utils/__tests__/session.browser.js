import {
  getSessionId,
  setSessionId,
  resetSessionId,
  saveUserLanguage,
  getUserLanguage,
} from '../cookies';

const testSessionId = 'test-session-id';
const testUserLang = 'test-lang';

const clearCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

beforeEach(() => {
  clearCookies();
});

describe('getSessionId', () => {
  it('should return current session id', () => {
    window.document.cookie = `sessionId=${testSessionId}`;

    expect(getSessionId()).toEqual(testSessionId);
  });
});

describe('setSessionId', () => {
  it('should correctly set session id cookie', () => {
    setSessionId(testSessionId);

    expect(window.document.cookie).toMatchInlineSnapshot(
      '"sessionId=test-session-id"',
    );
  });
});

describe('resetSessionId', () => {
  it('should correctly remove session id cookie', () => {
    window.document.cookie = `sessionId=${testSessionId}`;
    resetSessionId();

    expect(window.document.cookie).toEqual('');
  });
});

describe('saveUserLanguage', () => {
  it('should correctly set user language cookie', () => {
    saveUserLanguage(testUserLang);

    expect(window.document.cookie).toMatchInlineSnapshot(
      '"userLang=test-lang"',
    );
  });
});

describe('getUserLanguage', () => {
  it('should return user language from cookies if exists', () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'de-DE',
      configurable: true,
    });
    const userLangFromNavigatorLanguage = getUserLanguage();
    expect(userLangFromNavigatorLanguage).toEqual('de');

    Object.defineProperty(global.navigator, 'language', {
      value: undefined,
      configurable: true,
    });
    Object.defineProperty(global.navigator, 'userLanguage', {
      value: 'fr-FR',
      configurable: true,
    });
    const userLangFromNavigatorUserLanguage = getUserLanguage();
    expect(userLangFromNavigatorUserLanguage).toEqual('fr');

    Object.defineProperty(global.navigator, 'language', {
      value: undefined,
      configurable: true,
    });
    Object.defineProperty(global.navigator, 'userLanguage', {
      value: undefined,
      configurable: true,
    });
    const userLangFromNavigatorFallback = getUserLanguage();
    expect(userLangFromNavigatorFallback).toEqual('en');
  });

  it('should return user language from navigator if no cookie', () => {
    window.document.cookie = `userLang=${testUserLang}`;
    const userLangFromCookies = getUserLanguage();
    expect(userLangFromCookies).toEqual(testUserLang);
  });
});
