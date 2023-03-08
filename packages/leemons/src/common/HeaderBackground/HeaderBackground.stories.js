import React from 'react';
import { Box, createStyles } from '@bubbles-ui/components';
import { HeaderBackground } from './HeaderBackground';
import {
  HEADER_BACKGROUND_DEFAULT_PROPS,
  HEADER_BACKGROUND_POSITIONS,
} from './HeaderBackground.constants';
import mdx from './HeaderBackground.mdx';
import { HeaderDropdown } from '../HeaderDropdown';
import { DROPDOWN_DATA } from '../HeaderDropdown/mock/data';

export default {
  title: 'leemons/Common/HeaderBackground',
  parameters: {
    component: HeaderBackground,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    backgroundPosition: { control: { type: 'select' }, options: HEADER_BACKGROUND_POSITIONS },
  },
};

const Template = ({ withImage, ...props }) => {
  return (
    <Box style={{ height: '25vh' }}>
      <HeaderBackground {...props} image={withImage ? props.image : ''} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  withImage: true,
  ...HEADER_BACKGROUND_DEFAULT_PROPS,
  image:
    'https://images.unsplash.com/photo-1650120060263-61dc78365ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  color: '#FABADA',
};

// ---------------------------------------------------------------------------------------------------

const Styles = createStyles((theme) => ({
  header: {
    position: 'relative',
    height: 130 + 48,
  },
  programSelectorContainer: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    zIndex: 5,
    alignItems: 'center',
    width: 'fit-content',
    maxWidth: 700,
    marginLeft: 30,
  },
}));

const WithDropdownTemplate = ({ withImage, ...props }) => {
  const { classes: styles } = Styles();

  return (
    <Box className={styles.header}>
      <HeaderBackground
        {...props}
        image={withImage ? props.image : ''}
        styles={{ position: 'absolute', zIndex: 1 }}
      />
      <Box className={styles.programSelectorContainer}>
        <HeaderDropdown data={DROPDOWN_DATA} showIcon={false} />
      </Box>
    </Box>
  );
};

export const WithDropdown = WithDropdownTemplate.bind({});

WithDropdown.args = {
  withImage: true,
  ...HEADER_BACKGROUND_DEFAULT_PROPS,
  image:
    'https://images.unsplash.com/photo-1650120060263-61dc78365ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  color: '#FABADA',
};
