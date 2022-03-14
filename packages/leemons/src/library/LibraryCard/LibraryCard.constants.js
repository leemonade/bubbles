import PropTypes from 'prop-types';
import { LIBRARY_CARD_DEADLINE_PROP_TYPES } from '../Library.constants';

export const LIBRARYCARD_ROLES = ['owner', 'editor', 'commentor', 'viewer'];
export const LIBRARYCARD_VARIANTS = ['media', 'task', 'assigment'];
export const LIBRARYCARD_ASSIGMENT = {
  completed: PropTypes.number,
  subsmission: PropTypes.number,
  total: PropTypes.number,
  subject: PropTypes.shape({
    name: PropTypes.string,
  }),
  avgTime: PropTypes.number,
  avgAttempts: PropTypes.number,
};

export const LIBRARY_CARD_DEFAULT_PROPS = {};
export const LIBRARY_CARD_PROP_TYPES = {
  asset: PropTypes.shape({
    id: PropTypes.string,
    fileType: PropTypes.string,
    fileExtension: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    subtitle: PropTypes.string,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
    ),
    created: PropTypes.string,
    version: PropTypes.string,
    cover: PropTypes.string,
    color: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
    role: PropTypes.oneOf(LIBRARYCARD_ROLES),
  }),
  assigment: PropTypes.shape(LIBRARYCARD_ASSIGMENT),
  variant: PropTypes.oneOf(LIBRARYCARD_VARIANTS),
  deadlineProps: PropTypes.shape(LIBRARY_CARD_DEADLINE_PROP_TYPES),
  action: PropTypes.string,
  onAction: PropTypes.func,
  locale: PropTypes.string,
};
