import React, { useEffect, useState } from 'react';
import { SegmentedControl } from '@bubbles-ui/components';
import { VIEWNAMESGROUP_PROPTYPES } from './ViewNamesGroup.constants';

const ViewNamesGroup = ({ messages, views, current, onChange, classes }) => {
  const [value, setValue] = useState(current);
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    if (messages && views && views.length > 1) {
      views.forEach((name) => newData.push({ label: messages[name], value: name }));
    }
    setData(newData);
  }, [messages, views]);

  useEffect(() => setValue(current), [current]);

  const handleOnChange = (val) => {
    setValue(val);
    if (typeof onChange === 'function') onChange(val);
  };

  if (current && messages && views && data.length > 0) {
    return (
      <SegmentedControl
        value={value}
        onChange={handleOnChange}
        data={data}
        classNames={{
          root: classes.viewItemGroup,
          label: classes.viewItemLabel,
          labelActive: classes.viewItemLabelActive,
          control: classes.viewItemControl,
          controlActive: classes.viewItemControlActive
        }}
      />
    );
  }
  return null;
};

ViewNamesGroup.propTypes = VIEWNAMESGROUP_PROPTYPES;

export default ViewNamesGroup;
export { ViewNamesGroup };
