import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
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
  COLORS,
  InputWrapper,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  useId,
} from '@bubbles-ui/components';
import { ModalCompStyles } from './ModalComp.styles';
import { AddCircleIcon, SearchIcon } from '@bubbles-ui/icons/outline/';
import { PluginLeebraryIcon } from '@bubbles-ui/icons/solid/';
import isFunction from 'lodash/isFunction';
import { LibraryItem } from './LibraryItem/LibraryItem';

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
  value: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    fileExtension: PropTypes.string,
    fileType: PropTypes.string,
    date: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

const LIBRARYITEMS = [
  {
    title: 'Forrarmesa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__480.jpg',
    fileExtension: 'pdf',
    fileType: 'audio',
    date: '2022-06-12',
  },
];

const ModalComp = ({
  labels,
  description,
  size,
  help,
  error,
  orientation,
  required,
  value,
  onChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(value);

  const onInsertHandler = (card) => {
    setIsOpened(false);
    setSelectedCard(card);
    isFunction(onChange) && onChange(card);
  };

  const onRemoveHandler = () => {
    setSelectedCard(null);
    isFunction(onChange) && onChange(null);
  };

  //Funcion temporal hasta que sepa que le entra al componente
  const getLibraryItems = () => {
    const libraryItems = [];
    for (let i = 0; i < 30; i++) {
      libraryItems.push(
        <LibraryItem
          key={i}
          onInsert={() => onInsertHandler(LIBRARYITEMS[0], i)}
          card={LIBRARYITEMS[0]}
        />
      );
    }
    return libraryItems;
  };

  useEffect(() => {
    if (value === selectedCard) return;
    setSelectedCard(value);
  }, [value]);

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
          {!selectedCard ? (
            <Button
              size="xs"
              variant="light"
              leftIcon={<AddCircleIcon height={16} width={16} />}
              onClick={() => setIsOpened(true)}
            >
              {labels.select}
            </Button>
          ) : (
            <LibraryItem card={selectedCard} selected onRemove={onRemoveHandler} />
          )}
        </Box>
      </InputWrapper>
      <Modal
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        padding={0}
        zIndex={9999}
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
