import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { BoldTool } from '../../tool/BoldTool/BoldTool';
import { ItalicTool } from '../../tool/ItalicTool/ItalicTool';
import { UnderlineTool } from '../../tool/UnderlineTool/UnderlineTool';
import { StrikeTool } from '../../tool/StrikeTool/StrikeTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const TRANSFORMSTOOL_DEFAULT_PROPS = {
  bold: true,
  italic: true,
  underline: true,
  strike: true,
};

export const TRANSFORMSTOOL_PROP_TYPES = {
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strike: PropTypes.bool,
};

const TransformsTool = ({ bold, italic, underline, strike }) => {
  return (
    <ButtonGroup>
      {bold && <BoldTool />}
      {italic && <ItalicTool />}
      {underline && <UnderlineTool />}
      {strike && <StrikeTool />}
    </ButtonGroup>
  );
};

TransformsTool.defaultProps = TRANSFORMSTOOL_DEFAULT_PROPS;
TransformsTool.propTypes = TRANSFORMSTOOL_PROP_TYPES;

TransformsTool.extensions = mergeExtensions(BoldTool, ItalicTool, UnderlineTool, StrikeTool);

export { TransformsTool };
