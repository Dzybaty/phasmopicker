import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import useStyles from './styles';

import { isActiveButtonSelector } from '../../../selectors';

const CustomButton = ({
  type, text, handleClick, ...props
}) => {
  const css = useStyles(props);

  const isActive = useSelector((state) => isActiveButtonSelector(state, type, text));

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(text, !isActive)}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;
