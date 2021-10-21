import React from 'react';
import bg from './img/carbon_bg.png';
import './welcome.scss';
import PackageInfo from './../../package.json';

export const Welcome = () => {
  return (
    <div
      className="welcome__container"
      style={{
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <h2 className="welcome__heading">Carbon Components</h2>
      <h4 className="welcome__heading welcome__heading--subtitle">{`React v${PackageInfo.version}`}</h4>
    </div>
  );
};
