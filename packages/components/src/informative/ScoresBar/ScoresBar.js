import React from 'react';
import { Box } from '../../layout';
import { getFontExpressive } from '../../theme.mixins';
import { COLORS } from '../../theme.tokens';
import { ResponsiveBar } from '@nivo/bar';
import { ScoresBarStyles } from './ScoresBar.styles';
import {
  SCORES_BAR_DEFAULT_PROPS,
  SCORES_BAR_PROP_TYPES,
  SCORES_BAR_BOTTOM_AXIS,
} from './ScoresBar.constants';
import { CustomBar } from './CustomBar';

const ScoresBar = ({
  scores,
  grades,
  minimumGrade,
  variant,
  withMarker,
  markerLegend,
  showLeftLegend,
  showBarPercentage,
  styles,
  className,
  ...props
}) => {
  const { classes, cx } = ScoresBarStyles({ withMarker, styles }, { name: 'ScoresBar' });
  const isMultiColor = variant === 'multicolor';
  const [bottomAxisSelector, setBottomAxisSelector] = React.useState(0);

  const getData = () => {
    let highestPercentage = 0;
    let useLetter = false;
    const dataToShow = grades.map(({ number, letter }) => {
      if (letter) {
        useLetter = true;
      }
      const gradeCount = scores.filter(
        ({ score: studentScore }) => number === Math.round(studentScore)
      ).length;

      const lastPercentage = (gradeCount / scores.length) * 10;

      if (lastPercentage > highestPercentage) {
        highestPercentage = lastPercentage;
      }

      return {
        score: useLetter ? letter : number,
        scoreValue: !showBarPercentage ? lastPercentage : gradeCount,
      };
    });

    if (highestPercentage <= 2.5) {
      if (bottomAxisSelector !== 0) setBottomAxisSelector(0);
    } else if (highestPercentage <= 5) {
      if (bottomAxisSelector !== 1) setBottomAxisSelector(1);
    } else if (highestPercentage <= 10) {
      if (bottomAxisSelector !== 2) setBottomAxisSelector(2);
    }

    return dataToShow;
  };

  const getMarkerValue = () => {
    if (grades[0].letter) {
      return grades[minimumGrade - 1].letter;
    } else {
      return minimumGrade - 1;
    }
  };

  const getMaxValue = () => {
    return !showBarPercentage
      ? SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector][
          SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector].length - 1
        ]
      : scores.length;
  };

  const getTickValues = () => {
    const tickValues = [];
    const tickStep = scores.length / 4;
    for (let i = 0; i < 4; i++) {
      tickValues.push(tickStep * i);
    }
    tickValues.push(scores.length);
    return tickValues;
  };

  const getAxisBottom = () => {
    return !showBarPercentage
      ? {
          tickValues: SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector],
          format: (value) => `${value * 10}%`,
        }
      : { tickValues: getTickValues(), format: (value) => value.toFixed(0) };
  };

  const getXGridValues = () => {
    return !showBarPercentage ? SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector] : getTickValues();
  };

  return (
    <Box className={cx(classes.root, className)}>
      <ResponsiveBar
        data={getData()}
        minValue={0}
        maxValue={getMaxValue()}
        layout="horizontal"
        barComponent={(barData) =>
          CustomBar(barData, minimumGrade, isMultiColor, showBarPercentage, scores.length)
        }
        keys={['scoreValue']}
        indexBy="score"
        margin={{ right: 20, bottom: 25, left: showLeftLegend ? 50 : 20 }}
        padding={0.12}
        valueFormat={(value) =>
          !showBarPercentage ? `${Math.round((value / 10) * scores.length)}` : value
        }
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          ...getAxisBottom(),
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 32,
          format: (value) => (showLeftLegend ? value : ' '),
        }}
        markers={[
          {
            axis: 'y',
            value: getMarkerValue(),
            legend: markerLegend,
            lineStyle: {
              stroke: COLORS.fatic03,
              strokeWidth: 1,
            },
            textStyle: {
              ...getFontExpressive(12),
              textColor: COLORS.text02,
              display: !withMarker && 'none',
              opacity: 0.7,
            },
          },
        ]}
        enableGridX={true}
        enableGridY={false}
        gridXValues={getXGridValues()}
        colorBy="indexValue"
        colors={({ index }) => {
          if (index < minimumGrade) {
            return isMultiColor ? '#C9516C' : COLORS.uiBackground03;
          }
          if (index === minimumGrade) {
            return isMultiColor ? '#D4B641' : COLORS.uiBackground03;
          }
          return isMultiColor ? '#4BA773' : COLORS.uiBackground03;
        }}
        theme={{
          grid: {
            line: {
              strokeDasharray: '4',
              stroke: COLORS.uiBackground03,
              strokeOpacity: 0.4,
            },
          },
          ...getFontExpressive(12),
          textColor: COLORS.text02,
        }}
        layers={['axes', 'bars', 'grid', 'markers']}
      />
    </Box>
  );
};

ScoresBar.defaultProps = SCORES_BAR_DEFAULT_PROPS;
ScoresBar.propTypes = SCORES_BAR_PROP_TYPES;

export { ScoresBar };
