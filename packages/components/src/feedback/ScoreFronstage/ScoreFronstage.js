/* eslint-disable import/no-cycle */
import React from 'react';
import { Box } from '../../layout/Box';
import { ScoreFronstageStyles } from './ScoreFronstage.styles';
import {
  SCORE_FRONSTAGE_DEFAULT_PROPS,
  SCORE_FRONSTAGE_PROP_TYPES,
} from './ScoreFronstage.constants';
import { Average } from './Average/Average';
import { Item } from './Item';
import { Avatar } from '../../informative';
import { ImageLoader } from '../../misc';
import { TextClamp } from '../../typography';

const ScoreFronstage = ({
  title,
  subtitle,
  image,
  icon,
  label,
  score,
  minGrade,
  maxGrade,
  values,
  locale,
  ...props
}) => {
  const { classes } = ScoreFronstageStyles({}, { name: 'ScoreFronstage' });

  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.imageContainer}>
        <Avatar
          image={image}
          size="lg"
          icon={icon ? <ImageLoader src={icon} height={'100%'} forceImage /> : null}
          showIconAndImage
        />
      </Box>
      <Box className={classes.header}>
        <TextClamp lines={1}>
          <Box className={classes.title}>{title}</Box>
        </TextClamp>
        <Box className={classes.subtitle}>{subtitle}</Box>
      </Box>
      <Average label={label} score={score} minGrade={minGrade} maxGrade={maxGrade} />
      <Box className={classes.valuesContainer}>
        {values.map((value) => (
          <Item {...value} key={value.id || value.title} minGrade={minGrade} />
        ))}
      </Box>
    </Box>
  );
};

ScoreFronstage.defaultProps = SCORE_FRONSTAGE_DEFAULT_PROPS;
ScoreFronstage.propTypes = SCORE_FRONSTAGE_PROP_TYPES;
ScoreFronstage.displayName = 'ScoreFronstage';

export default ScoreFronstage;
export { ScoreFronstage };
