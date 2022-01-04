import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Col, Grid } from '@mantine/core';
import { DatasetItemDrawerStyles } from './DatasetItemDrawer.styles';
import { Drawer } from '../../../overlay/Drawer';
import { useForm } from 'react-hook-form';
import DatasetItemDrawerContext from './context/DatasetItemDrawerContext';
import { Name } from './components/Name';
import { Centers } from './components/Centers';
import { Divider } from '../../../layout';
import { SPACING } from '../../../theme.constants';
import { FieldType } from './components/FieldType';

export const DATASET_ITEM_DRAWER_DEFAULT_PROPS = {
  messages: {
    namePlaceholder: 'New field',
    centerLabel: 'Center',
    fieldTypeLabel: 'Field Type',
    fieldTypePlaceholder: 'Select field type',
    textFieldRequiredLabel: 'Required',
    textFieldMaskedLabel: 'Masked',
  },
  errorMessages: {
    nameRequired: 'Field required',
    fieldTypeRequired: 'Field required',
  },
  selectOptions: {
    centers: [
      {
        label: 'All',
        value: '*',
      },
      {
        label: 'Center 1',
        value: 1,
      },
      {
        label: 'Center 2',
        value: 2,
      },
    ],
    fieldTypes: [
      {
        label: 'Campo',
        value: 'text_field',
      },
      {
        label: 'Textarea',
        value: 'rich_text',
      },
      {
        label: 'Numero',
        value: 'number',
      },
    ],
  },
  opened: false,
  position: 'right',
  size: 1187,
  onClose: () => {},
};
export const DATASET_ITEM_DRAWER_PROP_TYPES = {
  messages: PropTypes.object,
  errorMessages: PropTypes.object,
  selectOptions: PropTypes.shape({
    centers: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
    fieldTypes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
      })
    ),
  }),
  opened: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.number,
  onClose: PropTypes.func,
  defaultValues: PropTypes.object,
};

const DatasetItemDrawer = ({
  position,
  opened,
  onClose,
  size,
  defaultValues,
  messages,
  errorMessages,
  selectOptions,
}) => {
  const { classes, cx } = DatasetItemDrawerStyles({});
  const form = useForm({ defaultValues });
  const contextRef = useRef({});
  const [r, setR] = useState(0);

  function render() {
    setR(new Date().getTime());
  }

  useEffect(() => {
    contextRef.current.messages = messages;
    contextRef.current.errorMessages = errorMessages;
    contextRef.current.selectOptions = selectOptions;
    render();
  }, [messages, errorMessages, selectOptions]);

  return (
    <Drawer position={position} opened={opened} size={size} onClose={onClose} headerAbsolute>
      <Grid className={classes.grid} grow columns={100}>
        <Col span={35} className={classes.leftColContainer}>
          <Box>Left</Box>
        </Col>

        <Col span={65} className={classes.rightColContainer}>
          <DatasetItemDrawerContext.Provider
            value={{ contextRef: contextRef.current, form, render }}
          >
            <Box>
              {/* Name */}
              <Box>
                <Name />
              </Box>
              {/* Centers */}
              <Box mt={SPACING[4]}>
                <Centers />
              </Box>
              <Box className={classes.divider}>
                <Divider />
              </Box>
              <Box>
                <FieldType />
              </Box>
              {contextRef.current.name}
            </Box>
          </DatasetItemDrawerContext.Provider>
        </Col>
      </Grid>
    </Drawer>
  );
};

DatasetItemDrawer.defaultProps = DATASET_ITEM_DRAWER_DEFAULT_PROPS;

DatasetItemDrawer.propTypes = DATASET_ITEM_DRAWER_PROP_TYPES;

export { DatasetItemDrawer };
