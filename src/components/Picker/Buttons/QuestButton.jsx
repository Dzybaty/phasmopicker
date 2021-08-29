import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '@material-ui/core';

import useStyles from './styles';

import { isActiveButtonSelector } from '../../../selectors';

const QuestButton = ({
  quest, text, handleClick, ...props
}) => {
  const css = useStyles(props);

  const isActive = useSelector((state) => isActiveButtonSelector(state, 'quest', quest));

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(quest, !isActive)}
    >
      {text}
    </Button>
  );
};

QuestButton.propTypes = {
  quest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QuestButton;
