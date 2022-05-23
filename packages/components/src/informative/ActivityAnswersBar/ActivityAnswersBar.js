import React, { useEffect, useState } from 'react';
import { Box } from '../../layout';
import { Select } from '../../form';
import { ResponsiveBar } from '@nivo/bar';
import { ActivityAnswersBarStyles } from './ActivityAnswersBar.styles';
import {
  ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS,
  ACTIVITY_ANSWERS_BAR_PROP_TYPES,
} from './ActivityAnswersBar.constants';
import { groupBy } from 'lodash';

const ActivityAnswersBar = ({ data, selectables, ...props }) => {
  const [selectedGroup, setSelectedGroup] = useState(selectables[0].value);
  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    const groupedData = groupBy(data, selectedGroup);
    const newData = Object.keys(groupedData).map((key) => {
      return {
        [selectedGroup]: key,
        OK: groupedData[key].filter((item) => item.status === 'OK').length,
        KO: groupedData[key].filter((item) => item.status === 'KO').length,
      };
    });
    setRenderedData(newData);
  }, [selectedGroup]);

  const { classes, cx } = ActivityAnswersBarStyles({}, { name: 'ActivityAnswersBar' });
  return (
    <Box className={classes.root}>
      <Select data={selectables} value={selectedGroup} onChange={setSelectedGroup} />
      <Box style={{ width: '100%', height: 200 }}>
        <ResponsiveBar
          enableGridX={true}
          enableGridY={false}
          maxValue={data.length}
          keys={['OK', 'KO']}
          layout="horizontal"
          data={renderedData}
          indexBy={selectedGroup}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 32,
          }}
          margin={{ right: 20, bottom: 25, left: 100, top: 20 }}
        />
      </Box>
    </Box>
  );
};

ActivityAnswersBar.defaultProps = ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS;
ActivityAnswersBar.propTypes = ACTIVITY_ANSWERS_BAR_PROP_TYPES;

export { ActivityAnswersBar };
