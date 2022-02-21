import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Macy from 'macy';
import { Box } from '../Box';
import { MasonryStyles } from './Masonry.styles';

export const MASONRY_DEFAULT_PROPS = {
  margin: 10,
  breakAt: {
    1200: 4,
    940: 3,
    520: 2,
    360: 1,
  },
  fullWidth: true,
};
export const MASONRY_PROP_TYPES = {
  margin: PropTypes.number,
  /** Indicated the columns number at centain breakpoint */
  breakAt: PropTypes.object,
};

export const useMasonry = (containerRef, options, childCount) => {
  const macyRef = useRef();

  useEffect(() => {
    const macyOptions = {
      container: containerRef.current,
      ...options,
    };

    macyRef.current = Macy(macyOptions);

    return () => {
      macyRef.current.remove();
    };
  }, [options, containerRef]);

  useEffect(() => {
    macyRef.current.reInit();
  }, [childCount]);

  return { macy: macyRef.current };
};

const Masonry = ({ children, className, margin, breakAt, fullWidth }) => {
  const containerRef = useRef();
  const childCount = React.Children.count(children);
  const { macy } = useMasonry(containerRef, { margin, breakAt }, childCount);

  const { classes, cx } = MasonryStyles({ fullWidth }, { name: 'Masonry' });

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
        // Checking isValidElement is the safe way
        if (React.isValidElement(child)) {
          const { className, ...rest } = child.props;

          if (child.type === React.Fragment) {
            return <child.type {...rest} key={child.key} ref={child.ref} />;
          } else {
            return (
              <child.type
                {...rest}
                key={child.key}
                ref={child.ref}
                className={cx(classes.item, className)}
              />
            );
          }
        }
        return child;
      }),
    [children]
  );

  return (
    <Box ref={containerRef} className={cx(classes.root, className)}>
      {childrenWithProps}
    </Box>
  );
};

Masonry.defaultProps = MASONRY_DEFAULT_PROPS;
Masonry.propTypes = MASONRY_PROP_TYPES;

export { Masonry };
