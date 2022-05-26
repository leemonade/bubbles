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

const MARGIN_FOR_CHAR = 5.5;

const ActivityAnswersBar = ({ data, selectables, labels, barHeight, styles, ...props }) => {
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
      renderedData.length * barHeight + 45 + (renderedData.length + 2) * barHeight * 0.1
    );
  }, [renderedData, barHeight]);

  const { classes, cx } = ActivityAnswersBarStyles(
    { styles, graphicHeight },
    { name: 'ActivityAnswersBar' }
  );
  return (
    <Box className={classes.root}>
      <Select
        data={selectables}
        value={selectedGroup}
        onChange={setSelectedGroup}
        style={{ width: 150, marginLeft: 10 }}
      />
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
          layers={['axes', 'bars', 'grid', 'markers']}
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
            bottom: 25,
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
          }}
        />
      </Box>
    </Box>
  );
};

ActivityAnswersBar.defaultProps = ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS;
ActivityAnswersBar.propTypes = ACTIVITY_ANSWERS_BAR_PROP_TYPES;

export { ActivityAnswersBar };