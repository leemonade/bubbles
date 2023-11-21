import React from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from '@bubbles-ui/icons/outline';

export const CARD_EMPTY_COVER_DEFAULT_PROPS = {
  icon: <FileIcon color={'#878D96'} />,
  fileType: '',
};
export const CARD_EMPTY_COVER_PROP_TYPES = {
  icon: PropTypes.node,
  fileType: PropTypes.oneOf(['audio', 'video', 'image', 'bookmark', 'noicon']),
};
