import PropTypes from 'prop-types';
import { flatMap } from 'lodash';

const BUTTONS = {
  NEW: 'new',
  EDIT: 'edit',
  SAVE: 'save',
  CANCEL: 'cancel',
  DUPLICATE: 'duplicate',
};

export const ADMIN_PAGE_HEADER_BUTTONS = BUTTONS;
export const ADMIN_PAGE_HEADER_BUTTON_TYPES = flatMap(BUTTONS);
export const ADMIN_PAGE_HEADER_VARIANTS = ['default', 'teacher'];

export const ADMIN_PAGE_HEADER_DEFAULT_PROPS = {
  separator: true,
  useRouter: false,
  editMode: false,
  labels: { title: '', description: '' },
  placeholders: { title: '', description: '' },
  values: { title: '', description: '' },
  buttons: { new: '', edit: '', cancel: '', duplicate: '' },
  loading: '',
  required: { title: true, description: false },
  variant: 'default',
};
export const ADMIN_PAGE_HEADER_PROP_TYPES = {
  className: PropTypes.string,
  breadcrumbs: PropTypes.array,
  editMode: PropTypes.bool,
  useRouter: PropTypes.bool,
  labels: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  errors: PropTypes.shape({
    title: PropTypes.shape({ required: PropTypes.string }),
    description: PropTypes.shape({ required: PropTypes.string }),
  }),
  values: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  placeholders: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
  buttons: PropTypes.shape({
    new: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    edit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    duplicate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  required: PropTypes.shape({ title: PropTypes.bool, description: PropTypes.bool }),
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icon: PropTypes.node,
  onNew: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onButton: PropTypes.func,
  onCancel: PropTypes.func,
  onDuplicate: PropTypes.func,
  onResize: PropTypes.func,
};
