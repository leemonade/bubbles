import React from 'react';
import { Box } from '../../layout/Box';
import { HtmlTextStyles } from './HtmlText.styles';
import { HTML_TEXT_DEFAULT_PROPS, HTML_TEXT_PROP_TYPES } from './HtmlText.constants';

const HtmlText = ({ children, className }) => {
  const { classes, cx } = HtmlTextStyles({}, { name: 'HtmlText' });

  return (
    <Box dangerouslySetInnerHTML={{ __html: children }} className={cx(className, classes.root)} />
  );
};

HtmlText.defaultProps = HTML_TEXT_DEFAULT_PROPS;
HtmlText.propTypes = HTML_TEXT_PROP_TYPES;

export { HtmlText };
