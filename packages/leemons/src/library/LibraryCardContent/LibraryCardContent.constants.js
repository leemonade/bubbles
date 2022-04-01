import PropTypes from 'prop-types';
import { LIBRARYCARD_VARIANTS, LIBRARYCARD_ASSIGMENT } from '../LibraryCard/LibraryCard.constants';

export const LIBRARY_CARD_CONTENT_DEFAULT_PROPS = {
  metadata: [],
  tags: [],
  variant: 'media',
  badgeColor: 'solid',
};
export const LIBRARY_CARD_CONTENT_PROP_TYPES = {
  subtitle: PropTypes.string,
  description: PropTypes.string,
  metadata: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.any, value: PropTypes.any })),
  tags: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  variant: PropTypes.oneOf(LIBRARYCARD_VARIANTS),
  assigment: PropTypes.shape(LIBRARYCARD_ASSIGMENT),
};
