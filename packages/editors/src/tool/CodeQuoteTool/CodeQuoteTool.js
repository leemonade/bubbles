import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { CodeTool } from '../CodeTool/CodeTool';
import { BlockquoteTool } from '../BlockquoteTool/BlockquoteTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const CODEQUOTE_TOOL_DEFAULT_PROPS = {
  code: true,
  blockquote: true,
  labels: {
    code: 'Code block',
    blockquote: 'Quote block',
  },
};

export const CODEQUOTE_TOOL_PROP_TYPES = {
  code: PropTypes.bool,
  blockquote: PropTypes.bool,
  labels: PropTypes.shape({
    code: PropTypes.string,
    blockquote: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const CodeQuoteTool = ({ code, blockquote, labels, children }) => {
  return (
    <ButtonGroup>
      {code && <CodeTool label={labels.code} />}
      {blockquote && <BlockquoteTool label={labels.blockquote} />}
      {children}
    </ButtonGroup>
  );
};

CodeQuoteTool.defaultProps = CODEQUOTE_TOOL_DEFAULT_PROPS;
CodeQuoteTool.propTypes = CODEQUOTE_TOOL_PROP_TYPES;

CodeQuoteTool.extensions = mergeExtensions(CodeTool, BlockquoteTool);

export { CodeQuoteTool };
