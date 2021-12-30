import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination as MantinePagination } from '@mantine/core';
import { PagerStyles } from './Pager.styles';
import { Stack } from '../../layout/Stack';
// import { NumberInput } from '../../form/NumberInput';
// import { NumberInput } from '@mantine/core';

export const PAGER_DIRECTIONS = ['column', 'row'];
export const PAGER_DEFAULT_PROPS = {
  total: 10,
  boundaries: 1,
  siblings: 1,
  direction: 'row',
  withGoTo: false,
  withControls: true,
  withEdges: false,
  disabled: false,
};
export const PAGER_PROP_TYPES = {
  total: PropTypes.number,
  boundaries: PropTypes.number,
  siblings: PropTypes.number,
  withGoTo: PropTypes.bool,
  direction: PropTypes.oneOf(PAGER_DIRECTIONS),
  withControls: PropTypes.bool,
  withEdges: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

const Pager = forwardRef(
  (
    {
      total,
      boundaries,
      siblings,
      direction = 'row',
      withGoTo = false,
      withControls,
      withEdges,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = PagerStyles(
      { withGoTo, withControls, withEdges, disabled },
      { name: 'Pager' }
    );

    const inputMaxLenght = total.toString().length;
    const [goToPage, setGoToPage] = React.useState(1);

    const handleGoToPage = (e) => {
      let value = parseInt(e.target.value);

      if (value < 1) {
        setGoToPage(1);
        return;
      }
      if (value > total) {
        setGoToPage(total);
        return;
      }
      setGoToPage(value);
    };

    const onChangeHandler = (e) => {
      if (!disabled) {
        setGoToPage(e);
        onChange(e);
      }
    };

    return (
      <Stack direction={direction} alignItems={'center'}>
        {withGoTo && (
          <Box className={classes.goto}>
            <span className={classes.span}>Go to</span>
            <input
              type={'number'}
              min={1}
              max={total}
              maxLength={inputMaxLenght}
              className={classes.input}
              value={goToPage}
              onChange={(e) => handleGoToPage(e)}
              disabled={disabled}
            />
            {/* NumberInput is not really an input type="number" so im using <input/> instead */}
            {/* <NumberInput hideControls /> */}
          </Box>
        )}
        <MantinePagination
          total={total}
          boundaries={boundaries}
          siblings={siblings}
          {...props}
          ref={ref}
          classNames={classes}
          className={classes.root}
          direction={direction}
          withControls={withControls}
          withEdges={withEdges}
          page={goToPage}
          onChange={(e) => onChangeHandler(e)}
        />
      </Stack>
    );
  }
);

Pager.defaultProps = PAGER_DEFAULT_PROPS;

Pager.propTypes = PAGER_PROP_TYPES;

export { Pager };
