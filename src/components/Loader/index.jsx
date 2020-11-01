import React from 'react';
import { useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import { loaderStateSelector } from '../../selectors';

import useStyles from './styles';

const Loader = () => {
  const css = useStyles();
  const isShown = useSelector((state) => loaderStateSelector(state));

  const selectorStyle = isShown ? css.active : css.disabled;

  return (
    <div className={selectorStyle}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
