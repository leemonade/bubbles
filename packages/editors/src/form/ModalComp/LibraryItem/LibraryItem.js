import PropTypes from 'prop-types';
import {
  ActionButton,
  Stack,
  Text,
  Box,
  ImageLoader,
  FileIcon,
  COLORS,
} from '@bubbles-ui/components';
import { LibraryItemStyles } from './LibraryItem.styles';
import { DownloadIcon } from '@bubbles-ui/icons/outline/';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid/';
import isFunction from 'lodash/isFunction';

export const MODALCOMP_DEFAULT_PROPS = {
  selected: false,
};

export const MODALCOMP_PROP_TYPES = {
  card: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    fileExtension: PropTypes.string,
    fileType: PropTypes.string,
    date: PropTypes.string,
  }),
  onInsert: PropTypes.func,
  onRemove: PropTypes.func,
  selected: PropTypes.bool,
};

const LibraryItem = ({
  card: { title, image, fileExtension, fileType, date },
  onInsert,
  onRemove,
  selected,
  ...props
}) => {
  const onInsertHandler = () => {
    isFunction(onInsert) && onInsert();
  };
  const onRemoveHandler = () => {
    isFunction(onRemove) && onRemove();
  };

  const { classes, cx } = LibraryItemStyles({ selected });
  return (
    <Stack className={classes.root} alignItems="center" fullWidth>
      <Box className={classes.imageWrapper}>
        <ImageLoader src={image} height={40} width={40} radius={4} />
        <Box className={classes.iconWrapper}>
          <FileIcon fileType={fileType} size={12} color={COLORS.text03} />
        </Box>
      </Box>
      <Text color="primary" className={classes.name}>{`${title}.${fileExtension}`}</Text>
      {!selected && (
        <Stack spacing={3} justifyContent="center" className={classes.extensionDateWrapper}>
          <Text className={classes.extension}>{`.${fileExtension}`}</Text>
          <Text className={classes.date}>{date}</Text>
        </Stack>
      )}
      <Box className={classes.action}>
        {selected ? (
          <ActionButton icon={<DeleteBinIcon height={16} width={16} />} onClick={onRemoveHandler} />
        ) : (
          <ActionButton
            label="Insert"
            icon={<DownloadIcon height={16} width={16} />}
            onClick={onInsertHandler}
          />
        )}
      </Box>
    </Stack>
  );
};

LibraryItem.defaultProps = MODALCOMP_DEFAULT_PROPS;
LibraryItem.propTypes = MODALCOMP_PROP_TYPES;

export { LibraryItem };
