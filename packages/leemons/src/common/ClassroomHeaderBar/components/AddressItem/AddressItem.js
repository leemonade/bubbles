import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { StyleThreePinTableIcon } from '@bubbles-ui/icons/outline';

const AddressItem = ({ address, classes }) => {
  return (
    <Box className={classes.infoWrapper}>
      <StyleThreePinTableIcon height={20} width={20} style={{ minHeight: 20, minWidth: 20 }} />
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
