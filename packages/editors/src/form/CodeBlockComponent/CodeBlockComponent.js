import { useContext, useEffect, useRef, useState } from 'react';
import { listLanguages } from 'lowlight/lib/core';
import { Paper, Stack, IconButton, Select } from '@bubbles-ui/components';
import { NodeViewWrapper, NodeViewContent, getText } from '@tiptap/react';
import { EditWriteIcon, DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { TextEditorContext } from '../TextEditorProvider';

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

export const CodeBlockComponent = ({ ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const codeBlockRef = useRef(null);
  const { current } = codeBlockRef;
  const parentNode = current?.parentNode;
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const shouldShowMenu = parentNode?.className.includes('has-focus');

  const removeHandler = () => {
    editor?.chain().focus().toggleCodeBlock().run();
  };

  const onChangeHandler = (value) => {
    editor.commands.updateAttributes('codeBlock', { language: value });
  };

  const data = [
    { value: 'auto', label: 'auto' },
    ...listLanguages().filter((lang) => COMMON_LANGUAGE_LIST.includes(lang)),
  ];

  return (
    <NodeViewWrapper ref={codeBlockRef} className="code-block">
      <pre>
        <NodeViewContent as="code" />
      </pre>
      <Paper
        padding={1}
        shadow="level100"
        style={{
          opacity: shouldShowMenu ? 1 : dropdownOpened ? 1 : 0,
          transition: 'opacity 0.1s',
        }}
      >
        <Stack spacing={2}>
          <IconButton size="xs" icon={<EditWriteIcon height={20} width={20} />} />
          <Select
            size="xs"
            defaultValue="auto"
            data={data}
            zIndex={9999}
            onDropdownOpen={() => {
              setDropdownOpened(true);
            }}
            onDropdownClose={() => {
              parentNode.className += ' has-focus';
              setDropdownOpened(false);
            }}
            style={{ marginBottom: 0 }}
            onChange={onChangeHandler}
          />
          <IconButton
            size="xs"
            icon={<DeleteBinIcon height={20} width={20} />}
            onClick={removeHandler}
          />
        </Stack>
      </Paper>
    </NodeViewWrapper>
  );
};
