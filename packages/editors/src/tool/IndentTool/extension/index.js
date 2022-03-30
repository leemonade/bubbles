import { Extension } from '@tiptap/core';
import { TextSelection, AllSelection } from 'prosemirror-state';

export function clamp(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

export function isBulletListNode(node) {
  return node.type.name === 'bullet_list';
}

export function isOrderedListNode(node) {
  return node.type.name === 'order_list';
}

export function isTodoListNode(node) {
  return node.type.name === 'todo_list';
}

export function isListNode(node) {
  return isBulletListNode(node) || isOrderedListNode(node) || isTodoListNode(node);
}

function setNodeIndentMarkup(tr, pos, delta) {
  if (!tr.doc) return tr;

  const node = tr.doc.nodeAt(pos);
  if (!node) return tr;

  const minIndent = IndentProps.min;
  const maxIndent = IndentProps.max;

  const indent = clamp((node.attrs.indent || 0) + delta, minIndent, maxIndent);

  if (indent === node.attrs.indent) return tr;

  const nodeAttrs = {
    ...node.attrs,
    indent,
  };

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

function updateIndentLevel(tr, delta) {
  const { doc, selection } = tr;

  if (!doc || !selection) return tr;

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  const { from, to } = selection;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;

    if (nodeType.name === 'paragraph' || nodeType.name === 'heading') {
      tr = setNodeIndentMarkup(tr, pos, delta);
      return false;
    }
    if (isListNode(node)) {
      return false;
    }
    return true;
  });

  return tr;
}

export const Indent =
  Extension.create <
  IndentOptions >
  {
    name: 'indent',

    defaultOptions: {
      types: ['heading', 'paragraph'],
      indentLevels: [0, 40, 80],
      defaultIndentLevel: 0,
    },

    addGlobalAttributes() {
      return [
        {
          types: this.options.types,
          attributes: {
            indent: {
              default: this.options.defaultIndentLevel,
              renderHTML: (attributes) => ({
                style: `margin-left: ${attributes.indent}px!important;`,
              }),
              parseHTML: (element) => ({
                indent: parseInt(element.style.marginLeft) || this.options.defaultIndentLevel,
              }),
            },
          },
        },
      ];
    },

    addCommands() {
      return {
        indent:
          () =>
          ({ tr, state, dispatch }) => {
            const { selection } = state;
            tr = tr.setSelection(selection);
            tr = updateIndentLevel(tr, IndentProps.more);

            if (tr.docChanged) {
              // eslint-disable-next-line no-unused-expressions
              dispatch && dispatch(tr);
              return true;
            }

            return false;
          },
        outdent:
          () =>
          ({ tr, state, dispatch }) => {
            const { selection } = state;
            tr = tr.setSelection(selection);
            tr = updateIndentLevel(tr, IndentProps.less);

            if (tr.docChanged) {
              // eslint-disable-next-line no-unused-expressions
              dispatch && dispatch(tr);
              return true;
            }

            return false;
          },
      };
    },

    addKeyboardShortcuts() {
      return {
        Tab: () => {
          if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList')))
            return this.editor.commands.indent();
          return this.editor.commands.sinkListItem('listItem');
        },
        'Shift-Tab': () => {
          if (!(this.editor.isActive('bulletList') || this.editor.isActive('orderedList')))
            return this.editor.commands.outdent();
          return this.editor.commands.sinkListItem('listItem');
        },
      };
    },
  };
