import React from 'react';
import PropTypes from 'prop-types';
import { TLayoutFooter } from './TLayoutFooter';
import { TotalLayoutStepContainer } from '../../TotalLayout';
import { Stack } from '../../Stack';
import { TLAYOUT_CONTENT_NAME, TLAYOUT_FOOTER_NAME } from '../TLayout.constants';
import { ContextContainer } from '../../ContextContainer';

const TLayoutContent = ({ children, scrollRef, style, title, stepName, ...props }) => {
  const footerComponent = React.Children.toArray(children).find(
    (child) => child.type === TLayoutFooter || child.displayName === TLAYOUT_FOOTER_NAME,
  );

  const otherChildren = React.Children.toArray(children).filter(
    (child) => child.type !== TLayoutFooter && child.displayName !== TLAYOUT_FOOTER_NAME,
  );

  const scrollableFooterComponent = footerComponent
    ? React.cloneElement(footerComponent, {
        ...footerComponent.props,
        scrollRef,
        fixed: footerComponent.props?.fixed !== false,
      })
    : null;

  return (
    <Stack
      ref={scrollRef}
      justifyContent="center"
      fullWidth
      fullHeight
      sx={{
        overflow: 'auto',
        position: 'relative',
        ...style,
      }}
    >
      <TotalLayoutStepContainer
        {...props}
        stepName={title ?? stepName}
        Footer={scrollableFooterComponent}
      >
        <ContextContainer>{otherChildren}</ContextContainer>
      </TotalLayoutStepContainer>
    </Stack>
  );
};

TLayoutContent.displayName = TLAYOUT_CONTENT_NAME;
TLayoutContent.propTypes = {
  children: PropTypes.node,
  scrollRef: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  stepName: PropTypes.string,
};

export { TLayoutContent };
