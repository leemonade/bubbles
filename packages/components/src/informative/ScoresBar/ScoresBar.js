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

const ScoresBar = ({
  data,
  minimumGrade,
  gradeSystem,
  variant,
  withMarker,
  markerLegend,
  ...props
}) => {
  const { classes, cx } = ScoresBarStyles({ withMarker }, { name: 'ScoresBar' });
  const isMultiColor = variant === 'multicolor';
  const [bottomAxisSelector, setBottomAxisSelector] = React.useState(0);

  const getData = () => {
    let dataToShow = [
      { score: 0 },
      { score: 1 },
      { score: 2 },
      { score: 3 },
      { score: 4 },
      { score: 5 },
      { score: 6 },
      { score: 7 },
      { score: 8 },
      { score: 9 },
      { score: 10 },
    ];

    let highestPercentage = 0;
    dataToShow = dataToShow.map(({ score }) => {
      const gradeCount = data.filter(({ grade }) => score === Math.round(grade)).length;

      const lastPercentage = (gradeCount / data.length) * 10;

      if (lastPercentage > highestPercentage) {
        highestPercentage = lastPercentage;
      }

      return { score, scoreValue: lastPercentage };
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

  const CustomBarComponent = ({ bar, ...props }) => {
    const getColor = () => {
      if (bar.index < minimumGrade) {
        return isMultiColor ? '#DC5571' : COLORS.uiBackground05;
      }
      if (bar.index === minimumGrade) {
        return isMultiColor ? '#E8C642' : COLORS.uiBackground05;
      }
      return isMultiColor ? '#50B579' : COLORS.uiBackground05;
    };

    return (
      <g transform={`translate(${bar.x}, ${bar.y})`}>
        {bar.width > 0 && (
          <g>
            <rect
              width={bar.width > 34 ? bar.width - 34 : 0}
              height={bar.height}
              fill={bar.color}
            />
            <rect
              x={bar.width > 34 ? bar.width - 34 : 0}
              width={34}
              height={bar.height}
              fill={getColor()}
            />
            <text
              x={bar.width > 34 ? bar.width - 17 : 17}
              y={bar.height / 2}
              textAnchor="middle"
              dominantBaseline={'central'}
              className={classes.label}
            >
              {props.label}
            </text>
          </g>
        )}
      </g>
    );
  };

  return (
    <Box className={classes.root}>
      <ResponsiveBar
        data={getData()}
        minValue={0}
        maxValue={
          SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector][
            SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector].length - 1
          ]
        }
        layout="horizontal"
        barComponent={CustomBarComponent}
        keys={['scoreValue']}
        indexBy="score"
        margin={{ right: 20, bottom: 25, left: 50 }}
        padding={0.12}
        valueFormat={(value) => `${Math.round((value / 10) * data.length)}`}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickValues: SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector],
          format: (value) => `${value * 10}%`,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 32,
        }}
        markers={[
          {
            axis: 'y',
            value: minimumGrade - 1,
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
        gridXValues={SCORES_BAR_BOTTOM_AXIS[bottomAxisSelector]}
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
