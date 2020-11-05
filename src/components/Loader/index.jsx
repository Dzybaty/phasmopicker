import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import { loaderStateSelector } from '../../selectors';

import useStyles from './styles';

const Loader = ({ type }) => {
  const css = useStyles();
  const isShown = useSelector((state) => loaderStateSelector(state));

  const wrapperStyle = type === 'linear' ? css.activeBox : css.activeAbsolute;
  const isActive = isShown ? '' : css.disabled;

  return (
    <div className={`${wrapperStyle} ${isActive}`}>
      {
        type === 'linear' ? (
          <LinearProgress />
        ) : (
          <CircularProgress color="secondary" />
        )
      }
    </div>
  );
};

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
