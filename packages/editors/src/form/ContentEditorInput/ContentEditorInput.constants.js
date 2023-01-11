import PropTypes from 'prop-types';
import { TEXT_EDITOR_DEFAULT_TOOLBARS } from '../TextEditorInput/TextEditorInput.constants';

export const CONTENT_EDITOR_INPUT_DEFAULT_PROPS = {
  placeholder: '',
  toolbars: TEXT_EDITOR_DEFAULT_TOOLBARS,
  required: false,
  error: '',
  editorStyles: {},
};
export const CONTENT_EDITOR_INPUT_PROP_TYPES = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  children: PropTypes.element,
  toolbars: PropTypes.shape({
    heading: PropTypes.bool,
    color: PropTypes.bool,
    style: PropTypes.bool,
    align: PropTypes.bool,
    list: PropTypes.bool,
    formulation: PropTypes.bool,
  }),
  editorStyles: PropTypes.object,
  editorClassname: PropTypes.string,
};
