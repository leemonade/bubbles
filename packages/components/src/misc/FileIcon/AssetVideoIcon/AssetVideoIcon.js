import React from 'react';
import {
  ASSET_VIDEO_ICON_PROP_TYPES,
  ASSET_VIDEO_ICON_DEFAULT_PROPS,
} from './AssetVideoIcon.constants';

const AssetVideoIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.9842 3.01069C4.76472 3.04057 4.51967 3.12721 4.34327 3.23728C4.13118 3.36963 3.93941 3.56006 3.81302 3.76385C3.69218 3.95867 3.61219 4.18107 3.57909 4.41425C3.56624 4.50476 3.5658 4.75511 3.5658 11.9994C3.5658 19.2438 3.56624 19.4941 3.57909 19.5846C3.64243 20.0308 3.87056 20.4166 4.2282 20.6826C4.45302 20.8497 4.73811 20.9612 5.0202 20.9922C5.11327 21.0024 18.8886 21.0021 18.9831 20.9919C19.3729 20.9496 19.752 20.7559 20.0126 20.4658C20.2363 20.2167 20.3746 19.919 20.4221 19.5846C20.4349 19.4942 20.4354 19.2742 20.4354 13.0902C20.4354 6.90633 20.4349 6.68628 20.4221 6.59585C20.3738 6.2553 20.2351 5.95889 20.0072 5.70868C19.9192 5.6121 17.6332 3.41873 17.5545 3.35539C17.3401 3.18273 17.1038 3.07735 16.7922 3.01526C16.7398 3.00483 16.2058 3.00366 10.8954 3.00234C6.00285 3.00112 5.04452 3.00248 4.9842 3.01069ZM5.1066 3.99034C5.09868 3.9919 5.07438 3.99665 5.0526 4.00087C4.8346 4.04316 4.64104 4.22614 4.57565 4.45175L4.5594 4.50785V11.9994V19.491L4.57565 19.5471C4.64109 19.7729 4.82037 19.9431 5.0526 19.9998C5.1117 20.0142 18.8895 20.0142 18.9486 19.9998C19.1809 19.943 19.3601 19.773 19.4255 19.5472L19.4418 19.491V13.0902V6.68945L19.4214 6.62465C19.3977 6.54915 19.3578 6.47151 19.3126 6.41279C19.2773 6.36688 16.9944 4.16973 16.9275 4.11729C16.878 4.07841 16.7606 4.02043 16.695 4.00246C16.6503 3.9902 16.389 3.98958 10.8846 3.98855C7.71462 3.98797 5.11452 3.98877 5.1066 3.99034ZM10.2906 9.23948C9.9927 9.26452 9.69897 9.41534 9.51019 9.64019C9.35712 9.8225 9.26756 10.0341 9.24341 10.2704C9.23332 10.3692 9.23298 14.7676 9.24307 14.8633C9.29149 15.3229 9.60665 15.7108 10.0394 15.8434C10.1751 15.885 10.2192 15.8911 10.3842 15.8908C10.5237 15.8905 10.5421 15.889 10.6218 15.8705C10.6693 15.8594 10.7455 15.8356 10.791 15.8176C10.8365 15.7995 11.8733 15.2849 13.095 14.674C14.801 13.8209 15.3344 13.551 15.3948 13.5107C15.5302 13.4202 15.6624 13.2779 15.7463 13.1324C15.9188 12.8334 15.9441 12.4641 15.8143 12.1398C15.7339 11.9389 15.5817 11.7502 15.4003 11.6265C15.3299 11.5786 10.8958 9.35376 10.791 9.31382C10.6327 9.25352 10.4488 9.22619 10.2906 9.23948ZM10.3482 10.2278C10.2988 10.2398 10.252 10.2773 10.2371 10.3169C10.2317 10.3311 10.2294 11.0099 10.2294 12.5699V14.8026L10.2477 14.8339C10.2731 14.8771 10.3277 14.9081 10.3788 14.9082C10.4146 14.9082 10.5291 14.852 12.6329 13.8001C14.4626 12.8852 14.8531 12.6875 14.8717 12.6663C14.925 12.6056 14.9201 12.5143 14.8604 12.4566C14.8317 12.4289 10.4305 10.23 10.395 10.2256C10.3811 10.2239 10.3601 10.2249 10.3482 10.2278Z"
      fill={color}
      stroke="red"
      strokeWidth="0"
    />
  </svg>
);

AssetVideoIcon.defaultProps = ASSET_VIDEO_ICON_DEFAULT_PROPS;
AssetVideoIcon.propTypes = ASSET_VIDEO_ICON_PROP_TYPES;

AssetVideoIcon.displayName = 'AssetVideoIcon';
export default AssetVideoIcon;
export { AssetVideoIcon };