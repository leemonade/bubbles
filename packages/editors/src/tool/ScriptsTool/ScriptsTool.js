import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { SuperscriptTool } from '../../tool/SuperscriptTool/SuperscriptTool';
import { SubscriptTool } from '../../tool/SubscriptTool/SubscriptTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const SCRIPTS_TOOL_DEFAULT_PROPS = {
  superscript: true,
  subscript: true,
  labels: {
    superscript: 'Superscript',
    subcript: 'Subscript',
  },
};

export const SCRIPTS_TOOL_PROP_TYPES = {
  superscript: PropTypes.bool,
  subscript: PropTypes.bool,
  underline: PropTypes.bool,
  strike: PropTypes.bool,
  labels: PropTypes.shape({
    superscript: PropTypes.string,
    subscript: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const ScriptsTool = ({ superscript, subscript, labels, children }) => {
  return (
    <ButtonGroup>
      {superscript && <SuperscriptTool label={labels.superscript} />}
      {subscript && <SubscriptTool label={labels.subscript} />}
      {children}
    </ButtonGroup>
  );
};

ScriptsTool.defaultProps = SCRIPTS_TOOL_DEFAULT_PROPS;
ScriptsTool.propTypes = SCRIPTS_TOOL_PROP_TYPES;
ScriptsTool.extensions = mergeExtensions(SuperscriptTool, SubscriptTool);

export { ScriptsTool };
