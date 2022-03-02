export { LIBRARY_CARD_DEADLINE_PROP_TYPES } from '../Library.constants';

export const validateURL = (props, propName, componentName) => {
  let url;
  const errorString = `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`;
  try {
    url = new URL(props.icon);
  } catch (error) {
    return new Error(errorString);
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return new Error(errorString);
};

export const LIBRARY_CARD_DEADLINE_DEFAULT_PROPS = {
  labels: {
    title: 'Coming soon',
    new: 'New',
    deadline: '',
  },
  locale: 'en',
  isNew: false,
};
