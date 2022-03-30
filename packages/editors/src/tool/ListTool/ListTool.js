import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { EditorListBulletsIcon, EditorListNumbersIcon } from '@bubbles-ui/icons/solid';
import { Button } from '../../form/Button/Button';

export const LIST_TOOL_TYPES = ['ordered', 'unordered'];

export const LIST_TOOL_DEFAULT_PROPS = {
  type: 'unordered',
};

export const LIST_TOOL_PROP_TYPES = {
  type: PropTypes.oneOf(LIST_TOOL_TYPES),
};

const ListTool = ({ type, ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const isOrdered = type === 'ordered';

  const onClickHandler = () => {
    if (isOrdered) {
      editor?.chain().focus().toggleOrderedList().run();
    } else {
      editor?.chain().focus().toggleBulletList().run();
    }
  };

  return (
    <Button
      {...props}
      icon={
        isOrdered ? (
          <EditorListNumbersIcon height={16} width={16} />
        ) : (
          <EditorListBulletsIcon height={16} width={16} />
        )
      }
      onClick={onClickHandler}
      actived={editor?.isActive(isOrdered ? 'orderedList' : 'bulletList')}
    ></Button>
  );
};

ListTool.defaultProps = LIST_TOOL_DEFAULT_PROPS;
ListTool.propTypes = LIST_TOOL_PROP_TYPES;
ListTool.extensions = [
  BulletList.configure({
    itemTypeName: 'listItem',
  }),
  OrderedList.configure({
    itemTypeName: 'listItem',
  }),
  ListItem,
];

export { ListTool };
