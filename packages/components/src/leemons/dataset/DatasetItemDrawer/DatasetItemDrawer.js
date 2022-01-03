import React from 'react';
import PropTypes from 'prop-types';
import { Col, Drawer, Grid } from '@mantine/core';
import { DatasetItemDrawerStyles } from './DatasetItemDrawer.styles';

export const DATASET_ITEM_DRAWER_DEFAULT_PROPS = {
  opened: false,
  position: 'right',
  size: 1187,
  onClose: () => {},
};
export const DATASET_ITEM_DRAWER_PROP_TYPES = {
  opened: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.number,
  onClose: PropTypes.func,
};

const DatasetItemDrawer = ({ position, opened, onClose, size, ...props }) => {
  const { classes, cx } = DatasetItemDrawerStyles({});

  return (
    <Drawer position={position} opened={opened} size={size} onClose={onClose} hideCloseButton>
      <Grid columns={100}>
        <Col span={35} className={classes.leftCol}>
          left
        </Col>
        <Col span={65}>Right</Col>
      </Grid>
    </Drawer>
  );
};

DatasetItemDrawer.defaultProps = DATASET_ITEM_DRAWER_DEFAULT_PROPS;

DatasetItemDrawer.propTypes = DATASET_ITEM_DRAWER_PROP_TYPES;

export { DatasetItemDrawer };
