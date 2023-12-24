import React from 'react';
import {
  ASSET_BOOKMARK_ICON_PROP_TYPES,
  ASSET_BOOKMARK_ICON_DEFAULT_PROPS,
} from './AssetBookmarkIcon.constants';

const AssetBookmarkIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.49394 0.228609C3.13469 0.264559 1.89965 1.00208 1.21622 2.18594C0.968269 2.61545 0.799731 3.11429 0.735536 3.60866C0.701581 3.87017 0.703136 3.54476 0.703136 10.383L0.703136 16.8306L0.720279 16.9134C0.766266 17.1354 0.868225 17.3216 1.02816 17.4754C1.17176 17.6136 1.34798 17.7076 1.54194 17.7495C1.64264 17.7713 1.8635 17.7735 1.96099 17.7537C2.05257 17.7352 2.15461 17.7003 2.22899 17.6623C2.26493 17.6439 3.06762 17.1454 4.01274 16.5546L5.73114 15.4804L7.43274 16.5449C8.36862 17.1304 9.16026 17.6245 9.19194 17.6428C9.42923 17.7799 9.75689 17.8111 10.0289 17.7226C10.1533 17.6821 10.3098 17.5928 10.4029 17.5091C10.5744 17.3549 10.6935 17.1495 10.7402 16.9278C10.7464 16.8981 10.7545 16.8316 10.7581 16.7802C10.7619 16.7255 10.7647 14.8857 10.7649 12.3542L10.7651 8.02177L12.5561 8.01945C14.4883 8.01695 14.3809 8.01903 14.5134 7.98161C14.9512 7.85797 15.2542 7.49598 15.2937 7.04923C15.3036 6.93753 15.3036 4.15544 15.2937 3.94616C15.2599 3.22912 15.047 2.57232 14.6566 1.98056C14.21 1.30358 13.5693 0.785147 12.8171 0.492086C12.4643 0.354638 12.1355 0.279189 11.7047 0.236832C11.6398 0.230445 10.7426 0.22812 8.09394 0.227472C6.15552 0.226996 4.53552 0.227515 4.49394 0.228609ZM4.41834 1.21784C3.90627 1.24814 3.40301 1.4182 2.97543 1.70544C2.69243 1.89554 2.42596 2.15481 2.22515 2.43544C1.95324 2.81542 1.77247 3.27505 1.71167 3.74096C1.68497 3.94559 1.68512 3.90528 1.68735 10.3984C1.6895 16.6448 1.68976 16.7465 1.70335 16.7615C1.72156 16.7816 1.75619 16.7904 1.7823 16.7815C1.79372 16.7777 2.62964 16.2577 3.6399 15.6262C4.65016 14.9946 5.49942 14.467 5.52714 14.4538C5.65067 14.3948 5.80436 14.3932 5.92842 14.4496C5.95323 14.4609 6.79974 14.987 7.80954 15.6187C8.81934 16.2504 9.6559 16.7726 9.66858 16.7791C9.68125 16.7856 9.6968 16.791 9.70314 16.791C9.72194 16.791 9.75603 16.7704 9.76592 16.7531C9.77338 16.74 9.77583 15.5174 9.77879 10.3362C9.78226 4.24308 9.78305 3.93207 9.79522 3.86696C9.86336 3.50256 10.0087 3.21965 10.2539 2.97402C10.5102 2.71731 10.8324 2.55774 11.1911 2.50985C11.3182 2.49287 11.4913 2.49724 11.5571 2.51907C11.6998 2.56637 11.8245 2.69061 11.8715 2.83222C11.8888 2.88462 11.8911 2.90245 11.8913 2.98856C11.8916 3.07885 11.89 3.09014 11.8697 3.14728C11.8306 3.25745 11.7514 3.35407 11.6516 3.41332C11.5796 3.45611 11.5268 3.47046 11.4096 3.47906C11.1886 3.49529 11.068 3.54788 10.9367 3.68538C10.8701 3.75511 10.8232 3.83268 10.792 3.92456L10.7687 3.99296L10.7668 5.51396L10.7649 7.03496L12.5041 7.03496C13.9908 7.03496 14.2468 7.03348 14.2677 7.02473C14.3187 7.00343 14.3147 7.13154 14.3147 5.49557C14.3147 4.07047 14.3131 3.9418 14.2927 3.76976C14.2414 3.33769 14.084 2.90562 13.842 2.53265C13.6367 2.21637 13.3425 1.91853 13.0236 1.70431C12.5918 1.41425 12.0977 1.24905 11.5679 1.21757C11.4228 1.20895 4.56424 1.20921 4.41834 1.21784Z"
      fill={color}
      strokeWidth="0"
    />
  </svg>
);

AssetBookmarkIcon.defaultProps = ASSET_BOOKMARK_ICON_DEFAULT_PROPS;
AssetBookmarkIcon.propTypes = ASSET_BOOKMARK_ICON_PROP_TYPES;

AssetBookmarkIcon.displayName = 'AssetBookmarkIcon';
export default AssetBookmarkIcon;
export { AssetBookmarkIcon };
