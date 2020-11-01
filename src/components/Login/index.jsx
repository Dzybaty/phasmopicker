import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { isEmpty } from 'lodash';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Loader from '../Loader';

import { enterApp, showLoader, hideLoader } from '../../actions';
import { getSessionId, setSessionId } from '../../utils';
import firebaseDataService from '../../services/firebaseData';

import useStyles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const css = useStyles();

  const [sessionId, changeSessionId] = useState('');
  const [session, setSession] = useState({});
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

  const handleSessionIdChange = (value) => {
    setSession({});
    changeSessionId(value);
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    const id = nanoid(10);
    dispatch(enterApp('picker', id));
    setSessionId(id);
  };

  const handleClickJoin = (state) => {
    setIsJoinButtonPressed(state);
  };

  const handleJoinSession = () => {
    dispatch(showLoader());
    firebaseDataService.getSessionById(sessionId).then((data) => {
      dispatch(hideLoader());
      setSession(data.val());
    });
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
              error={!session}
              helperText={!session ? 'No such session' : ''}
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
