import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { Drawer as MantineDrawer } from '@mantine/core';
import { DrawerStyles } from './Drawer.styles';
import { DrawerHeader } from './components/DrawerHeader';
import { DrawerContent } from './components/DrawerContent';
import { DrawerFooter } from './components/DrawerFooter';
import { TotalLayoutContainer } from '../../layout';

export const DRAWER_POSITIONS = ['left', 'right', 'top', 'bottom'];
export const DRAWERS_SIZES = ['xs', 'sm', 'md', 'xl', 'full'];

const DRAWER_WIDTHS = {
  xs: 360,
  sm: 400,
  md: 576,
  xl: 728,
  full: '100%',
};

export const DRAWER_DEFAULT_PROPS = {
  size: 'md',
  opened: false,
  closeOnClickOutside: true,
  closeOnEscape: true,
  lockScroll: true,
  trapFocus: false,
  shadow: true,
  withOverlay: true,
  overlayOpacity: 0.25,
  overlayColor: '#000000',
};
export const DRAWER_PROP_TYPES = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shadow: PropTypes.bool,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  withOverlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  closeOnClickOutside: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  lockScroll: PropTypes.bool,
  trapFocus: PropTypes.bool,
  modalAriaLabel: PropTypes.string,
  children: PropTypes.node,
};

const Drawer = ({ children, shadow, modalAriaLabel, onClose = noop, ...props }) => {
  const { classes } = DrawerStyles({ shadow }, { name: 'Drawer' });
  const scrollRef = React.useRef(null);

  const drawerWidth = DRAWER_WIDTHS[props.size] || DRAWER_WIDTHS.md;

  // ··························································
  // RENDER COMPONENTS

  const childArray = React.Children.toArray(children);
  const HeaderComponent = childArray.find((child) => child.type === DrawerHeader);
  const ContentComponent = childArray.find((child) => child.type === DrawerContent);
  const FooterComponent = childArray.find((child) => child.type === DrawerFooter);

  const ScrollableHeaderComponent = HeaderComponent
    ? React.cloneElement(HeaderComponent, {
        ...HeaderComponent.props,
        scrollRef,
        onClose,
      })
    : null;

  const ScrollableContentComponent = ContentComponent
    ? React.cloneElement(
        ContentComponent,
        {
          ...ContentComponent.props,
          scrollRef,
        },
        [
          // Pass all the original children of ContentComponent
          ...React.Children.toArray(ContentComponent.props.children),
          FooterComponent &&
            React.cloneElement(FooterComponent, {
              ...FooterComponent.props,
              width: drawerWidth,
            }),
        ].filter(Boolean),
      )
    : null; // The filter(Boolean) is used to remove any false values that may exist, such as a non-existent FooterComponent

  return (
    <MantineDrawer
      {...props}
      size={drawerWidth}
      onClose={onClose}
      position="right"
      shadow={false}
      withCloseButton={false}
      classNames={classes}
      aria-label={modalAriaLabel}
    >
      <TotalLayoutContainer scrollRef={scrollRef} clean Header={ScrollableHeaderComponent}>
        {ScrollableContentComponent}
      </TotalLayoutContainer>
    </MantineDrawer>
  );
};

Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;

Drawer.defaultProps = DRAWER_DEFAULT_PROPS;
Drawer.propTypes = DRAWER_PROP_TYPES;

export { Drawer };
