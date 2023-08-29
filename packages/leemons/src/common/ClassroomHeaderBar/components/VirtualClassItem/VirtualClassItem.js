import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { MeetingCameraIcon } from '@bubbles-ui/icons/outline';

const VirtualClassItem = ({
  virtual_classroom,
  virtualClassroomLabel,
  onVirtualClassroomOpen,
  classes,
  cx,
}) => {
  const handleOpenVirtualClassroom = () => {
    onVirtualClassroomOpen();
    window.open(virtual_classroom, '_blank');
  };
  return (
    <Box
      className={cx(classes.infoWrapper, classes.clickable)}
      onClick={handleOpenVirtualClassroom}
    >
      <MeetingCameraIcon height={20} width={20} style={{ minHeight: 20, minWidth: 20 }} />
      <TextClamp lines={1}>
        <Text color="interactive" className={classes.label}>
          {virtualClassroomLabel}
        </Text>
      </TextClamp>
    </Box>
  );
};

VirtualClassItem.defaultProps = {};
VirtualClassItem.propTypes = {};

export { VirtualClassItem };
