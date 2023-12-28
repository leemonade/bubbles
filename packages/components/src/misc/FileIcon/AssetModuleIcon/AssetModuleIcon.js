import React from 'react';
import {
  ASSET_MODULE_ICON_PROP_TYPES,
  ASSET_MODULE_ICON_DEFAULT_PROPS,
} from './AssetModuleIcon.constants';

const AssetModuleIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color}
      strokeWidth="0"
      d="M6.27472 0.00638015C6.1439 0.0196713 5.99658 0.0491625 5.89312 0.0827721C5.3328 0.264803 4.94844 0.717776 4.81972 1.34778C4.77857 1.54917 4.78072 1.39005 4.78072 4.2333C4.78072 5.9386 4.78325 6.87758 4.78798 6.92614C4.82166 7.27213 4.92074 7.54068 5.10536 7.78634C5.33421 8.09086 5.70504 8.31273 6.12712 8.39768C6.31253 8.43499 6.10412 8.43222 8.94952 8.43522C10.8478 8.43722 11.6166 8.43575 11.6891 8.42998C12.0345 8.40248 12.3133 8.3026 12.5616 8.11739C12.8781 7.88134 13.0926 7.52179 13.1827 7.0763C13.2209 6.88741 13.2191 7.02525 13.2191 4.203C13.2191 2.414 13.2167 1.56031 13.2115 1.50656C13.1757 1.13789 13.0573 0.839499 12.8471 0.588507C12.6214 0.318983 12.2784 0.123164 11.8885 0.0411273C11.694 0.000195349 11.9346 0.00347855 9.01432 0.00193775C7.53922 0.00116015 6.3064 0.00316175 6.27472 0.00638015ZM6.37392 1.12959C6.29802 1.13694 6.21439 1.15996 6.1618 1.18799C6.11878 1.21092 6.05452 1.27104 6.02223 1.31857C5.96967 1.39594 5.92642 1.52482 5.91124 1.6493C5.90532 1.69793 5.90377 2.40968 5.90552 4.2863L5.90792 6.8567L5.92321 6.92259C5.9441 7.01257 5.9753 7.07462 6.028 7.13095C6.10064 7.2086 6.20402 7.26062 6.35121 7.29358L6.42592 7.3103L9.02152 7.3103C11.8411 7.3103 11.6638 7.31286 11.7804 7.27054C11.8487 7.24577 11.8871 7.21982 11.9399 7.16272C12.0115 7.0854 12.0665 6.94806 12.0882 6.79268C12.0984 6.71873 12.0989 1.74015 12.0886 1.61622C12.0802 1.51407 12.067 1.45935 12.0347 1.39167C12.0109 1.34192 11.9539 1.27696 11.9045 1.24341C11.8621 1.21456 11.788 1.18048 11.7285 1.16245C11.5861 1.11927 11.7673 1.12188 8.98192 1.12291C7.58008 1.12344 6.40648 1.12644 6.37392 1.12959ZM1.48312 9.5711C1.15418 9.60474 0.891462 9.704 0.648959 9.88624C0.377771 10.09 0.17625 10.3982 0.0730738 10.7668C0.0464338 10.862 0.018037 11.0076 0.00760423 11.1026C0.00230503 11.1509 -5.65724e-05 11.9867 1.02755e-06 13.799C8.02275e-05 16.6567 -0.00190697 16.5114 0.0399466 16.7151C0.170979 17.3529 0.639325 17.805 1.32472 17.9552C1.51986 17.998 1.27778 17.9945 4.18312 17.9971C6.89828 17.9996 6.91904 17.9995 7.08112 17.9726C7.76385 17.8595 8.2552 17.3672 8.39891 16.6523C8.4362 16.4667 8.43343 16.6752 8.43644 13.8299C8.43929 11.1286 8.43893 11.0868 8.41208 10.9211C8.34787 10.525 8.15353 10.1849 7.85512 9.94653C7.64977 9.78247 7.37169 9.65612 7.09192 9.59975C6.90651 9.56239 7.11885 9.56509 4.24072 9.56343C2.11779 9.56221 1.55475 9.56377 1.48312 9.5711ZM11.0447 9.5711C10.6881 9.60757 10.4013 9.72458 10.1481 9.93692C9.87913 10.1625 9.67969 10.516 9.60096 10.9067C9.56364 11.092 9.56641 10.8836 9.56341 13.7291C9.56141 15.6274 9.56287 16.3962 9.56865 16.4687C9.59657 16.8193 9.69656 17.0957 9.88746 17.3497C10.0913 17.6209 10.3994 17.8224 10.768 17.9256C10.8632 17.9522 11.0088 17.9806 11.1038 17.991C11.1521 17.9963 11.9879 17.9987 13.8002 17.9986C16.6579 17.9985 16.5126 18.0005 16.7164 17.9587C17.354 17.8277 17.8062 17.3592 17.9565 16.6739C17.9992 16.4788 17.9957 16.7208 17.9984 13.8155C18.0001 11.8875 17.9986 11.1377 17.9927 11.0723C17.9607 10.7172 17.8547 10.4398 17.6524 10.1811C17.4285 9.89493 17.0626 9.68194 16.6535 9.59972C16.4678 9.56239 16.6803 9.56509 13.8023 9.56343C11.6794 9.56221 11.1163 9.56377 11.0447 9.5711ZM1.52632 10.7014C1.41613 10.7235 1.35083 10.7582 1.28333 10.8303C1.21035 10.9083 1.15822 11.0307 1.13417 11.1803C1.12446 11.2407 1.1232 11.5452 1.12334 13.7867C1.12343 15.3653 1.12612 16.3518 1.13045 16.3963C1.1384 16.478 1.15868 16.5586 1.18369 16.6077C1.25079 16.7396 1.40386 16.8297 1.61992 16.8645C1.68034 16.8742 1.98425 16.8754 4.22272 16.8752C5.69915 16.8751 6.78767 16.8723 6.83031 16.8684C6.9231 16.86 6.98114 16.8452 7.04673 16.8131C7.18481 16.7454 7.28201 16.5695 7.30838 16.3397C7.31348 16.2951 7.31506 15.456 7.31331 13.7075C7.311 11.3826 7.30967 11.136 7.2992 11.0903C7.28328 11.0208 7.25507 10.9486 7.2292 10.911C7.17651 10.8344 7.0709 10.7636 6.95512 10.7273C6.83079 10.6882 7.01956 10.6906 4.18805 10.6914C2.0704 10.6919 1.56422 10.6938 1.52632 10.7014ZM11.0879 10.7015C11.0254 10.7141 10.9508 10.7429 10.9125 10.7692C10.8147 10.8365 10.7413 10.9641 10.7068 11.1267L10.6916 11.1983L10.6936 13.8299C10.6955 16.3714 10.696 16.4631 10.709 16.5083C10.7563 16.6736 10.8672 16.7793 11.0519 16.835C11.1948 16.8781 11.0154 16.8755 13.7879 16.8753C15.3665 16.8752 16.353 16.8725 16.3975 16.8682C16.4792 16.8602 16.5598 16.84 16.6089 16.8149C16.7405 16.748 16.831 16.5942 16.8657 16.3787C16.8754 16.3183 16.8766 16.0144 16.8764 13.7759C16.8763 12.2995 16.8735 11.211 16.8696 11.1683C16.8613 11.0755 16.8464 11.0175 16.8143 10.9519C16.7616 10.8443 16.6409 10.7593 16.4766 10.714L16.4051 10.6943L13.7699 10.6932C11.6209 10.6922 11.1261 10.6938 11.0879 10.7015Z"
    />
  </svg>
);

AssetModuleIcon.defaultProps = ASSET_MODULE_ICON_DEFAULT_PROPS;
AssetModuleIcon.propTypes = ASSET_MODULE_ICON_PROP_TYPES;

AssetModuleIcon.displayName = 'AssetModuleIcon';
export default AssetModuleIcon;
export { AssetModuleIcon };