import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box as MantineBox } from '@mantine/core';
import { BoxStyles } from './Box.styles';

export const BOX_DEFAULT_PROPS = {};
export const BOX_PROP_TYPES = {
  padding: PropTypes.number,
};

const MANTINE_PROPS = [
  'sx', 'styles', 'classNames',
  'm', 'my', 'mx', 'mt', 'mb', 'ml', 'mr',
  'p', 'py', 'px', 'pt', 'pb', 'pl', 'pr',
  'bg', 'c', 'opacity',
  'ff', 'fz', 'fw', 'lts', 'ta', 'lh', 'fs', 'tt', 'td',
  'w', 'miw', 'maw', 'h', 'mih', 'mah',
  'bgsz', 'bgp', 'bgr', 'bga',
  'pos', 'top', 'left', 'bottom', 'right', 'inset',
  'display'
];

const HTML_PROPS = [
  'id', 
  'dir',
  'lang',
  'role', 
  'slot',
  'style',
  'title',
  'hidden',
  'children',
  'disabled', 
  'tabIndex',
  'unstyled',
  'draggable',
  'translate',
  'spellCheck',
  'contentEditable',
  'dangerouslySetInnerHTML'
];

const Box = forwardRef(({ className, noFlex, skipFlex, padding, ...props }, ref) => {
  const { classes, cx } = BoxStyles({ padding }, { name: 'Box' });

  const validProps = [
    ...HTML_PROPS,
    ...MANTINE_PROPS,
    ...Object.keys(props).filter(propName => {
    return propName.startsWith('data-') || propName.startsWith('on') || propName.startsWith('aria-') || propName.startsWith('mantine-');
  })];

  const filteredProps = Object.keys(props).reduce((result, propName) => {
    if (validProps.includes(propName)) {
      result[propName] = props[propName];
    }
    return result;
  }, {});

  return <MantineBox {...filteredProps} ref={ref} className={cx(classes.root, className)} />;
});

Box.defaultProps = BOX_DEFAULT_PROPS;
Box.propTypes = BOX_PROP_TYPES;

export { Box };
