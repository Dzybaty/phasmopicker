import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Loader from '../Loader';

import { enterApp, showLoader, hideLoader } from '../../actions';
import { getSessionId, setSessionId, generateUuid } from '../../utils';
import firebaseDataService from '../../services/firebaseData';

import useStyles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const css = useStyles();

  const [sessionId, changeSessionId] = useState('');
  const [session, setSession] = useState({});
  const [error, setError] = useState(null);
  const [isJoinButtonPressed, setIsJoinButtonPressed] = useState(false);

  const sessionIdCookie = getSessionId();

  useEffect(() => {
    if (sessionIdCookie) {
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
      setError('Session not found');
    }
  }, [session]);

  const validate = () => {
    if (sessionId.length !== 8) {
      setError('Session id consists of 8 symbols');
      return false;
    }

    if (!(/^[0-9A-D]+$/).test(sessionId)) {
      setError('Wrong ID format');
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
      {
        isJoinButtonPressed ? (
          <Box className={css.inputWrapper}>
            <TextField
              id="sessionID"
              label="Session ID"
              variant="outlined"
              value={sessionId}
              error={!!error}
              helperText={error}
              onChange={(e) => handleSessionIdChange(e.target.value)}
            />
            <Button className={css.submitButton} onClick={handleJoinSession}>Join</Button>
            <Button
              className={css.submitButton}
              onClick={() => handleClickJoin(false)}
            >
              Back
            </Button>
          </Box>
        ) : (
          <Box className={css.inputWrapper}>
            <Button
              className={css.submitButton}
              onClick={handleCreateClick}
            >
              Create online lobby
            </Button>
            <Button
              className={css.submitButton}
              onClick={() => handleClickJoin(true)}
            >
              Join online lobby
            </Button>
            <Button
              className={css.submitButton}
              onClick={handleSoloLobby}
            >
              Enter solo lobby
            </Button>
          </Box>
        )
      }
      <Loader />
    </Box>
  );
};

export default Login;
