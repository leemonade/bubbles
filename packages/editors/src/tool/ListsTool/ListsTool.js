import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { ListTool } from '../ListTool/ListTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const LISTS_TOOL_DEFAULT_PROPS = {
  unordered: true,
  ordered: true,
  labels: {
    unordered: 'Unordered list',
    ordered: 'Ordered list',
  },
};

export const LISTS_TOOL_PROP_TYPES = {
  unordered: PropTypes.bool,
  ordered: PropTypes.bool,
  labels: PropTypes.shape({
    unordered: PropTypes.string,
    ordered: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const ListsTool = ({ unordered, ordered, labels, children }) => (
  <ButtonGroup>
    {unordered && <ListTool label={labels.unordered} />}
    {ordered && <ListTool label={labels.ordered} type="ordered" />}
    {children}
  </ButtonGroup>
);

ListsTool.defaultProps = LISTS_TOOL_DEFAULT_PROPS;
ListsTool.propTypes = LISTS_TOOL_PROP_TYPES;

ListsTool.extensions = mergeExtensions(ListTool);

export { ListsTool };
