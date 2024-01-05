import React from 'react';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { LocationIcon } from '@bubbles-ui/icons/outline';

const AddressItem = ({ address, classes }) => {
  return (
    <Box className={classes.infoWrapper}>
      <LocationIcon height={15} width={15} style={{ minHeight: 15, minWidth: 15 }} />
      <TextClamp lines={1}>
        <Text color="interactive" className={classes.label}>
          {address}
        </Text>
      </TextClamp>
    </Box>
  );
};

AddressItem.defaultProps = {};
AddressItem.propTypes = {};

export { AddressItem };
