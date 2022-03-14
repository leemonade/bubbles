import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Button,
  ActionButton,
  Modal,
  Stack,
  Text,
  Box,
  Select,
  Pager,
  TextInput,
  ImageLoader,
  FileIcon,
  COLORS,
  InputWrapper,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  useId,
} from '@bubbles-ui/components';
import { ModalCompStyles } from './ModalComp.styles';
import { AddCircleIcon, SearchIcon, DownloadIcon } from '@bubbles-ui/icons/outline/';
import { PluginLeebraryIcon } from '@bubbles-ui/icons/solid/';

export const MODALCOMP_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const MODALCOMP_INPUT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const MODALCOMP_DEFAULT_PROPS = {
  labels: {
    input: '',
    select: '',
  },
  description: '',
  help: '',
  error: '',
  size: MODALCOMP_INPUT_SIZES[1],
  orientation: MODALCOMP_INPUT_ORIENTATIONS[0],
  required: false,
};

export const MODALCOMP_PROP_TYPES = {
  labels: PropTypes.shape({
    input: PropTypes.string,
    select: PropTypes.string,
  }),
  ...INPUT_WRAPPER_SHARED_PROPS,
};

const ModalComp = ({ labels, description, size, help, error, orientation, required, ...props }) => {
  const [isOpened, setIsOpened] = useState(true);

  const LibraryItem = (name, image, fileExtension, fileType, date) => {
    return (
      <Stack className={classes.itemRoot} alignItems="center">
        <Box className={classes.imageWrapper}>
          <ImageLoader src={image} height={40} width={40} radius={4} />
          <Box className={classes.iconWrapper}>
            <FileIcon fileType={fileType} size={12} color={COLORS.text03} />
          </Box>
        </Box>
        <Text color="primary" className={classes.itemName}>{`${name}.${fileExtension}`}</Text>
        <Stack spacing={3} justifyContent="center" className={classes.extensionDateWrapper}>
          <Text className={classes.itemExtension}>{`.${fileExtension}`}</Text>
          <Text className={classes.itemDate}>{date}</Text>
        </Stack>
        <Box className={classes.itemAction}>
          <ActionButton icon={<DownloadIcon height={16} width={16} label="Insert" />} />
        </Box>
      </Stack>
    );
  };

  const getLibraryItems = () => {
    const items = [
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
      {
        name: 'Forrarmesa',
        image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
        fileExtension: 'pdf',
        fileType: 'audio',
        date: '2022-06-12',
      },
    ];

    return items.map((item, index) =>
      LibraryItem(item.name, item.image, item.fileExtension, item.fileType, item.date)
    );
  };

  const uuid = useId();
  const { classes, cx } = ModalCompStyles({});
  return (
    <>
      <InputWrapper
        uuid={uuid}
        size={size}
        label={labels.input}
        description={description}
        help={help}
        error={error}
        required={required}
      >
        <Box>
          <Button
            size="xs"
            variant="light"
            leftIcon={<AddCircleIcon height={16} width={16} />}
            onClick={() => setIsOpened(true)}
          >
            {labels.select}
          </Button>
        </Box>
      </InputWrapper>
      <Modal
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        padding={0}
        styles={{
          title: { display: 'flex', alignItems: 'center' },
          close: { color: COLORS.text05, height: 32, width: 32 },
          modal: { minWidth: '48%' },
          header: { margin: 0, padding: 16 },
        }}
        title={
          <Stack className={classes.header} spacing={2} alignItems={'center'}>
            <ActionButton leftIcon={<PluginLeebraryIcon height={20} width={20} />} />
            <Text className={classes.title}>{'Library'}</Text>
          </Stack>
        }
      >
        <Stack spacing={2} fullWidth alignItems="center" className={classes.searchRow}>
          <Select data={[]} />
          <TextInput style={{ flex: 1 }} rightSection={<SearchIcon />} />
          <Button size="sm">Search</Button>
        </Stack>
        <Stack
          fullWidth
          direction="column"
          alignItems="center"
          spacing={3}
          className={classes.listWrapper}
        >
          <Box style={{ width: '100%' }}>
            <Text size="md" align="left" strong>
              {'Found 32 items'}
            </Text>
          </Box>
          <Stack
            direction="column"
            fullWidth
            justifyContent="start"
            className={classes.libraryItemList}
          >
            {getLibraryItems()}
          </Stack>
          <Pager />
        </Stack>
      </Modal>
    </>
  );
};

ModalComp.defaultProps = MODALCOMP_DEFAULT_PROPS;

ModalComp.propTypes = MODALCOMP_PROP_TYPES;

export { ModalComp };
