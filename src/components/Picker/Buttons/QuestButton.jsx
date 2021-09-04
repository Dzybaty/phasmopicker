import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { Button } from '@material-ui/core';

import useStyles from './styles';

import { buttonStatusSelector } from '../../../selectors';

const QuestButton = ({
  quest, handleClick, ...props
}) => {
  const css = useStyles(props);
  const { formatMessage } = useIntl();

  const isActive = useSelector((state) => buttonStatusSelector(state, 'quest', quest.key));

  return (
    <Button
      className={isActive ? css.buttonSelected : css.button}
      onClick={() => handleClick(quest.key, !isActive)}
    >
      {formatMessage({ id: quest.localizedMessageId })}
    </Button>
  );
};

QuestButton.propTypes = {
  quest: PropTypes.shape({
    key: PropTypes.string.isRequired,
    localizedMessageId: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QuestButton;
