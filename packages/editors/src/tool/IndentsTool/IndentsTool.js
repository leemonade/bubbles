import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { IndentTool } from '../IndentTool/IndentTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const INDENTS_TOOL_DEFAULT_PROPS = {
  indent: true,
  outdent: true,
  labels: {
    indent: 'Indent',
    outdent: 'Outdent',
  },
};

export const INDENTS_TOOL_PROP_TYPES = {
  indent: PropTypes.bool,
  outdent: PropTypes.bool,
  labels: PropTypes.shape({
    indent: PropTypes.string,
    outdent: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const IndentsTool = ({ indent, outdent, labels, children }) => {
  return (
    <ButtonGroup>
      {indent && <IndentTool label={labels.indent} />}
      {outdent && <IndentTool type={'outdent'} label={labels.outdent} />}
      {children}
    </ButtonGroup>
  );
};

IndentsTool.defaultProps = INDENTS_TOOL_DEFAULT_PROPS;
IndentsTool.propTypes = INDENTS_TOOL_PROP_TYPES;
IndentsTool.extensions = mergeExtensions(IndentTool);

export { IndentsTool };
