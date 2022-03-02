import PropTypes from 'prop-types';

export const LIBRARY_FORM_DEFAULT_PROPS = {
  asset: {},
  labels: {
    title: '',
    featuredImage: '',
    tags: '',
    addTag: '',
    changeImage: '',
    uploadButton: '',
    submitForm: '',
    name: '',
    description: '',
  },
  placeholders: {
    tagsInput: '',
    name: '',
    description: '',
    color: '',
  },
  errorMessages: {
    name: '',
    file: '',
    tags: '',
  },
  tagSuggestions: [],
};
export const LIBRARY_FORM_PROP_TYPES = {
  labels: PropTypes.shape({
    title: PropTypes.string,
    featuredImage: PropTypes.string,
    tags: PropTypes.string,
    addTag: PropTypes.string,
    changeImage: PropTypes.string,
    uploadButton: PropTypes.string,
    submitForm: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  placeholders: PropTypes.shape({
    tagsInput: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
  }),
  helps: PropTypes.shape({}),
  descriptions: PropTypes.shape({}),
  errorMessages: PropTypes.shape({
    name: PropTypes.string,
    file: PropTypes.string,
    tags: PropTypes.string,
  }),
  asset: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    fileExtension: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.string,
    cover: PropTypes.string,
    color: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  onSubmit: PropTypes.func,
  tagSuggestions: PropTypes.arrayOf(PropTypes.string),
};
