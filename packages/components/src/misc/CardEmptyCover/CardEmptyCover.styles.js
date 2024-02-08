/* eslint-disable import/prefer-default-export */
import { createStyles, pxToRem } from '@bubbles-ui/components';

export const CardEmptyCoverStyles = createStyles((theme, { height }) => ({
  emptyStateRoot: {
    height: height ? `${height}px` : '100%',
    width: 'auto',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#f8f9fb',
  },
  mosaicItem: {
    maxHeight: 50,
    width: 'auto',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#f8f9fb',
  },
  oddContainer: {},
  evenContainer: {
    paddingTop: pxToRem(24),
  },
  oddIcon: {
    transform: 'rotate(23deg) scale(0.75)',
    height: 'auto',
    opacity: 0.5,
  },
  evenIcon: {
    transform: 'rotate(-23deg) scale(0.75)',
    height: 'auto',
    opacity: 0.5,
  },
  emptyStateWrapper: {
    backgroundColor: '#f8f9fb',
    height: '100%',
    width: '100%',
    backgroundSize: '17%',
    backgroundAttachment: 'local',
  },
}));
