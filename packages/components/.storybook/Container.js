import React from 'react';
import { Theme } from './Theme';
import './styles.scss';

export const Container = ({ story, id }) => {
  return (
    <React.StrictMode>
      <div className={id.toLowerCase()} data-floating-menu-container role="main">
        <Theme theme="admin" style={{ position: 'relative', width: '100%', zIndex: 0 }}>
          {story()}
        </Theme>
      </div>
    </React.StrictMode>
  );
};
