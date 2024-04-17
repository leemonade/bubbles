import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { TLayoutContent } from './components/TLayoutContent';
import { TLayoutFooter } from './components/TLayoutFooter';
import { TLayoutHeader } from './components/TLayoutHeader';
import { TotalLayoutContainer } from '../TotalLayout';

const TLayout = ({ children, onClose = noop, scrollRef: scrollRefProp, ...props }) => {
  const _scrollRef = React.useRef(null);
  const scrollRef = scrollRefProp ?? _scrollRef;

  // ··························································
  // RENDER COMPONENTS

  const childArray = React.Children.toArray(children);
  const HeaderComponent = childArray.find(
    (child) => child.type === TLayoutHeader || child.displayName === 'TLayoutHeader',
  );
  const ContentComponent = childArray.find(
    (child) => child.type === TLayoutContent || child.displayName === 'TLayoutContent',
  );
  const FooterComponent = childArray.find(
    (child) => child.type === TLayoutFooter || child.displayName === 'TLayoutFooter',
  );

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
          ...React.Children.toArray(ContentComponent.props.children),
          FooterComponent &&
            React.cloneElement(FooterComponent, {
              ...FooterComponent.props,
            }),
        ].filter(Boolean),
      )
    : null;

  return (
    <TotalLayoutContainer {...props} scrollRef={scrollRef} Header={ScrollableHeaderComponent}>
      {ScrollableContentComponent}
    </TotalLayoutContainer>
  );
};

TLayout.Header = TLayoutHeader;
TLayout.Content = TLayoutContent;
TLayout.Footer = TLayoutFooter;

TLayout.propTypes = {
  clean: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
  scrollRef: PropTypes.object,
};

export { TLayout };
