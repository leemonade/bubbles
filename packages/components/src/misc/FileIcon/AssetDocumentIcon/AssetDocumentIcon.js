import React from 'react';
import {
  DOCUMENT_ICON_PROP_TYPES,
  DOCUMENT_ICON_DEFAULT_PROPS,
} from './AssetDocumentIcon.constants';

const AssetDocumentIcon = ({ width, height, color }) => (
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
      d="M1.93311 0.00913227C1.64481 0.0441963 1.38385 0.148985 1.14831 0.324262C1.05842 0.391143 0.89051 0.559565 0.823521 0.650019C0.661961 0.868186 0.559541 1.11255 0.516917 1.38151C0.504432 1.46031 0.503906 1.76683 0.503906 8.99842C0.503906 16.23 0.504432 16.5365 0.516917 16.6153C0.559541 16.8843 0.661961 17.1287 0.823521 17.3468C0.891986 17.4393 1.05946 17.6067 1.15191 17.6752C1.36677 17.8343 1.60301 17.9343 1.87564 17.9816C1.94816 17.9942 2.22161 17.9948 8.87751 17.9969C13.9687 17.9986 15.8278 17.997 15.8939 17.9911C16.0982 17.9727 16.2879 17.9175 16.4771 17.8215C16.9637 17.5746 17.2825 17.117 17.3572 16.5584C17.371 16.4552 17.3706 3.73691 17.3568 3.62722C17.3319 3.4292 17.2835 3.26627 17.1975 3.09082C17.1336 2.96056 17.0672 2.85726 16.9803 2.75322C16.9436 2.70919 16.4782 2.25555 15.7612 1.56481C15.1234 0.950359 14.5837 0.431542 14.5619 0.411886C14.338 0.210041 14.0614 0.0778851 13.7375 0.0180315L13.6511 0.00206186L7.82991 0.00100347C3.1461 0.000146665 1.99393 0.00173067 1.93311 0.00913227ZM1.99791 0.995763C1.74434 1.04787 1.54575 1.24855 1.49689 1.50205C1.48155 1.58165 1.48155 16.4152 1.49689 16.4948C1.54181 16.7278 1.71217 16.9159 1.94391 16.9882L2.00871 17.0084H8.93151C15.634 17.0084 15.8558 17.008 15.9011 16.9952C16.0078 16.9649 16.1006 16.9128 16.1768 16.8404C16.2804 16.7419 16.3417 16.6319 16.3703 16.4936C16.3844 16.4249 16.3847 3.77121 16.3705 3.69625C16.344 3.55612 16.2798 3.43675 16.176 3.33438C15.9105 3.07261 13.8931 1.13594 13.8607 1.11172C13.8061 1.0709 13.7295 1.0333 13.65 1.00838L13.5863 0.988419L7.81551 0.987281C3.02614 0.986338 2.03675 0.987778 1.99791 0.995763ZM6.35391 2.84626C5.576 2.91039 4.84993 3.19615 4.24431 3.67651C3.49 4.27482 2.98061 5.13574 2.82293 6.07882C2.64579 7.13831 2.90665 8.21365 3.54778 9.06682C3.93391 9.58065 4.46381 10.0088 5.03631 10.2696C5.50752 10.4842 5.96323 10.5939 6.49035 10.6197C7.22264 10.6555 7.95971 10.4779 8.59671 10.1123C9.65507 9.50487 10.3663 8.44686 10.5265 7.24162C10.5688 6.92327 10.5686 6.53796 10.5261 6.21562C10.4361 5.53261 10.1601 4.87537 9.73537 4.33282C9.14247 3.57537 8.2913 3.06223 7.34751 2.89328C7.05109 2.84022 6.6547 2.82145 6.35391 2.84626ZM11.6472 3.41452C11.6261 3.41963 11.5807 3.43772 11.5464 3.45474C11.4962 3.47957 11.4718 3.49788 11.4225 3.54745C11.3222 3.64837 11.2787 3.75302 11.2787 3.89362C11.2787 4.03439 11.3222 4.13866 11.4227 4.23922C11.4932 4.30973 11.556 4.34674 11.6427 4.36892C11.697 4.38282 11.7244 4.38322 12.6215 4.38322C13.5204 4.38322 13.5459 4.38284 13.6006 4.36884C13.774 4.32449 13.9209 4.16617 13.9545 3.98722C13.968 3.91584 13.9643 3.81885 13.9457 3.75682C13.8969 3.59358 13.7595 3.45904 13.6 3.41824C13.546 3.40442 13.5181 3.40403 12.615 3.40463C11.8829 3.40511 11.6774 3.40722 11.6472 3.41452ZM6.11631 3.86988C5.98892 3.8918 5.74374 3.96398 5.59071 4.02462C4.65528 4.39523 3.97294 5.231 3.79898 6.21922C3.76539 6.41004 3.75868 6.49435 3.75859 6.72682C3.75849 6.95868 3.76615 7.05765 3.79799 7.23597C3.83378 7.43642 3.90031 7.66455 3.97443 7.84091C3.99663 7.89374 4.00276 7.90277 4.01278 7.8973C4.01934 7.89372 4.50747 7.57018 5.09751 7.17831L6.17031 6.46582L6.17213 5.16532L6.17394 3.86482L6.15413 3.8658C6.14323 3.86634 6.12621 3.86817 6.11631 3.86988ZM7.15141 5.35342L7.14951 6.84202L7.13332 6.8845C7.09559 6.98353 7.03797 7.06221 6.95957 7.12175C6.93731 7.13864 6.38522 7.50681 5.73269 7.93988L4.54628 8.72729L4.56989 8.7521C4.58288 8.76574 4.63401 8.81441 4.68351 8.86024C5.14622 9.28872 5.70009 9.54363 6.33951 9.62239C6.48638 9.64048 6.83992 9.64052 6.98751 9.62248C7.266 9.58842 7.49374 9.53065 7.74994 9.42906C8.41484 9.16544 8.97294 8.64369 9.28497 7.99402C9.42664 7.69902 9.50879 7.41804 9.55545 7.06882C9.57169 6.9473 9.57419 6.54113 9.55944 6.42082C9.50864 6.00644 9.38935 5.63582 9.19723 5.29554C9.13669 5.18832 9.01776 5.01333 8.93438 4.90882C8.83526 4.78458 8.6098 4.55898 8.48716 4.46134C8.20244 4.23465 7.89905 4.07124 7.55567 3.95964C7.41851 3.91505 7.21326 3.86482 7.16828 3.86482H7.15331L7.15141 5.35342ZM12.8303 6.80963C12.7221 6.8259 12.6365 6.8697 12.5565 6.94978C12.4438 7.0625 12.3948 7.20724 12.4163 7.36402C12.4417 7.54964 12.5747 7.70794 12.7571 7.76973C12.7994 7.78407 12.8187 7.78491 13.1618 7.78722C13.5714 7.78998 13.5868 7.78854 13.6907 7.73735C13.7403 7.7129 13.7642 7.69484 13.817 7.64181C13.8702 7.58846 13.8876 7.56514 13.9118 7.51522C13.9512 7.43357 13.9606 7.3906 13.9607 7.29202C13.9607 7.22018 13.9579 7.20082 13.9399 7.14581C13.8817 6.96818 13.7249 6.83508 13.5444 6.81019C13.4808 6.80141 12.888 6.80095 12.8303 6.80963ZM10.5227 10.2192C10.497 10.2247 10.4484 10.2429 10.4147 10.2594C10.3651 10.2839 10.3411 10.3021 10.2884 10.355C10.2352 10.4084 10.2178 10.4317 10.1937 10.4816C10.1534 10.5649 10.1446 10.6062 10.1453 10.7084C10.1458 10.783 10.1485 10.8027 10.1656 10.8523C10.2272 11.0315 10.3813 11.1619 10.561 11.1867C10.6399 11.1975 13.4655 11.1975 13.5444 11.1867C13.7241 11.1619 13.8782 11.0315 13.9398 10.8523C13.9569 10.8027 13.9597 10.783 13.9601 10.7084C13.9608 10.6062 13.952 10.5649 13.9118 10.4816C13.8876 10.4317 13.8702 10.4084 13.817 10.355C13.7642 10.302 13.7403 10.2839 13.6907 10.2595C13.5791 10.2045 13.6986 10.2082 12.0491 10.2087C10.8113 10.2091 10.5619 10.2108 10.5227 10.2192ZM4.28391 13.622C4.26411 13.6256 4.21728 13.6435 4.17986 13.6616C4.12264 13.6893 4.10197 13.7044 4.04999 13.7567C3.94654 13.8607 3.90612 13.958 3.90612 14.1032C3.90612 14.1454 3.91091 14.1992 3.91696 14.2248C3.95494 14.3859 4.11282 14.5438 4.27393 14.5818C4.31461 14.5914 4.85053 14.5926 8.93215 14.5927C13.5019 14.5928 13.5449 14.5927 13.6 14.5786C13.7595 14.5378 13.8969 14.4033 13.9457 14.24C13.9643 14.178 13.968 14.081 13.9545 14.0096C13.9208 13.8303 13.7744 13.6724 13.6006 13.628C13.5447 13.6137 13.52 13.6136 8.93215 13.6144C6.1092 13.6149 4.30594 13.6178 4.28391 13.622Z"
      fill={color}
      strokeWidth="0"
    />
  </svg>
);

AssetDocumentIcon.defaultProps = DOCUMENT_ICON_DEFAULT_PROPS;
AssetDocumentIcon.propTypes = DOCUMENT_ICON_PROP_TYPES;

AssetDocumentIcon.displayName = 'AssetTaskIcon';
export default AssetDocumentIcon;
export { AssetDocumentIcon };
