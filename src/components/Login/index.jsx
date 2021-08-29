import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { useIntl } from 'react-intl';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Loader from '../Loader';
import LangSwitch from '../LangSwitch/LangSwitch';

import { enterApp, showLoader, hideLoader } from '../../actions';
import { getSessionId, setSessionId, generateUuid } from '../../utils';
import firebaseDataService from '../../services/firebaseData';

import useStyles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const css = useStyles();
  const { formatMessage } = useIntl();

  const [sessionId, changeSessionId] = useState('');
  const [session, setSession] = useState({});
  const [error, setError] = useState(null);
  const [isJoinButtonPressed, setIsJoinButtonPressed] = useState(false);

  const sessionIdCookie = getSessionId();

  useEffect(() => {
    if (sessionIdCookie || sessionIdCookie === '') {
      dispatch(enterApp('picker', sessionIdCookie));
    }
  }, [dispatch, sessionIdCookie]);

  useEffect(() => {
    if (session && !isEmpty(session)) {
      setSessionId(sessionId);
      dispatch(enterApp('picker', sessionId));
    }
  });

  useEffect(() => {
    if (!session) {
      setError(formatMessage({ id: 'login.error.notFound' }));
    }
  }, [session, formatMessage]);

  const validate = () => {
    if (sessionId.length !== 6) {
      setError(formatMessage({ id: 'login.error.length' }));
      return false;
    }

    if (!(/^[0-9]+$/).test(sessionId)) {
      setError(formatMessage({ id: 'login.error.format' }));
      return false;
    }

    return true;
  };

  const handleSessionIdChange = (value) => {
    setSession({});
    setError(null);
    changeSessionId(value);
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    const id = generateUuid();
    dispatch(enterApp('picker', id));
    setSessionId(id);
  };

  const handleClickJoin = (state) => {
    setIsJoinButtonPressed(state);
  };

  const handleJoinSession = () => {
    if (validate()) {
      dispatch(showLoader());
      firebaseDataService.getSessionById(sessionId).then((data) => {
        dispatch(hideLoader());
        setSession(data.val());
      });
    }
  };

  const handleSoloLobby = () => {
    setSessionId('');
    dispatch(enterApp('picker', ''));
  };

  return (
    <Box className={css.wrapper}>
      <Box className={css.subWrapper}>
        {
          isJoinButtonPressed ? (
            <Box className={css.inputWrapper}>
              <TextField
                id="sessionID"
                label={formatMessage({ id: 'login.sessionId' })}
                variant="outlined"
                value={sessionId}
                error={!!error}
                helperText={error}
                onChange={(e) => handleSessionIdChange(e.target.value)}
              />
              <Button className={css.submitButton} onClick={handleJoinSession}>
                {formatMessage({ id: 'login.join.proceed' })}
              </Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={() => handleClickJoin(false)}
              >
                {formatMessage({ id: 'login.back' })}
              </Button>
            </Box>
          ) : (
            <Box className={css.inputWrapper}>
              <Button
                className={css.submitButton}
                onClick={handleCreateClick}
              >
                {formatMessage({ id: 'login.create' })}
              </Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={() => handleClickJoin(true)}
              >
                {formatMessage({ id: 'login.join' })}
              </Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={handleSoloLobby}
              >
                {formatMessage({ id: 'login.solo' })}
              </Button>
            </Box>
          )
        }
        <Loader type="linear" />
      </Box>
      <Box className={css.langSwitchWrapper}>
        <LangSwitch />
      </Box>
    </Box>
  );
};

export default Login;
