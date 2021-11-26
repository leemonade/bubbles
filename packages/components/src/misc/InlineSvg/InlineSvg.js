import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { InlineSvgStyles } from './InlineSvg.styles';

export const InlineSvg = ({ src, className, strokeCurrent, fillCurrent, style }) => {
  const [svg, setSvg] = useState(null);
  const [goodSvg, setGoodSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (src) {
      fetch(src)
        .then((res) => res.text())
        .then((svgText) => {
          if (mounted) setSvg(svgText);
        })
        .catch((err) => {
          if (mounted) setIsErrored(err);
        })
        .then(() => {
          if (mounted) setIsLoaded(true);
        });
    }
    return () => {
      mounted = false;
    };
  }, [src]);

  useEffect(() => {
    if (svg) {
      const hasStroke = strokeCurrent || (className && className.indexOf('stroke-current') >= 0);
      const hasFill = fillCurrent || (className && className.indexOf('fill-current') >= 0);

      let str = svg;
      if (hasStroke) str = str.replaceAll(/stroke=".+?"/gi, 'stroke="currentColor"');
      if (hasFill) str = str.replaceAll(/fill=".+?"/gi, 'fill="currentColor"');

      setGoodSvg(str);
    }
  }, [svg, className, strokeCurrent, fillCurrent]);

  const { classes, cx } = InlineSvgStyles({});

  return (
    <Box
      className={cx(
        classes.root,
        { [classes.loaded]: isLoaded },
        { [classes.loading]: !isLoaded },
        { [classes.errored]: isErrored },
        className
      )}
      style={style}
      dangerouslySetInnerHTML={{ __html: goodSvg }}
    />
  );
};

InlineSvg.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
