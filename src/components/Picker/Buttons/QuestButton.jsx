import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
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
    <Tooltip title={formatMessage({ id: quest.hintMessageId })} placement="top" classes={{ tooltip: css.buttonHint }}>
      <Button
        className={isActive ? css.buttonSelected : css.button}
        onClick={() => handleClick(quest.key, !isActive)}
      >
        {formatMessage({ id: quest.localizedMessageId })}
      </Button>

    </Tooltip>
  );
};

QuestButton.propTypes = {
  quest: PropTypes.shape({
    key: PropTypes.string.isRequired,
    localizedMessageId: PropTypes.string.isRequired,
    hintMessageId: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QuestButton;
