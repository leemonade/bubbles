import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../../form/ButtonGroup/ButtonGroup';
import { TitleTool } from '../../tool/TitleTool/TitleTool';
import { ParagraphTool } from '../../tool/ParagraphTool/ParagraphTool';
import { mergeExtensions } from '../../utils/merge-extensions';

export const HEADINGS_TOOL_DEFAULT_PROPS = {
  title1: true,
  title2: true,
  title3: true,
  paragraph: true,
  labels: {
    title1: 'Title 1',
    title2: 'Title 2',
    title3: 'Title 3',
    paragraph: 'Paragraph',
  },
};

export const HEADINGS_TOOL_PROP_TYPES = {
  title1: PropTypes.bool,
  title2: PropTypes.bool,
  title3: PropTypes.bool,
  paragraph: PropTypes.bool,
  labels: PropTypes.shape({
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    paragraph: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const HeadingsTool = ({ title1, title2, title3, paragraph, labels, children }) => {
  return (
    <ButtonGroup>
      {title1 && <TitleTool label={labels.title1} level={1} />}
      {title2 && <TitleTool label={labels.title2} level={2} />}
      {title3 && <TitleTool label={labels.title3} level={3} />}
      {paragraph && <ParagraphTool label={labels.paragraph} />}
      {children}
    </ButtonGroup>
  );
};

HeadingsTool.defaultProps = HEADINGS_TOOL_DEFAULT_PROPS;
HeadingsTool.propTypes = HEADINGS_TOOL_PROP_TYPES;

HeadingsTool.extensions = mergeExtensions(TitleTool);

export { HeadingsTool };
