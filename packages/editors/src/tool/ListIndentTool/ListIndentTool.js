import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { ListTool } from '../ListTool/ListTool';
import { IndentTool } from '../IndentTool/IndentTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const LISTINDENT_TOOL_DEFAULT_PROPS = {
  unordered: true,
  ordered: true,
  indent: true,
  outdent: true,
  labels: {
    unordered: 'Unordered list',
    ordered: 'Ordered list',
    indent: 'Indent',
    outdent: 'Outdent',
  },
};

export const LISTINDENT_TOOL_PROP_TYPES = {
  unordered: PropTypes.bool,
  ordered: PropTypes.bool,
  indent: PropTypes.bool,
  outdent: PropTypes.bool,
  labels: PropTypes.shape({
    unordered: PropTypes.string,
    ordered: PropTypes.string,
    indent: PropTypes.string,
    outdent: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const ListIndentTool = ({ unordered, ordered, indent, outdent, labels, children }) => (
  <ButtonGroup>
    {unordered && <ListTool label={labels.unordered} />}
    {ordered && <ListTool label={labels.ordered} type="ordered" />}
    {indent && <IndentTool label={labels.indent} />}
    {outdent && <IndentTool type={'outdent'} label={labels.outdent} />}
    {children}
  </ButtonGroup>
);

ListIndentTool.defaultProps = LISTINDENT_TOOL_DEFAULT_PROPS;
ListIndentTool.propTypes = LISTINDENT_TOOL_PROP_TYPES;

ListIndentTool.extensions = mergeExtensions(ListTool, IndentTool);

export { ListIndentTool };
