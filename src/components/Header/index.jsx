import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clipboardCopy from 'clipboard-copy';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

import LangSwitch from '../LangSwitch/LangSwitch';

import { changePage } from '../../actions';
import { pageSelector, sessionIdSelector } from '../../selectors';

import useStyles from './styles';

const Header = ({ resetSession }) => {
  const dispatch = useDispatch();
  const css = useStyles();
  const { formatMessage } = useIntl();

  const sessionId = useSelector((state) => sessionIdSelector(state));
  const page = useSelector((state) => pageSelector(state));

  const [copyHintText, setCopyHintText] = useState('Click to copy');

  const handleChangePage = (newPage) => {
    dispatch(changePage(newPage));
  };

  const handleCopySessionIdClick = () => {
    clipboardCopy(sessionId).then(() => {
      setCopyHintText(formatMessage({ id: 'header.tooltip.copied' }));

      setTimeout(() => {
        setCopyHintText(formatMessage({ id: 'header.tooltip.copy' }));
      }, 5000);
    });
  };

  return (
    <div className={css.header}>
      <div className={css.navWrapper}>
        <Tooltip title={formatMessage({ id: 'header.tooltip.picker' })}>
          <IconButton onClick={() => handleChangePage('picker')} className={css.headerButton}>
            <AssignmentIndOutlinedIcon className={page === 'picker' ? css.btnActive : ''} />
          </IconButton>
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'header.tooltip.questions' })}>
          <IconButton onClick={() => handleChangePage('questions')} className={css.headerButton}>
            <HelpOutlineIcon className={page === 'questions' ? css.btnActive : ''} />
          </IconButton>
        </Tooltip>
        <LangSwitch />
      </div>
      <div className={css.sessionWrapper}>
        {
          sessionId !== '' && (
            <div className={css.sessionIdWrapper}>
              <Typography>
                {formatMessage({ id: 'header.sessionId' })}
                :
              </Typography>
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
        <Tooltip title={formatMessage({ id: 'header.tooltip.exit' })}>
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
