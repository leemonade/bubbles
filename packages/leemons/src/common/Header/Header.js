import React from 'react';
import { ActionButton, Box } from '@bubbles-ui/components';
import { HeaderStyles } from './Header.styles';
import { HEADER_DEFAULT_PROPS, HEADER_PROP_TYPES } from './Header.constants';
import { HeaderDropdown } from '../HeaderDropdown';
import { HeaderBackground } from '../HeaderBackground';
import { ClassroomHeaderBar } from '../ClassroomHeaderBar';
import { ChevLeftIcon } from '@bubbles-ui/icons/outline';
import { isEmpty, isFunction } from 'lodash';
import { EditActivityBar } from '../EditActivityBar';
import { TaskHeader } from '../TaskHeader';

const Header = ({
  back,
  size,
  image,
  onBack,
  activity,
  dropdown,
  classRoom,
  editActivity,
  showClassbar,
  showDropdown,
  showActivity,
  ...props
}) => {
  const handleOnBack = () => {
    isFunction(onBack) && onBack();
  };

  const { classes, cx } = HeaderStyles({ size, hasBack: back && onBack }, { name: 'Header' });
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        {back && onBack && (
          <Box className={classes.onBack}>
            <ActionButton
              icon={<ChevLeftIcon />}
              label={back}
              onClick={handleOnBack}
              className={classes.onBackButton}
            />
          </Box>
        )}
        <HeaderBackground
          image={image}
          color="white"
          backgroundPosition="center"
          withGradient
          rootClassname={classes.headerBackground}
        />
        {!isEmpty(dropdown) && showDropdown && (
          <Box className={classes.dropdownContainer}>
            <HeaderDropdown {...dropdown} />
          </Box>
        )}
        {!isEmpty(activity) && showActivity && (
          <Box className={classes.dropdownContainer}>
            <TaskHeader {...activity} />
          </Box>
        )}
      </Box>
      <Box className={classes.lowerBar}>
        {!isEmpty(activity) && editActivity && <EditActivityBar {...activity} />}
        {!isEmpty(classRoom) && showClassbar && <ClassroomHeaderBar {...classRoom} />}
      </Box>
    </Box>
  );
};

Header.defaultProps = HEADER_DEFAULT_PROPS;
Header.propTypes = HEADER_PROP_TYPES;

export { Header };
