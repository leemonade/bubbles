import React, { useState, useEffect, useMemo } from 'react';
import { isEmpty, isNumber } from 'lodash';
import { Text } from '../../typography/Text';
import { Box } from '../../layout';
import { Avatar } from '../Avatar/Avatar';
import { AvatarsGroupStyles } from './AvatarsGroup.styles';
import { AVATARS_GROUP_DEFAULT_PROPS, AVATARS_GROUP_PROP_TYPES } from './AvatarsGroup.constants';

const AvatarsGroup = ({ data, size, limit, total, ...props }) => {
  const { classes, cx, theme } = AvatarsGroupStyles({ size }, { name: 'AvatarsGroup' });

  const avatars = useMemo(() => {
    if (!isEmpty(data) && isNumber(limit) && data.length > limit) {
      return data.slice(0, limit);
    }

    return data;
  }, [data, limit]);

  const overflow = useMemo(() => {
    const limitDiff = data.length - avatars.length;
    const totalDiff = (total || 0) - avatars.length;
    return Math.max(limitDiff, totalDiff);
  }, [data, avatars, total]);

  return (
    <>
      <Box {...props} className={classes.root}>
        {avatars.map((item, index) => (
          <Avatar key={`k-${index}`} fullName={item.fullName} image={item.avatar} size={size} />
        ))}
        {overflow > 0 && (
          <Avatar
            size={size}
            color={theme.colors.ui02}
            icon={
              <Text
                size={size}
                strong
                className={{ [classes.overflow]: size === 'xs' }}
              >{`+${overflow}`}</Text>
            }
          />
        )}
      </Box>
    </>
  );
};

AvatarsGroup.defaultProps = AVATARS_GROUP_DEFAULT_PROPS;
AvatarsGroup.propTypes = AVATARS_GROUP_PROP_TYPES;

export { AvatarsGroup };
