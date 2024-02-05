import React, { useRef, memo, useMemo, cloneElement } from 'react';
import { FileIcon } from '@bubbles-ui/icons/outline';
import { useHTMLToCanvas } from '../../hooks/useHTMLToCanvas';
import { CardEmptyCoverStyles } from './CardEmptyCover.styles';
import {
  CARD_EMPTY_COVER_DEFAULT_PROPS,
  CARD_EMPTY_COVER_PROP_TYPES,
} from './CardEmptyCover.constants';
import { AssetTaskIcon } from '../FileIcon/AssetTaskIcon';
import { AssetExpressTaskIcon } from '../FileIcon/AssetExpressTaskIcon';
import { AssetModuleIcon } from '../FileIcon/AssetModuleIcon';
import { AssetFeedbackIcon } from '../FileIcon/AssetFeedbackIcon';
import { AssetAudioIcon } from '../FileIcon/AssetAudioIcon';
import { AssetVideoIcon } from '../FileIcon/AssetVideoIcon';
import { AssetImageIcon } from '../FileIcon/AssetImageIcon';
import { AssetBookmarkIcon } from '../FileIcon/AssetBookmarkIcon';
import { AssetDocumentIconSmall } from '../FileIcon/AssetDocumentIcon';
import { AssetScormIcon } from '../FileIcon/AssetScormIcon';
import { AssetTestIcon } from '../FileIcon/AssetTestIcon';
import { Box } from '../../layout/Box';

const CardEmptyCover = memo(({ icon, fileType, height }) => {
  const pairColumnRef = useRef(null);
  const { canvasImage } = useHTMLToCanvas(pairColumnRef, fileType);
  const FileTypeIcon = [
    { key: 'video', value: <AssetVideoIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'audio', value: <AssetAudioIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'image', value: <AssetImageIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'bookmark', value: <AssetBookmarkIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'feedback', value: <AssetFeedbackIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'document', value: <AssetDocumentIconSmall height={18} width={18} color={'#878D96'} /> },
    {
      key: 'content-creator',
      value: <AssetDocumentIconSmall height={18} width={18} color={'#878D96'} />,
    },
    { key: 'task', value: <AssetTaskIcon height={18} width={18} color={'#878D96'} /> },
    { key: 'tests', value: <AssetTestIcon height={18} width={18} color={'#878D96'} /> },
    {
      key: 'taskexpress',
      value: <AssetExpressTaskIcon height={18} width={18} color={'#878D96'} />,
    },
    {
      key: 'learningpaths.module',
      value: <AssetModuleIcon height={18} width={18} color={'#878D96'} />,
    },
    {
      key: 'scorm',
      value: <AssetScormIcon height={18} width={18} color={'#878D96'} />,
    },
    {
      key: 'file',
      value: <FileIcon height={18} width={18} color={'#878D96'} />,
    },
  ];

  const styledIcon = useMemo(() => {
    if (!icon) return null;
    return cloneElement(icon, { style: { color: '#878D96' }, color: '#878D96' }) || null;
  }, [icon]);

  const fileIcon = FileTypeIcon.find(({ key }) => key === fileType);
  const iconToShow = fileIcon?.value ?? styledIcon;
  const { classes } = CardEmptyCoverStyles({ height });

  const pairCol = (
    <Box style={{ opacity: 0 }}>
      <Box className={classes.mosaicItem} ref={pairColumnRef}>
        <Box className={classes.oddContainer}>
          <Box className={classes.evenIcon}>{iconToShow}</Box>
        </Box>
        <Box className={classes.evenContainer}>
          <Box className={classes.oddIcon}>{iconToShow}</Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.emptyStateRoot}>
      {!canvasImage && <Box>{pairCol}</Box>}
      {canvasImage && (
        <Box
          className={classes.emptyStateWrapper}
          style={{ backgroundImage: `url(${canvasImage})` }}
        ></Box>
      )}
    </Box>
  );
});

CardEmptyCover.propTypes = CARD_EMPTY_COVER_DEFAULT_PROPS;
CardEmptyCover.propTypes = CARD_EMPTY_COVER_PROP_TYPES;

CardEmptyCover.displayName = 'CardEmptyCover';

export { CardEmptyCover };
