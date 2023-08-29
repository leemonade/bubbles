import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  COLORS,
  FileIcon,
  IconButton,
  ImageLoader,
  Stack,
  Text,
  TextClamp,
  Title,
} from '@bubbles-ui/components';
import { ExpandDiagonalIcon } from '@bubbles-ui/icons/outline';
import { ControlsPlayIcon } from '@bubbles-ui/icons/solid';
import { NodeViewWrapper } from '@tiptap/react';
import { CardStyles } from './Card.styles';
import { capitalize } from 'lodash';

export const CARD_DEFAULT_PROPS = {
  node: {
    attrs: {
      title: '',
      description: '',
      image: '',
      color: '',
      fileType: '',
    },
  },
};

export const CARD_PROP_TYPES = {
  node: PropTypes.shape({
    attrs: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      color: PropTypes.string,
      fileType: PropTypes.string,
    }),
  }),
};

const Card = ({
  node: {
    attrs: { title, description, image, color, fileType },
  },
}) => {
  const { classes, cx } = CardStyles({ color }, { name: 'CardExtension' });
  return (
    <NodeViewWrapper className="card-extension">
      <Stack className={classes.root} justifyContent="start" fullWidth>
        <Box>
          {image ? (
            <ImageLoader src={image} width={172} height={156} radius={'2px 0px 0px 2px'} />
          ) : (
            <Box className={classes.imagePlaceholder}>
              <FileIcon size={64} fileType={fileType} color={COLORS.text06} hideExtension />
            </Box>
          )}
        </Box>
        <Box className={classes.content}>
          <Box className={classes.color} />
          <Box className={classes.header}>
            <Title order={5} className={classes.title}>
              {title}
            </Title>
            <IconButton
              size="sm"
              style={{ backgroundColor: 'transparent' }}
              icon={<ExpandDiagonalIcon height={24} width={24} />}
            />
            <IconButton
              style={{ backgroundColor: COLORS.interactive01, marginBlock: 4 }}
              icon={<ControlsPlayIcon height={13} width={13} style={{ color: 'white' }} />}
              rounded
            />
          </Box>
          <Box className={classes.description}>
            <TextClamp>
              <Text role="productive">{description}</Text>
            </TextClamp>
          </Box>
          <Box className={classes.footer}>
            <FileIcon
              size={13}
              fileType={fileType}
              color={'#636D7D'}
              label={capitalize(fileType) || 'File'}
              hideExtension
            />
          </Box>
        </Box>
      </Stack>
    </NodeViewWrapper>
  );
};

Card.defaultProps = CARD_DEFAULT_PROPS;

Card.propTypes = CARD_PROP_TYPES;

export { Card };
