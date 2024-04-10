import React from 'react';
import PropTypes from 'prop-types';
import { DrawerFooter } from './DrawerFooter';
import { Box, Stack, ContextContainer, TOTAL_LAYOUT_HEADER_HEIGHT } from '../../../layout';

const DrawerContent = ({ children, scrollRef }) => {
  const FooterComponent = React.Children.toArray(children).find(
    (child) => child.type === DrawerFooter,
  );

  const OtherChildren = React.Children.toArray(children).filter(
    (child) => child.type !== DrawerFooter,
  );

  const ScrollableFooterComponent = FooterComponent
    ? React.cloneElement(FooterComponent, {
        ...FooterComponent.props,
        scrollRef,
        fixed: true,
        style: { ...(FooterComponent.props?.style ?? {}), right: 0, zIndex: 100 },
      })
    : null;

  return (
    <Stack fullHeight direction="column">
      <Box
        ref={scrollRef}
        sx={{
          maxHeight: `calc(100% - ${
            TOTAL_LAYOUT_HEADER_HEIGHT * (ScrollableFooterComponent ? 2 : 1)
          }px)`,
          overflowY: 'auto',
        }}
      >
        <ContextContainer padded>{OtherChildren}</ContextContainer>
      </Box>
      {!!ScrollableFooterComponent && (
        <Box sx={{ height: TOTAL_LAYOUT_HEADER_HEIGHT }}>{ScrollableFooterComponent}</Box>
      )}
    </Stack>
  );
};

DrawerContent.propTypes = {
  children: PropTypes.node,
  scrollRef: PropTypes.any,
};

export { DrawerContent };
