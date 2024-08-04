import React from 'react';
import {
  ASSET_COMMUNITY_ICON_DEFAULT_PROPS,
  ASSET_COMMUNITY_ICON_PROP_TYPES,
} from './AsssetCommunityIcon.constants';

const AssetCommunityIcon = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9606 0.0677255C18.5413 0.444621 16.5793 2.19975 15.9426 4.55685C15.7918 5.11515 15.7425 5.51652 15.7441 6.17234C15.7467 7.17569 15.9474 8.04312 16.3727 8.88901C16.8447 9.82788 17.5707 10.6675 18.3803 11.2109C18.5738 11.3408 18.7329 11.4604 18.7336 11.4765C18.7345 11.4927 18.6613 11.5295 18.571 11.5582C18.2637 11.656 17.3436 12.1258 16.9334 12.3945C16.2984 12.8104 15.8665 13.1662 15.3368 13.7096C14.7178 14.3445 14.6033 14.5511 14.6007 15.0366C14.5992 15.333 14.6176 15.4249 14.7203 15.6346C14.8539 15.907 15.0842 16.139 15.3735 16.2927C15.5264 16.3739 15.631 16.3926 15.9336 16.3931C16.4606 16.3938 16.6581 16.2882 17.2435 15.6925C17.9942 14.9287 18.6674 14.479 19.5969 14.1205C21.2178 13.4955 23.0343 13.5651 24.6308 14.3132C25.2655 14.6106 25.8181 15.0075 26.4495 15.6193C26.7707 15.9306 27.1191 16.2289 27.2237 16.2823C27.3442 16.3438 27.5279 16.3876 27.7255 16.402C28.1378 16.4319 28.4581 16.3154 28.7506 16.0291C29.0485 15.7375 29.1659 15.4663 29.1706 15.0585C29.1766 14.5463 29.0546 14.3377 28.3258 13.6139C27.4565 12.7507 26.5336 12.1182 25.5311 11.6988C25.2602 11.5855 25.0386 11.478 25.0386 11.4601C25.0386 11.4422 25.0939 11.3989 25.1614 11.364C25.2289 11.3291 25.4603 11.1642 25.6757 10.9976C27.776 9.37263 28.5778 6.54657 27.6575 4.01195C26.9874 2.16643 25.3498 0.691945 23.419 0.195721C22.6597 0.00053211 21.7094 -0.0489327 20.9606 0.0677255ZM21.0457 2.84734C20.4045 3.00497 19.857 3.33494 19.3828 3.84942C18.729 4.55882 18.433 5.38261 18.4855 6.34665C18.5148 6.88393 18.6206 7.26543 18.8803 7.7701C19.1137 8.22373 19.7509 8.88144 20.1943 9.12657C21.2368 9.7029 22.5922 9.69918 23.5941 9.11729C24.0277 8.86537 24.6675 8.20211 24.8935 7.7701C25.185 7.21303 25.2767 6.8244 25.2757 6.15045C25.2749 5.52597 25.2153 5.22883 24.9923 4.73707C24.5628 3.78976 23.625 3.03426 22.6219 2.82751C22.1657 2.73344 21.4735 2.74215 21.0457 2.84734ZM11.0895 9.65816C10.6183 9.82521 9.22116 11.3276 8.3515 12.6026C6.87321 14.7699 5.94747 17.1842 5.59697 19.7861C5.48775 20.597 5.44323 22.2716 5.51043 23.0415C5.56567 23.6746 5.63462 23.8779 5.88977 24.1604C6.48427 24.8184 7.52259 24.7631 8.01519 24.0472C8.2552 23.6984 8.27017 23.5869 8.24216 22.3603C8.21493 21.1675 8.25826 20.4429 8.40911 19.5707C8.69351 17.9259 9.3025 16.2989 10.1823 14.8331C10.7261 13.927 11.2857 13.2108 12.1795 12.2767C12.8521 11.5736 12.9351 11.425 12.9351 10.9218C12.9351 10.6748 12.9113 10.567 12.8125 10.3658C12.663 10.0613 12.3307 9.75154 12.0515 9.65641C11.8001 9.57075 11.3338 9.57162 11.0895 9.65816ZM31.7043 9.65703C31.4538 9.7486 31.1001 10.0759 30.9575 10.348C30.8593 10.5356 30.8403 10.628 30.8396 10.9218C30.8384 11.4257 30.9475 11.6274 31.5597 12.253C33.7376 14.4788 34.9511 16.9231 35.4448 20.0793C35.5033 20.4531 35.5196 20.8779 35.5226 22.1061C35.5261 23.5201 35.5336 23.6739 35.6063 23.8133C35.8215 24.2265 36.1235 24.4733 36.5471 24.5817C36.8684 24.6641 37.2584 24.6107 37.5427 24.4456C37.7909 24.3014 38.0623 23.9821 38.1471 23.7343C38.3799 23.055 38.3321 20.5455 38.0577 19.0419C37.4566 15.7484 35.967 12.8468 33.6743 10.5034C32.8854 9.69717 32.755 9.61496 32.2395 9.59973C32.0091 9.59294 31.826 9.61251 31.7043 9.65703ZM7.22252 26.0647C5.2684 26.4147 3.65856 27.5786 2.76014 29.2907C2.27075 30.2234 2.05866 31.082 2.0587 32.1304C2.05879 34.2531 3.08122 36.143 4.86507 37.3178L5.09103 37.4666L4.96395 37.5195C3.61216 38.0814 2.65482 38.7052 1.74493 39.6167C1.03325 40.3297 0.216905 41.491 0.0593618 42.0145C-0.129261 42.6411 0.149624 43.2935 0.744603 43.6173C1.18764 43.8584 1.76756 43.8086 2.19493 43.4927C2.3431 43.3831 2.47701 43.2118 2.688 42.8615C3.22577 41.969 3.84832 41.3037 4.64173 40.7735C6.29215 39.6706 8.2833 39.3914 10.191 39.9953C10.682 40.1507 11.457 40.5434 11.9155 40.8692C12.6538 41.3937 13.1464 41.9568 13.8921 43.1288C14.4799 44.0525 15.7662 43.9714 16.2919 42.9774C16.3724 42.8252 16.3915 42.7187 16.3922 42.4174C16.3934 41.9636 16.3208 41.7966 15.7541 40.9509C15.0706 39.9309 14.2847 39.1481 13.2634 38.4699C12.8225 38.1772 11.9247 37.7027 11.5137 37.5453L11.3181 37.4704L11.547 37.3197C12.1263 36.9382 12.7361 36.3682 13.1415 35.8293C14.5494 33.9577 14.7521 31.3777 13.6551 29.2907C12.8065 27.6763 11.2669 26.5106 9.45501 26.1106C9.00847 26.012 7.67011 25.9845 7.22252 26.0647ZM34.5814 26.0647C33.2642 26.3006 32.1312 26.8851 31.2151 27.8011C30.0471 28.9691 29.4175 30.4855 29.4176 32.1304C29.4176 34.2531 30.4401 36.143 32.2239 37.3178L32.4499 37.4666L32.3228 37.5195C30.971 38.0814 30.0137 38.7052 29.1038 39.6167C28.4164 40.3054 27.6189 41.428 27.4233 41.9825C27.2739 42.4058 27.3849 42.9477 27.6906 43.2877C28.0677 43.707 28.6012 43.867 29.1128 43.7141C29.5093 43.5955 29.7211 43.4023 30.0469 42.8615C30.5846 41.969 31.2072 41.3037 32.0006 40.7735C33.651 39.6706 35.6422 39.3914 37.5499 39.9953C38.0409 40.1507 38.8158 40.5434 39.2744 40.8692C40.0127 41.3937 40.5053 41.9568 41.2509 43.1288C41.8388 44.0527 43.1231 43.9717 43.6512 42.9774C43.7325 42.8242 43.751 42.7207 43.751 42.4174C43.7509 41.9625 43.6767 41.7919 43.1133 40.9514C42.4293 39.9308 41.6437 39.1482 40.6222 38.4699C40.1813 38.1772 39.2836 37.7027 38.8726 37.5453L38.677 37.4704L38.9058 37.3197C39.4851 36.9382 40.095 36.3682 40.5004 35.8293C41.9083 33.9577 42.111 31.3777 41.014 29.2907C40.1653 27.6763 38.6257 26.5106 36.8139 26.1106C36.3673 26.012 35.029 25.9845 34.5814 26.0647ZM7.80927 28.7607C6.66939 28.881 5.66933 29.5939 5.13935 30.664C5.02913 30.8866 4.91484 31.2007 4.87662 31.3863C4.78829 31.8152 4.79109 32.51 4.88284 32.9211C5.13489 34.0502 6.03121 35.0236 7.17144 35.4064C7.47646 35.5089 7.57097 35.5191 8.20744 35.519C8.85241 35.5189 8.93554 35.5096 9.25802 35.4008C9.87384 35.1931 10.3704 34.85 10.8308 34.3141C11.3323 33.7304 11.5552 33.1382 11.5889 32.3C11.6166 31.6117 11.5405 31.2201 11.2708 30.664C10.6353 29.3533 9.27584 28.6059 7.80927 28.7607ZM35.1681 28.7607C34.0283 28.881 33.0282 29.5939 32.4982 30.664C32.388 30.8866 32.2737 31.2007 32.2355 31.3863C32.1471 31.8152 32.1499 32.51 32.2417 32.9211C32.4937 34.0502 33.3901 35.0236 34.53034.0502 33.3901 35.0236 34.5303 35.4064C34.8353 35.5089 34.9298 35.5191 35.5663 35.519C36.2113 35.5189 36.2944 35.5096 36.6169 35.4008C37.2327 35.1931 37.7292 34.85 38.1897 34.3141C38.6911 33.7304 38.9141 33.1382 38.9478 32.3C38.9755 31.6117 38.8994 31.2201 38.6297 30.664C37.9941 29.3533 36.6347 28.6059 35.1681 28.7607ZM26.2862 34.8182C24.8489 35.305 23.8005 35.4925 22.2969 35.5319C20.4703 35.5797 19.2156 35.3941 17.4487 34.8149C16.7908 34.5993 16.6774 34.5744 16.42 34.5894C16.0621 34.6101 15.763 34.7476 15.5102 35.0078C14.9108 35.6244 15.0762 36.7194 15.8307 37.13C16.2624 37.3649 17.6258 37.7781 18.6782 37.9927C19.7636 38.2142 20.4735 38.2771 21.8869 38.2771C23.3311 38.2771 24.0195 38.2138 25.1838 37.9737C26.2057 37.763 27.5666 37.3388 28.0307 37.0862C28.7904 36.6727 28.9421 35.6202 28.3356 34.9717C28.0964 34.716 27.7813 34.5746 27.4024 34.5528C27.1455 34.5381 27.0373 34.5638 26.2862 34.8182Z"
      fill={color}
    />
  </svg>
);

AssetCommunityIcon.defaultProps = ASSET_COMMUNITY_ICON_DEFAULT_PROPS;
AssetCommunityIcon.propTypes = ASSET_COMMUNITY_ICON_PROP_TYPES;

export default AssetCommunityIcon;
export { AssetCommunityIcon };
