import React, { useEffect, useState } from 'react';
import { Box } from '../../layout';
import { Select } from '../../form';
import { COLORS } from '../../';
import { ResponsiveBar } from '@nivo/bar';
import { ActivityAnswersBarStyles } from './ActivityAnswersBar.styles';
import {
  ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS,
  ACTIVITY_ANSWERS_BAR_PROP_TYPES,
} from './ActivityAnswersBar.constants';
import { groupBy } from 'lodash';
import { CustomBar } from './CustomBar';
import { CustomLegend } from './CustomLegend';
import { getFontProductive } from '../../theme.mixins';

const MARGIN_FOR_CHAR = 7.8;

const ActivityAnswersBar = ({
  data,
  selectables,
  labels,
  barHeight,
  styles,
  withLegend,
  withSelect = true,
  ...props
}) => {
  const [selectedGroup, setSelectedGroup] = useState(selectables[0].value);
  const [renderedData, setRenderedData] = useState([]);
  const [longestKeyCharacters, setLongestKeyCharacters] = useState(0);
  const [graphicHeight, setGraphicHeight] = useState(0);

  const getMaxValue = () => {
    if (renderedData.length === 0) return 0;
    const highestSumOfScores = Math.max(
      ...renderedData.map(({ OK, KO, null: nullValue }) => OK + KO + nullValue)
    );
    return highestSumOfScores + 1;
  };

  const getLegends = (datum) => {
    if (datum.id === 'OK') return labels.OK;
    if (datum.id === 'KO') return labels.KO;
    if (datum.id === 'null') return labels.null;
  };

  useEffect(() => {
    const groupedData = groupBy(data, selectedGroup);
    const newData = Object.keys(groupedData).map((key) => {
      return {
        [selectedGroup]: key,
        OK: groupedData[key].filter((item) => item.status === 'OK').length,
        KO: groupedData[key].filter((item) => item.status === 'KO').length,
        null: groupedData[key].filter((item) => item.status === null).length,
      };
    });
    const longestKeyCharacters = Math.max(...Object.keys(groupedData).map((key) => key.length));
    setLongestKeyCharacters(longestKeyCharacters);
    setRenderedData(newData);
  }, [selectedGroup, data]);

  useEffect(() => {
    setGraphicHeight(
      renderedData.length * barHeight +
        (withLegend ? 120 : 45) +
        (renderedData.length + 2) * barHeight * 0.1
    );
  }, [renderedData, barHeight, withLegend]);

  const { classes, cx } = ActivityAnswersBarStyles(
    { styles, graphicHeight },
    { name: 'ActivityAnswersBar' }
  );
  return (
    <Box className={classes.root}>
      {withSelect ? (
        <Select
          data={selectables}
          value={selectedGroup}
          onChange={setSelectedGroup}
          style={{ width: 150, marginLeft: 10 }}
        />
      ) : null}

      <Box className={classes.graphicWrapper}>
        <ResponsiveBar
          enableGridX={true}
          enableGridY={false}
          maxValue={getMaxValue()}
          padding={0.1}
          keys={['OK', 'KO', 'null']}
          layout="horizontal"
          data={renderedData}
          indexBy={selectedGroup}
          barComponent={(barData) => CustomBar(barData)}
          colors={['#50B579', '#DC5571', '#B9BEC4']}
          animate={false}
          layers={['axes', 'bars', 'grid', 'markers', 'legends']}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-left',
              direction: 'row',
              justify: false,
              translateX: withLegend ? 0 : -4000,
              translateY: 70,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              symbolSize: 20,
              symbolShape: CustomLegend,
            },
          ]}
          legendLabel={getLegends}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 28,
          }}
          margin={{
            right: 20,
            bottom: withLegend ? 100 : 25,
            left: longestKeyCharacters * MARGIN_FOR_CHAR + 28,
            top: 20,
          }}
          theme={{
            grid: {
              line: {
                strokeDasharray: '4',
                stroke: COLORS.uiBackground03,
                strokeOpacity: 0.4,
              },
            },
            axis: {
              ticks: {
                text: {
                  ...getFontProductive(13),
                },
              },
            },
            legends: {
              text: {
                ...getFontProductive(13),
                fill: COLORS.text04,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

ActivityAnswersBar.defaultProps = ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS;
ActivityAnswersBar.propTypes = ACTIVITY_ANSWERS_BAR_PROP_TYPES;

export { ActivityAnswersBar };
