import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BubbleMenuStyles } from './BubbleMenu.styles';
import { Paper, Stack, IconButton, Select } from '@bubbles-ui/components';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { EditWriteIcon, DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';

export const BUBBLEMENU_DEFAULT_PROPS = {};

export const BUBBLEMENU_PROP_TYPES = {};

const BubbleMenu = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const { classes, cx } = BubbleMenuStyles({});

  const shouldShowHandler = ({ editor }) => {
    if (editor.isActive('image')) {
      return true;
    }
    if (editor.isActive('cardExtension')) {
      return true;
    }
    return false;
  };

  const removeHandler = () => {
    if (editor.isActive('cardExtension')) {
      editor?.chain().focus().unsetCard().run();
    }
  };

  const getData = () => {
    return [
      { value: 'card', label: 'Show as card' },
      { value: 'fullwidth', label: 'Full width' },
    ];
  };

  const getOnChangeHandler = (value) => {};

  return (
    <BubbleMenuTipTap
      editor={editor}
      shouldShow={shouldShowHandler}
      tippyOptions={{ duration: 100, placement: 'bottom-start', zIndex: 1000 }}
    >
      <Paper padding={1} shadow="level100" className={classes.root}>
        <Stack spacing={2}>
          <IconButton size="xs" icon={<EditWriteIcon height={20} width={20} />} />
          <Select
            size="xs"
            defaultValue="auto"
            data={getData()}
            zIndex={9999}
            onChange={getOnChangeHandler}
          />
          <IconButton
            size="xs"
            icon={<DeleteBinIcon height={20} width={20} />}
            onClick={removeHandler}
          />
        </Stack>
      </Paper>
    </BubbleMenuTipTap>
  );
};

BubbleMenu.defaultProps = BUBBLEMENU_DEFAULT_PROPS;
BubbleMenu.propTypes = BUBBLEMENU_PROP_TYPES;

export { BubbleMenu };
