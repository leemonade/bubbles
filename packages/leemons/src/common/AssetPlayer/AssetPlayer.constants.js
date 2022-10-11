import PropTypes from 'prop-types';
import { ASSET_PROPS } from '../../library/LibraryCard/LibraryCard.constants';

export const ASSET_PLAYER_DEFAULT_PROPS = {
  asset: {},
  height: 'auto',
  width: '100%',
  styles: {},
  playing: false,
  muted: false,
  volume: 1,
  loop: false,
  fullScreen: false,
  nativeControls: false,
  progressInterval: 100,
  controlBar: true,
  framed: false,
};
export const ASSET_PLAYER_PROP_TYPES = {
  asset: ASSET_PROPS,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  className: PropTypes.string,
  playing: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  loop: PropTypes.bool,
  fullScreen: PropTypes.bool,
  nativeControls: PropTypes.bool,
  progressInterval: PropTypes.number,
  controlBar: PropTypes.bool,
  framed: PropTypes.bool,
};
