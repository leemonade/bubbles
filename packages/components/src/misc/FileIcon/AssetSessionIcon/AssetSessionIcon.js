import React from 'react';
import {
  ASSET_SESSION_ICON_DEFAULT_PROPS,
  ASSET_SESSION_ICON_PROP_TYPES,
} from './AsssetSessionIcon.constants';

const AssetSessionIcon = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.958464 0.510371C0.767888 0.571331 0.627936 0.701219 0.531888 0.906275L0.487984 1V3.888V6.776L0.539328 6.88439C0.634368 7.08503 0.833344 7.23778 1.05424 7.27967C1.11075 7.29039 2.08422 7.29591 3.88616 7.29573C6.87542 7.29543 6.75818 7.29888 6.92864 7.2061C7.02872 7.15164 7.15203 7.0224 7.2065 6.91495C7.30096 6.72852 7.29598 6.89642 7.29598 3.89559C7.29598 1.9698 7.29072 1.11333 7.27848 1.04695C7.23157 0.792659 7.05936 0.599379 6.80267 0.512915C6.70552 0.480179 6.68978 0.480003 3.8765 0.480867C1.20386 0.481683 1.04306 0.483299 0.958464 0.510371ZM1.27998 3.88805V6.4961L3.88398 6.49205L6.48798 6.488L6.49203 3.884L6.49608 1.28H3.88803H1.27998V3.88805ZM13.3991 2.09538C13.337 2.11167 13.2588 2.13644 13.2253 2.15044C13.0276 2.23303 13.0242 2.23632 10.4772 4.78087C8.82238 6.43415 7.97808 7.28853 7.96149 7.32664C7.91077 7.44311 7.3413 9.76509 7.34205 9.85234C7.34392 10.067 7.51595 10.2395 7.72798 10.2392C7.82413 10.2391 10.1697 9.65975 10.2722 9.6108C10.3056 9.59484 11.3326 8.5789 12.8102 7.09999C15.5188 4.38904 15.3763 4.54128 15.4675 4.26045C15.5232 4.08895 15.5364 3.78762 15.4962 3.606C15.4638 3.45959 15.4038 3.31949 15.3174 3.18871C15.2433 3.0765 14.6474 2.46658 14.48 2.33162C14.3366 2.216 14.1456 2.12072 13.992 2.08824C13.8333 2.05469 13.5408 2.05821 13.3991 2.09538ZM13.5661 2.88608C13.5343 2.89744 13.4875 2.92188 13.4621 2.94036C13.4368 2.95885 12.3516 4.0388 11.0507 5.34028L8.68547 7.70656L8.48867 8.49328C8.3412 9.08277 8.29746 9.28 8.31418 9.28C8.32645 9.28 8.68378 9.19328 9.10824 9.0873L9.87998 8.8946L12.253 6.5233C13.5581 5.21909 14.6444 4.12112 14.6669 4.08336C14.695 4.03615 14.7104 3.9825 14.7161 3.9114C14.7308 3.72802 14.7146 3.70336 14.3139 3.29821C13.9218 2.90178 13.8691 2.86389 13.712 2.86487C13.6636 2.86516 13.598 2.87471 13.5661 2.88608ZM1.03998 8.72146C0.868384 8.75524 0.660496 8.90632 0.56984 9.06317C0.473248 9.23026 0.479232 9.01562 0.483808 12.1447L0.487984 15L0.539536 15.1088C0.608128 15.2537 0.74632 15.3919 0.891152 15.4605L0.999984 15.512L3.8473 15.5162C7.00077 15.5208 6.78384 15.5277 6.95198 15.4173C7.12662 15.3026 7.24611 15.1298 7.28035 14.9423C7.29102 14.884 7.29522 14.3 7.29237 13.2703L7.28798 11.688L7.25293 11.6225C7.21128 11.5447 7.12046 11.4613 7.04115 11.4281C6.97635 11.4009 6.81203 11.3968 6.75198 11.4208C6.66566 11.4553 6.57952 11.5346 6.53814 11.6177L6.49598 11.7023V13.2111V14.72H3.88798H1.27998V12.112V9.504H3.42216H5.56434L5.64987 9.45932C5.84155 9.35919 5.92125 9.12512 5.82805 8.936C5.79419 8.86728 5.71419 8.78672 5.63998 8.7466L5.57598 8.712L3.34398 8.70965C2.10176 8.70834 1.08005 8.71357 1.03998 8.72146ZM4.94194 10.5937C4.9012 10.5998 4.8508 10.6136 4.82994 10.6243C4.80906 10.635 4.5887 10.8461 4.34024 11.0933L3.8885 11.5427L3.44294 11.0998C3.12555 10.7843 2.97707 10.6476 2.92669 10.6248C2.83411 10.5828 2.67264 10.5815 2.58336 10.6221C2.49717 10.6612 2.3932 10.782 2.36792 10.8723C2.34338 10.9599 2.35474 11.0957 2.39282 11.1702C2.40794 11.1998 2.62078 11.4258 2.86579 11.6725L3.31125 12.121L2.86997 12.5605C2.38462 13.0439 2.35213 13.087 2.3525 13.248C2.35314 13.5401 2.66381 13.737 2.92085 13.6084C2.97797 13.5798 3.12224 13.4464 3.4395 13.1288L3.87902 12.6887L4.3275 13.1342C4.57418 13.3792 4.80019 13.5921 4.82979 13.6072C4.90424 13.6453 5.04011 13.6566 5.12773 13.6321C5.21803 13.6068 5.33877 13.5028 5.37794 13.4166C5.41848 13.3273 5.4172 13.1659 5.3752 13.0733C5.35235 13.0229 5.21568 12.8744 4.90005 12.5569L4.45698 12.1112L4.89933 11.6676C5.16442 11.4018 5.35528 11.1974 5.37565 11.1575C5.39875 11.1123 5.40979 11.0606 5.4101 10.9961C5.41134 10.7353 5.20146 10.5549 4.94194 10.5937Z"
      fill={color}
    />
  </svg>
);

AssetSessionIcon.defaultProps = ASSET_SESSION_ICON_DEFAULT_PROPS;
AssetSessionIcon.propTypes = ASSET_SESSION_ICON_PROP_TYPES;

export default AssetSessionIcon;
export { AssetSessionIcon };
