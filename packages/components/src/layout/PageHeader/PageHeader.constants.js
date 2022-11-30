import PropTypes from 'prop-types';

export const PAGE_HEADER_BUTTONS = {
  NEW: 'new',
  EDIT: 'edit',
  SAVE: 'save',
  CANCEL: 'cancel',
  DUPLICATE: 'duplicate',
};

export const PAGE_HEADER_DEFAULT_PROPS = {
  values: { title: '', description: '' },
  labels: { title: '', description: '' },
  placeholders: { title: '', description: '' },
  errors: { title: '', description: '' },
  required: { title: true, description: false },
  icon: undefined,
  buttons: { new: '', save: '', edit: '', cancel: '', duplicate: '' },
  fullWidth: false,
  withDivider: false,
  loading: '',
};
export const PAGE_HEADER_PROP_TYPES = {
  values: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  labels: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  placeholders: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  errors: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  required: PropTypes.shape({ title: PropTypes.bool, description: PropTypes.bool }),
  fullWidth: PropTypes.bool,
  buttons: PropTypes.shape({
    new: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    save: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    edit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    duplicate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  withDivider: PropTypes.bool,
  icon: PropTypes.node,
  onNew: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onButton: PropTypes.func,
  onCancel: PropTypes.func,
  onDuplicate: PropTypes.func,
};