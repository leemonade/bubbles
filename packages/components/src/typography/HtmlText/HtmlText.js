import React, { useRef, useEffect } from 'react';
import { Box } from '../../layout/Box';
import { HtmlTextStyles } from './HtmlText.styles';
import { HTML_TEXT_DEFAULT_PROPS, HTML_TEXT_PROP_TYPES } from './HtmlText.constants';
import { truncateHtml } from './helpers';

const HtmlText = ({ children, className, truncateLines }) => {
  const { classes, cx } = HtmlTextStyles({}, { name: 'HtmlText' });
  const ref = useRef(null);

  useEffect(() => {
    if (truncateLines > 0 && ref.current) {
      truncateHtml(ref.current, truncateLines);
    }
  }, [truncateLines]);

  return (
    <Box
      ref={ref}
      dangerouslySetInnerHTML={{ __html: children }}
      className={cx(className, classes.root)}
    />
  );
};

HtmlText.defaultProps = HTML_TEXT_DEFAULT_PROPS;
HtmlText.propTypes = HTML_TEXT_PROP_TYPES;

export { HtmlText };
