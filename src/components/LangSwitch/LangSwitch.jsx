import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './styles';
import { setAppLang } from '../../actions';

const LangSwitch = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const css = useStyles();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (lang) => {
    handleClose();
    dispatch(setAppLang(lang));
  };

  return (
    <div className={css.wrapper}>
      <Tooltip title={formatMessage({ id: 'header.tooltip.lang' })}>
        <IconButton className={css.menuButton} onClick={handleClick}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem dense onClick={() => handleMenuItemClick('en')}>English</MenuItem>
        <MenuItem dense onClick={() => handleMenuItemClick('ru')}>Русский</MenuItem>
      </Menu>
    </div>
  );
};

export default LangSwitch;
