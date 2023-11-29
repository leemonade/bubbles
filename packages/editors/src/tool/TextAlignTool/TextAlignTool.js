import PropTypes from 'prop-types';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import {
  EditorJustifiedAlignIcon,
  EditorLeftAlignIcon,
  EditorRightAlignIcon,
  EditorCenterAlignIcon,
} from '@bubbles-ui/icons/solid';
import React, { useContext } from 'react';
import { Button } from '../../form/Button';
import { ButtonGroup } from '../../form/ButtonGroup';
import { TextEditorContext } from '../../form/TextEditorProvider';

export const TEXTALIGN_TOOL_DEFAULT_PROPS = {
  left: true,
  center: true,
  right: true,
  justify: true,
  labels: {
    left: 'Align left',
    center: 'Align center',
    justify: 'Justify text',
    right: 'Align right',
  },
};

export const TEXTALIGN_TOOL_PROP_TYPES = {
  left: PropTypes.bool,
  center: PropTypes.bool,
  justify: PropTypes.bool,
  right: PropTypes.bool,
  labels: PropTypes.shape({
    left: PropTypes.string,
    center: PropTypes.string,
    justify: PropTypes.string,
    right: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const TextAlignTool = ({ left, center, justify, right, labels, children, ...props }) => {
  const { editor } = useContext(TextEditorContext);

  const onClickHandler = (align) => {
    editor.chain().focus().setTextAlign(align).run();
  };

  return (
    <ButtonGroup {...props}>
      {left && (
        <Button
          label={labels.left}
          icon={<EditorLeftAlignIcon height={16} width={16} />}
          actived={editor?.isActive({ textAlign: 'left' })}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('left')}
        ></Button>
      )}
      {center && (
        <Button
          label={labels.center}
          icon={<EditorCenterAlignIcon height={16} width={16} />}
          actived={editor?.isActive({ textAlign: 'center' })}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('center')}
        ></Button>
      )}
      {justify && (
        <Button
          label={labels.justify}
          icon={<EditorJustifiedAlignIcon height={16} width={16} />}
          actived={editor?.isActive({ textAlign: 'justify' })}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('justify')}
        ></Button>
      )}
      {right && (
        <Button
          label={labels.right}
          icon={<EditorRightAlignIcon height={16} width={16} />}
          actived={editor?.isActive({ textAlign: 'right' })}
          disabled={editor?.isActive('codeBlock')}
          onClick={() => onClickHandler('right')}
        ></Button>
      )}
      {children}
    </ButtonGroup>
  );
};

TextAlignTool.defaultProps = TEXTALIGN_TOOL_DEFAULT_PROPS;
TextAlignTool.propTypes = TEXTALIGN_TOOL_PROP_TYPES;
TextAlignTool.extensions = [
  Heading,
  TextAlign.configure({
    types: ['heading', 'paragraph', 'library'],
  }),
];

export { TextAlignTool };
