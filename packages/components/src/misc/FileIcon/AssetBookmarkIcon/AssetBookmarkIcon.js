import React from 'react';
import {
  ASSET_BOOKMARK_ICON_PROP_TYPES,
  ASSET_BOOKMARK_ICON_DEFAULT_PROPS,
} from './AssetBookmarkIcon.constants';

const AssetBookmarkIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49412 3.22865C7.13487 3.2646 5.89983 4.00213 5.21641 5.18599C4.96845 5.6155 4.79991 6.11434 4.73572 6.6087C4.70176 6.87022 4.70332 6.54481 4.70332 13.383V19.8306L4.72046 19.9134C4.76645 20.1355 4.86841 20.3216 5.02834 20.4755C5.17195 20.6136 5.34816 20.7076 5.54212 20.7496C5.64283 20.7713 5.86368 20.7736 5.96117 20.7538C6.05276 20.7352 6.1548 20.7004 6.22917 20.6623C6.26511 20.6439 7.0678 20.1455 8.01292 19.5547L9.73132 18.4804L11.4329 19.545C12.3688 20.1305 13.1604 20.6245 13.1921 20.6428C13.4294 20.7799 13.7571 20.8112 14.029 20.7227C14.1534 20.6822 14.31 20.5928 14.4031 20.5092C14.5746 20.3549 14.6937 20.1496 14.7403 19.9278C14.7466 19.8981 14.7546 19.8317 14.7582 19.7802C14.7621 19.7255 14.7649 17.8857 14.7651 15.3542L14.7653 11.0218L16.5563 11.0195C18.4885 11.017 18.3811 11.0191 18.5136 10.9817C18.9514 10.858 19.2543 10.496 19.2939 10.0493C19.3038 9.93758 19.3038 7.15548 19.2939 6.94621C19.2601 6.22917 19.0472 5.57237 18.6568 4.98061C18.2102 4.30363 17.5695 3.78519 16.8173 3.49213C16.4645 3.35468 16.1357 3.27923 15.7049 3.23688C15.64 3.23049 14.7428 3.22817 12.0941 3.22752C10.1557 3.22704 8.5357 3.22756 8.49412 3.22865ZM8.41852 4.21788C7.90646 4.24818 7.4032 4.41825 6.97561 4.70548C6.69261 4.89558 6.42614 5.15486 6.22533 5.43548C5.95343 5.81547 5.77266 6.2751 5.71185 6.74101C5.68515 6.94563 5.6853 6.90533 5.68754 13.3985C5.68968 19.6449 5.68994 19.7465 5.70354 19.7616C5.72174 19.7817 5.75638 19.7905 5.78248 19.7816C5.7939 19.7777 6.62982 19.2578 7.64008 18.6262C8.65034 17.9946 9.4996 17.467 9.52732 17.4538C9.65086 17.3948 9.80455 17.3933 9.9286 17.4497C9.95341 17.461 10.7999 17.987 11.8097 18.6188C12.8195 19.2505 13.6561 19.7727 13.6688 19.7792C13.6814 19.7857 13.697 19.791 13.7033 19.791C13.7221 19.791 13.7562 19.7704 13.7661 19.7531C13.7736 19.7401 13.776 18.5175 13.779 13.3362C13.7824 7.24313 13.7832 6.93212 13.7954 6.86701C13.8635 6.5026 14.0089 6.2197 14.2541 5.97407C14.5104 5.71736 14.8326 5.55778 15.1913 5.5099C15.3184 5.49292 15.4914 5.49728 15.5573 5.51911C15.7 5.56642 15.8247 5.69065 15.8717 5.83226C15.889 5.88466 15.8913 5.9025 15.8915 5.98861C15.8918 6.0789 15.8902 6.09019 15.8699 6.14733C15.8308 6.25749 15.7516 6.35412 15.6518 6.41337C15.5798 6.45616 15.527 6.4705 15.4098 6.47911C15.1887 6.49534 15.0682 6.54793 14.9369 6.68543C14.8703 6.75516 14.8233 6.83273 14.7921 6.92461L14.7689 6.99301L14.767 8.51401L14.7651 10.035H16.5042C17.991 10.035 18.2469 10.0335 18.2679 10.0248C18.3189 10.0035 18.3149 10.1316 18.3149 8.49561C18.3149 7.07052 18.3133 6.94185 18.2929 6.76981C18.2416 6.33774 18.0842 5.90566 17.8422 5.5327C17.6369 5.21642 17.3427 4.91857 17.0237 4.70435C16.592 4.41429 16.0979 4.2491 15.5681 4.21762C15.423 4.209 8.56442 4.20925 8.41852 4.21788Z"
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