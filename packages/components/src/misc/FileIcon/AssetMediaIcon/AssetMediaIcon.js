import React from 'react';
import {
  ASSET_MEDIA_ICON_DEFAULT_PROPS,
  ASSET_MEDIA_ICON_PROP_TYPES,
} from './AssetMediaIcon.constants';

const AssetMediaIcon = ({ width, height, color }) => (
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
      d="M1.91079 0.0140114C1.52649 0.0607154 1.17846 0.200463 0.864394 0.434175C0.744548 0.523349 0.520666 0.747912 0.431348 0.868517C0.215933 1.15941 0.0793733 1.48522 0.0225413 1.84384C0.00620209 1.94694 0.00519409 2.07355 0.00519409 4.01732V6.08132L0.0345701 6.16334C0.103008 6.35446 0.250455 6.5019 0.441572 6.57034L0.523594 6.59972H12.0004H23.4772L23.5592 6.57034C23.6971 6.52097 23.8168 6.42664 23.8989 6.30259C23.9388 6.24244 23.9904 6.10866 23.9907 6.06508C23.9907 6.05088 23.9951 6.03658 24.0004 6.03332C24.0067 6.02939 24.01 5.34503 24.01 4.01138C24.01 2.66983 24.0068 1.99737 24.0004 2.00132C23.9947 2.00486 23.9908 1.99302 23.9908 1.97191C23.9908 1.91107 23.9618 1.73771 23.9327 1.62493C23.8627 1.35358 23.7415 1.10183 23.5667 0.865109C23.4781 0.745138 23.2538 0.521189 23.1316 0.430671C22.8451 0.21853 22.5302 0.0851858 22.1666 0.0221426C22.0698 0.0053618 21.6834 0.0046418 12.0388 0.0032306C3.95915 0.0020402 1.99202 0.004133 1.91079 0.0140114ZM1.99719 1.32953C1.65922 1.39888 1.39432 1.66656 1.32917 2.00456C1.3178 2.06354 1.31559 2.33641 1.31559 3.68216V5.28932H4.14142H6.96726L7.53152 3.31412C7.84187 2.22775 8.09782 1.33352 8.10032 1.32692C8.10723 1.3086 2.08662 1.31117 1.99719 1.32953ZM8.92084 3.23732C8.61876 4.29463 8.36328 5.18888 8.35308 5.22452L8.33455 5.28932H11.4326H14.5307L15.0799 3.36692C15.382 2.3096 15.6375 1.41536 15.6477 1.37972L15.6662 1.31492H12.5681H9.47006L8.92084 3.23732ZM16.4693 3.29001C16.1589 4.37642 15.903 5.27072 15.9005 5.27732C15.8969 5.28691 16.5789 5.28932 19.2907 5.28932H22.6855L22.683 3.65012L22.6804 2.01092L22.6534 1.92452C22.5663 1.64548 22.355 1.43417 22.0756 1.34675L21.9892 1.31972L19.5114 1.31721L17.0336 1.31471L16.4693 3.29001ZM0.00510769 4.02212C0.00510769 5.13356 0.00622129 5.58823 0.0075941 5.03252C0.00896689 4.47679 0.00896689 3.56743 0.0075941 3.01172C0.00622129 2.45599 0.00510769 2.91068 0.00510769 4.02212ZM0.581194 8.3241C0.427152 8.33833 0.31177 8.3948 0.192106 8.51456C0.0969989 8.60976 0.0380165 8.71415 0.0144773 8.829C0.0019973 8.88984 0.000586095 9.70083 0.00284209 15.4818C0.00530929 21.7921 0.00614449 22.0695 0.0228485 22.1659C0.0857669 22.5293 0.219188 22.8444 0.431348 23.1309C0.522634 23.2542 0.74593 23.4775 0.869194 23.5688C1.16008 23.7842 1.4859 23.9207 1.84452 23.9776C1.94959 23.9942 2.35828 23.9949 12.0004 23.9949C21.6425 23.9949 22.0512 23.9942 22.1563 23.9776C22.6112 23.9055 23.0083 23.708 23.3362 23.3907C23.6309 23.1055 23.833 22.7612 23.9327 22.3745C23.9615 22.2626 23.9908 22.0885 23.9908 22.0287C23.9908 22.0098 23.9951 21.9918 24.0004 21.9885C24.0068 21.9846 24.01 19.7863 24.01 15.4247C24.01 11.8179 24.0069 8.86996 24.0032 8.87369C23.9995 8.87741 23.991 8.8533 23.9843 8.82009C23.941 8.60431 23.7267 8.38815 23.505 8.33674C23.4097 8.31463 23.2556 8.31726 23.1653 8.34254C22.9501 8.40278 22.7772 8.57635 22.7067 8.80292C22.6912 8.85246 22.6899 9.26027 22.6853 15.4221L22.6804 21.9885L22.6534 22.0749C22.5663 22.354 22.355 22.5653 22.0756 22.6527L21.9892 22.6797H12.0004H2.01159L1.92519 22.6528C1.76273 22.602 1.61816 22.5062 1.51124 22.3782C1.42958 22.2804 1.37994 22.1849 1.33672 22.0424C1.32144 21.992 1.32008 21.5674 1.31547 15.4221C1.31084 9.26141 1.30953 8.85245 1.29412 8.80292C1.26865 8.72101 1.21542 8.62117 1.16484 8.56044C1.01596 8.38169 0.819418 8.3021 0.581194 8.3241ZM0.00516529 15.4365C0.00516529 19.0454 0.0062597 20.5218 0.0075941 18.7173C0.00892849 16.9129 0.00892849 13.9602 0.0075941 12.1557C0.0062597 10.3513 0.00516529 11.8276 0.00516529 15.4365ZM8.92359 10.5948C8.57555 10.6366 8.27425 10.7778 8.02895 11.014C7.80641 11.2284 7.66432 11.4828 7.59174 11.797L7.57041 11.8893L7.56731 14.9661C7.56507 17.1809 7.56719 18.0685 7.57487 18.1341C7.62204 18.5371 7.85851 18.937 8.18951 19.1735C8.29222 19.2468 8.51552 19.361 8.61639 19.3917C8.77129 19.4389 8.85139 19.4511 9.03879 19.4561C9.24894 19.4617 9.37843 19.4451 9.54759 19.3907C9.6203 19.3673 10.3808 18.9911 12.682 17.8401C15.2156 16.573 15.7354 16.3096 15.811 16.2553C16.1035 16.0448 16.3186 15.7176 16.4031 15.3549C16.4282 15.2474 16.43 15.2256 16.4301 15.0285C16.4302 14.8001 16.4192 14.7214 16.363 14.5485C16.2573 14.2234 16.0052 13.9064 15.7108 13.7284C15.6115 13.6684 9.7352 10.7314 9.63399 10.6913C9.45629 10.6207 9.27673 10.5881 9.07719 10.5901C9.00855 10.5908 8.93943 10.593 8.92359 10.5948ZM8.97644 11.9349C8.93732 11.9584 8.91851 11.9779 8.90006 12.0139L8.87559 12.0616V15.0235V17.9853L8.89959 18.0333C8.94447 18.1231 9.04363 18.1672 9.13581 18.1384C9.16165 18.1304 10.5047 17.4619 12.1204 16.653C14.9678 15.2273 15.0589 15.1809 15.0864 15.1411C15.1086 15.109 15.1155 15.0872 15.1183 15.0403C15.1225 14.9699 15.1076 14.928 15.0613 14.881C15.0378 14.8571 14.2642 14.4661 12.0845 13.3762C9.1887 11.9284 9.13849 11.9037 9.08389 11.9037C9.03828 11.9037 9.01907 11.9093 8.97644 11.9349Z"
      fill={color}
      strokeWidth="0"
    />
  </svg>
);

AssetMediaIcon.defaultProps = ASSET_MEDIA_ICON_DEFAULT_PROPS;
AssetMediaIcon.propTypes = ASSET_MEDIA_ICON_PROP_TYPES;

AssetMediaIcon.displayName = 'AssetMediaIcon';
export default AssetMediaIcon;
export { AssetMediaIcon };
