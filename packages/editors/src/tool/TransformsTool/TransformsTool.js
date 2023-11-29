import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { BoldTool } from '../BoldTool/BoldTool';
import { ItalicTool } from '../ItalicTool/ItalicTool';
import { UnderlineTool } from '../UnderlineTool/UnderlineTool';
import { StrikeTool } from '../StrikeTool/StrikeTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const TRANSFORMSTOOL_DEFAULT_PROPS = {
  bold: true,
  italic: true,
  underline: true,
  strike: true,
  labels: {
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    strike: 'Strike',
  },
};

export const TRANSFORMSTOOL_PROP_TYPES = {
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strike: PropTypes.bool,
  labels: PropTypes.shape({
    bold: PropTypes.string,
    italic: PropTypes.string,
    underline: PropTypes.string,
    strike: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const TransformsTool = ({ bold, italic, underline, strike, labels, children }) => (
  <ButtonGroup>
    {bold && <BoldTool label={labels.bold} />}
    {italic && <ItalicTool label={labels.italic} />}
    {underline && <UnderlineTool label={labels.underline} />}
    {strike && <StrikeTool label={labels.strike} />}
    {children}
  </ButtonGroup>
);

TransformsTool.defaultProps = TRANSFORMSTOOL_DEFAULT_PROPS;
TransformsTool.propTypes = TRANSFORMSTOOL_PROP_TYPES;

TransformsTool.extensions = mergeExtensions(BoldTool, ItalicTool, UnderlineTool, StrikeTool);

export { TransformsTool };
