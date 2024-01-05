import React from 'react';
import { MeetingCameraIcon } from '@bubbles-ui/icons/outline';
import { Button } from '@bubbles-ui/components';

const VirtualClassItem = ({
  virtualClassroom,
  virtualClassroomLabel,
  onVirtualClassroomOpen,
  classes,
  cx,
}) => {
  const handleOpenVirtualClassroom = () => {
    onVirtualClassroomOpen();
    window.open(virtualClassroom, '_blank');
  };
  return (
    <Button
      leftIcon={
        <MeetingCameraIcon height={15} width={15} style={{ minHeight: 15, minWidth: 15 }} />
      }
      variant="link"
      onClick={handleOpenVirtualClassroom}
    >
      {virtualClassroomLabel}
    </Button>
  );
};

VirtualClassItem.defaultProps = {};
VirtualClassItem.propTypes = {};

export { VirtualClassItem };
