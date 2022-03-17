import PropTypes from 'prop-types';
import { listLanguages } from 'lowlight/lib/core';
import { useContext } from 'react';
import { BubbleMenuStyles } from './BubbleMenu.styles';
import { Paper, Stack, IconButton, Select } from '@bubbles-ui/components';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { EditWriteIcon, DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { BubbleMenu as BubbleMenuTipTap } from '@tiptap/react';

export const BUBBLEMENU_DEFAULT_PROPS = {};

export const BUBBLEMENU_PROP_TYPES = {};

export const COMMON_LANGUAGE_LIST = [
  'javascript',
  'jsx',
  'typescript',
  'basic',
  'c',
  'csharp',
  'css',
  'markdown',
  'java',
  'json',
  'kotlin',
  'less',
  'lua',
  'php',
  'python',
  'ruby',
  'rust',
  'scss',
  'sql',
  'swift',
  'yaml',
  'html',
  'xml',
  'svg',
  'yml',
  'yaml',
  'matlab',
  'perl',
  'powershell',
  'shell',
  'bash',
  'cpp',
  'coffeescript',
  'fsharp',
  'go',
  'haml',
  'haskell',
  'java',
  'julia',
  'kotlin',
  'lua',
  'matlab',
  'objectivec',
  'perl',
  'perl6',
  'php',
  'powershell',
  'python',
  'scala',
  'swift',
  'yaml',
  'yml',
  'abap',
  'cobol',
  'dart',
  'fortran',
];

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
    if (editor.isActive('codeBlock')) {
      return true;
    }
    return false;
  };

  const removeHandler = () => {
    if (editor.isActive('cardExtension')) {
      editor?.chain().focus().unsetCard().run();
    }
    if (editor.isActive('codeBlock')) {
      editor?.chain().focus().toggleCodeBlock().run();
    }
  };

  const getData = () => {
    if (editor?.isActive('codeBlock')) {
      return [
        { value: 'auto', label: 'auto' },
        ...listLanguages().filter((lang) => COMMON_LANGUAGE_LIST.includes(lang)),
      ];
    }
    return [
      { value: 'card', label: 'Show as card' },
      { value: 'fullwidth', label: 'Full width' },
    ];
  };

  return (
    <BubbleMenuTipTap
      editor={editor}
      shouldShow={shouldShowHandler}
      tippyOptions={{ duration: 100, placement: 'bottom-start', zIndex: 1000 }}
    >
      <Paper padding={1} shadow="level100" className={classes.root}>
        <Stack spacing={2}>
          <IconButton size="xs" icon={<EditWriteIcon height={20} width={20} />} />
          <Select size="xs" defaultValue="auto" data={getData()} zIndex={9999} />
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
