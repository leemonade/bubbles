import PropTypes from 'prop-types';
import { ASSET_PROPS } from '../../library/LibraryCard/LibraryCard.constants';

export const ASSET_PLAYER_DEFAULT_PROPS = {
  asset: {},
  height: '100%',
  width: '100%',
  styles: {},
  playing: false,
  showPlayer: false,
  muted: false,
  volume: 1,
  loop: false,
  fullScreen: false,
  nativeControls: false,
  progressInterval: 100,
};
export const ASSET_PLAYER_PROP_TYPES = {
  asset: ASSET_PROPS,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  className: PropTypes.string,
  playing: PropTypes.bool,
  showPlayer: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  loop: PropTypes.bool,
  fullScreen: PropTypes.bool,
  nativeControls: PropTypes.bool,
  progressInterval: PropTypes.number,
};
