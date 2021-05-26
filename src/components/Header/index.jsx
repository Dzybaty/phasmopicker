import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

import { changePage } from '../../actions';
import { pageSelector, sessionIdSelector } from '../../selectors';

import useStyles from './styles';

const Header = ({ resetSession }) => {
  const dispatch = useDispatch();
  const css = useStyles();

  const sessionId = useSelector((state) => sessionIdSelector(state));
  const page = useSelector((state) => pageSelector(state));

  const [copyHintText, setCopyHintText] = useState('Click to copy');

  const handleChangePage = (newPage) => {
    dispatch(changePage(newPage));
  };

  const handleCopySessionIdClick = () => {
    clipboardCopy(sessionId).then(() => {
      setCopyHintText('Copied to clipboard!');

      setTimeout(() => {
        setCopyHintText('Click to copy');
      }, 5000);
    });
  };

  return (
    <div className={css.header}>
      <div className={css.navWrapper}>
        <Tooltip title="Picker">
          <IconButton onClick={() => handleChangePage('picker')} className={css.headerButton}>
            <AssignmentIndOutlinedIcon className={page === 'picker' ? css.btnActive : ''} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Questions">
          <IconButton onClick={() => handleChangePage('questions')} className={css.headerButton}>
            <HelpOutlineIcon className={page === 'questions' ? css.btnActive : ''} />
          </IconButton>
        </Tooltip>
      </div>
      <div className={css.sessionWrapper}>
        {
          sessionId !== '' && (
            <div className={css.sessionIdWrapper}>
              <Typography>Session id:</Typography>
              <Tooltip title={copyHintText}>
                <Button
                  onClick={handleCopySessionIdClick}
                  className={css.headerButton}
                >
                  {sessionId}
                </Button>
              </Tooltip>
            </div>
          )
        }
        <Tooltip title="Exit room">
          <IconButton onClick={() => resetSession()} className={css.headerButton}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

Header.propTypes = {
  resetSession: PropTypes.func.isRequired,
};

export default Header;
