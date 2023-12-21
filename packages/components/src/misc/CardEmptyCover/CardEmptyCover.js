import React, { useRef, memo } from 'react';
import {
  AssetAudioIcon,
  AssetVideoIcon,
  AssetImageIcon,
  AssetBookmarkIcon,
  Box,
} from '@bubbles-ui/components';
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
import { FileItemDisplay } from '../../informative/FileItemDisplay';
import { AssetDocumentIconSmall } from '../FileIcon/AssetDocumentIcon';
import { AssetScormIcon } from '../FileIcon/AssetScormIcon';

const CardEmptyCover = memo(({ icon, fileType }) => {
  const pairColumnRef = useRef(null);
  const { canvasImage } = useHTMLToCanvas(pairColumnRef, fileType);
  const FileTypeIcon = [
    { key: 'video', value: <AssetVideoIcon height={24} width={24} color={'#878D96'} /> },
    { key: 'audio', value: <AssetAudioIcon height={24} width={24} color={'#878D96'} /> },
    { key: 'image', value: <AssetImageIcon height={24} width={24} color={'#878D96'} /> },
    { key: 'bookmark', value: <AssetBookmarkIcon height={24} width={24} color={'#878D96'} /> },
    { key: 'feedback', value: <AssetFeedbackIcon height={24} width={24} color={'#878D96'} /> },
    { key: 'document', value: <AssetDocumentIconSmall height={18} width={18} color={'#878D96'} /> },
    { key: 'task', value: <AssetTaskIcon height={24} width={24} color={'#878D96'} /> },
    {
      key: 'taskexpress',
      value: <AssetExpressTaskIcon height={24} width={24} color={'#878D96'} />,
    },
    {
      key: 'learningpaths.module',
      value: <AssetModuleIcon height={24} width={24} color={'#878D96'} />,
    },
    {
      key: 'scorm',
      value: <AssetScormIcon height={24} width={24} color={'#878D96'} />,
    },
    {
      key: 'file',
      value: <FileItemDisplay size={18} color={'#878D96'} />,
    },
  ];

  const fileIcon = FileTypeIcon.find(({ key }) => key === fileType);

  const iconToShow = fileIcon?.value || icon;
  const { classes } = CardEmptyCoverStyles();

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
