import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/';
import { LinkTool } from '../';
import { mergeExtensions } from '../../utils/merge-extensions';

export const LEEMONS_TOOL_DEFAULT_PROPS = {
  link: true,
  tags: true,
  todo: true,
  labels: {
    link: 'Links',
    tags: 'Tags',
    todo: 'Todo',
  },
};

export const LEEMONS_TOOL_PROP_TYPES = {
  link: PropTypes.bool,
  tags: PropTypes.bool,
  todo: PropTypes.bool,
  labels: PropTypes.shape({
    link: PropTypes.string,
    tags: PropTypes.string,
    todo: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const LeemonsTool = ({ link, tags, todo, labels, children }) => {
  return (
    <ButtonGroup>
      {link && <LinkTool label={labels.link} />}
      {/* {tags && <></>}
      {todo && <></>} */}
      {children}
    </ButtonGroup>
  );
};

LeemonsTool.defaultProps = LEEMONS_TOOL_DEFAULT_PROPS;
LeemonsTool.propTypes = LEEMONS_TOOL_PROP_TYPES;

LeemonsTool.extensions = mergeExtensions(LinkTool);

export { LeemonsTool };
