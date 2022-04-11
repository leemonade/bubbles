import React from 'react';
import { Box } from '../../layout';
import { COLORS } from '../../theme.tokens';
import { ResponsiveBar } from '@nivo/bar';
import { ScoresBarStyles } from './ScoresBar.styles';
import { SCORES_BAR_DEFAULT_PROPS, SCORES_BAR_PROP_TYPES } from './ScoresBar.constants';

const ScoresBar = ({ data, minimumGrade, variant, withMarker, ...props }) => {
  const { classes, cx } = ScoresBarStyles({ withMarker }, { name: 'ScoresBar' });
  const dataToShow = [...data];

  const isMultiColor = variant === 'multicolor';

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

  if (withMarker) {
    dataToShow.splice(minimumGrade, 0, { score: '' });
    dataToShow.join();
  }

  console.log(dataToShow);

  return (
    <Box className={classes.root}>
      <ResponsiveBar
        data={dataToShow}
        minValue={0}
        maxValue={10}
        layout="horizontal"
        barComponent={CustomBarComponent}
        keys={['scoreValue']}
        indexBy="score"
        margin={{ right: 20, bottom: 25, left: 50 }}
        padding={0.1}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickValues: [0, 2.5, 5, 7.5, 10],
          format: (value) => `${value * 10}%`,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 32,
        }}
        enableGridX={true}
        enableGridY={false}
        gridXValues={[0, 2.5, 5, 7.5, 10]}
        markers={[
          {
            axis: 'y',
            value: minimumGrade,
            lineStyle: { stroke: COLORS.fatic03, strokeWidth: 2 },
          },
        ]}
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
        }}
        layers={['axes', 'bars', 'grid', 'markers']}
      />
    </Box>
  );
};

ScoresBar.defaultProps = SCORES_BAR_DEFAULT_PROPS;
ScoresBar.propTypes = SCORES_BAR_PROP_TYPES;

export { ScoresBar };
