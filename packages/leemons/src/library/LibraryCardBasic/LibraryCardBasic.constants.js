import PropTypes from 'prop-types';
import { ASSET_PROPS } from '../LibraryCard/LibraryCard.constants';

export const LIBRARY_CARD_BASIC_DEFAULT_PROPS = {
  height: 352,
  blur: 5,
};
export const LIBRARY_CARD_BASIC_PROP_TYPES = {
  asset: ASSET_PROPS,
  height: PropTypes.number,
  blur: PropTypes.number,
  chiildren: PropTypes.node,
};
