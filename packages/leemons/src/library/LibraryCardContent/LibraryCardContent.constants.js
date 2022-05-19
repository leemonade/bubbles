import PropTypes from 'prop-types';
import { LIBRARYCARD_ASSIGMENT, LIBRARYCARD_VARIANTS } from '../LibraryCard/LibraryCard.constants';

export const LIBRARY_CARD_CONTENT_DEFAULT_PROPS = {
  metadata: [],
  tags: [],
  variant: 'media',
  badgeColor: 'solid',
  truncated: true,
  locale: 'en-GB',
};
export const LIBRARY_CARD_CONTENT_PROP_TYPES = {
  tagline: PropTypes.string,
  description: PropTypes.string,
  metadata: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.any, value: PropTypes.any })),
  tags: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  variant: PropTypes.oneOf(LIBRARYCARD_VARIANTS),
  assigment: PropTypes.shape(LIBRARYCARD_ASSIGMENT),
  truncated: PropTypes.bool,
};
