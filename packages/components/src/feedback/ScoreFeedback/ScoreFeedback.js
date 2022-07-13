import React from 'react';
import { Box } from '../../layout';
import { Calification } from '../../informative';
import { ScoreFeedbackStyles } from './ScoreFeedback.styles';
import { SCORE_FEEDBACK_DEFAULT_PROPS, SCORE_FEEDBACK_PROP_TYPES } from './ScoreFeedback.constants';

const ScoreFeedback = ({ calification, children, styles, className, useAria, ...props }) => {
  const { classes, cx } = ScoreFeedbackStyles({ styles }, { name: 'ScoreFeedback' });

  return (
    // Role is left empty, it should be 'comment' but the role is proposed for WAI-ARIA 1.3, which is still being drafted.
    <Box className={cx(classes.root, className)} role={useAria ? '' : ''}>
      <Calification
        {...calification}
        inverted={true}
        orientation="vertical"
        styles={{
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          div: {
            '&:last-of-type': {
              borderTopLeftRadius: 'inherit',
            },
            '&:first-of-type': {
              borderBottomLeftRadius: 'inherit',
            },
          },
        }}
      />
      <Box className={classes.children}>{children}</Box>
    </Box>
  );
};

ScoreFeedback.defaultProps = SCORE_FEEDBACK_DEFAULT_PROPS;
ScoreFeedback.propTypes = SCORE_FEEDBACK_PROP_TYPES;

export { ScoreFeedback };
