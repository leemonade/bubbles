import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { BoldTool } from '../../tool/BoldTool/BoldTool';
import { ItalicTool } from '../../tool/ItalicTool/ItalicTool';
import { UnderlineTool } from '../../tool/UnderlineTool/UnderlineTool';
import { StrikeTool } from '../../tool/StrikeTool/StrikeTool';
import { mergeExtensions } from '../../utils/merge-extensions';

const TransformsTool = ({ bold, italic, underline, strike }) => {
  return (
    <ButtonGroup>
      {bold && <BoldTool />}
      <ItalicTool />
      <UnderlineTool />
      <StrikeTool />
    </ButtonGroup>
  );
};

TransformsTool.defaultProps = {
  bold: true,
};
TransformsTool.extensions = mergeExtensions(BoldTool, ItalicTool, UnderlineTool, StrikeTool);

export { TransformsTool };
