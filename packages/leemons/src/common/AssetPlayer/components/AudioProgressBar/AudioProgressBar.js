import React from 'react';
import {
  AUDIO_PROGRESS_BAR_DEFAULT_PROPS,
  AUDIO_PROGRESS_BAR_PROP_TYPES,
} from './AudioProgressBar.constants';
import { AudioProgressBarStyles } from './AudioProgressBar.styles';
import { Box, Text, TextClamp } from '@bubbles-ui/components';
import { ControlsPlayIcon, ControlsPauseIcon } from '@bubbles-ui/icons/solid';

const Back15Icon = () => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1373_75276)">
        <path
          d="M0.800781 11.995C0.800781 13.3717 1.06969 14.6693 1.6075 15.888C2.14532 17.1065 2.88817 18.1785 3.83607 19.104C4.78397 20.0294 5.87809 20.7556 7.11842 21.2826C8.35875 21.8096 9.68144 22.073 11.0865 22.073C12.4916 22.073 13.8142 21.8096 15.0545 21.2826C16.2949 20.7556 17.389 20.0294 18.3369 19.104C19.2848 18.1785 20.0277 17.1065 20.5654 15.888C21.1033 14.6693 21.3722 13.3717 21.3722 11.995C21.3722 10.783 21.1604 9.63032 20.7368 8.5369C20.3133 7.44347 19.7235 6.45379 18.9672 5.56784C18.2108 4.6819 17.3268 3.94087 16.315 3.34476C15.3033 2.74864 14.2092 2.33531 13.0327 2.10476V0.701744C13.0327 0.346049 12.9285 0.125387 12.7201 0.0397568C12.5117 -0.0458733 12.2696 0.00682219 11.994 0.197843L8.77724 2.40117C8.54195 2.55926 8.4243 2.74369 8.4243 2.95447C8.4243 3.16525 8.54195 3.35298 8.77724 3.51766L11.984 5.73087C12.2596 5.92848 12.5033 5.98282 12.7151 5.8939C12.9268 5.80497 13.0327 5.58266 13.0327 5.22697V3.82395C13.9873 4.03473 14.8663 4.39043 15.6697 4.89104C16.473 5.39164 17.1722 6.00422 17.7672 6.72879C18.3621 7.45335 18.8243 8.2619 19.1537 9.15443C19.4831 10.0469 19.6479 10.9938 19.6479 11.995C19.6479 13.1609 19.4277 14.2527 18.9873 15.2704C18.547 16.2881 17.9353 17.1806 17.1521 17.948C16.3689 18.7154 15.4596 19.3148 14.4243 19.7462C13.389 20.1777 12.2764 20.3934 11.0865 20.3934C9.89657 20.3934 8.78228 20.1777 7.74363 19.7462C6.70497 19.3148 5.79405 18.7154 5.01086 17.948C4.22767 17.1806 3.6159 16.2881 3.17556 15.2704C2.73523 14.2527 2.51507 13.1609 2.51507 11.995C2.51507 11.0597 2.66296 10.1688 2.95876 9.3224C3.25456 8.47598 3.668 7.70366 4.1991 7.00544C4.73019 6.30722 5.35204 5.70781 6.06464 5.20721C6.27304 5.05571 6.40582 4.87128 6.46296 4.6539C6.5201 4.43654 6.48481 4.22576 6.35708 4.02156C6.22934 3.82395 6.04447 3.70374 5.80246 3.66093C5.56044 3.61811 5.32851 3.67904 5.10666 3.84371C4.23943 4.45629 3.48313 5.1858 2.83776 6.03223C2.19238 6.87864 1.69154 7.8074 1.33523 8.81849C0.978932 9.82961 0.800781 10.8885 0.800781 11.995ZM8.14195 16.046C8.33691 16.046 8.49153 15.9851 8.60581 15.8632C8.7201 15.7414 8.77724 15.5751 8.77724 15.3643V9.12973C8.77724 8.87284 8.71674 8.68017 8.59573 8.55172C8.47472 8.42328 8.29993 8.35905 8.07136 8.35905C7.93019 8.35905 7.79909 8.38376 7.67809 8.43316C7.55708 8.48256 7.40582 8.56655 7.2243 8.68511L5.84279 9.60399C5.72851 9.68303 5.64279 9.77031 5.58565 9.86582C5.52851 9.96133 5.49993 10.0651 5.49993 10.177C5.49993 10.3417 5.55708 10.4833 5.67137 10.6019C5.78565 10.7204 5.92346 10.7797 6.08481 10.7797C6.18565 10.7797 6.26968 10.7666 6.33691 10.7403C6.40413 10.7139 6.48144 10.6645 6.56884 10.592L7.53691 9.9004H7.51674V15.3643C7.51674 15.5685 7.57388 15.7331 7.68817 15.8583C7.80245 15.9834 7.95372 16.046 8.14195 16.046ZM13.2646 16.1646C14.0982 16.1646 14.7688 15.9225 15.2764 15.4383C15.784 14.9542 16.0378 14.3136 16.0378 13.5166C16.0378 12.7921 15.8126 12.1959 15.3621 11.7282C14.9117 11.2606 14.3268 11.0268 13.6074 11.0268C13.2848 11.0268 12.9705 11.0992 12.6647 11.2441C12.3587 11.3891 12.1386 11.5867 12.0041 11.837H12.0545L12.236 9.60399H15.2511C15.3991 9.60399 15.5285 9.55129 15.6394 9.4459C15.7503 9.34051 15.8058 9.20218 15.8058 9.03092C15.8058 8.86625 15.7503 8.73286 15.6394 8.63077C15.5285 8.52867 15.3991 8.47762 15.2511 8.47762H12.0344C11.5033 8.47762 11.2142 8.75098 11.1672 9.2977L10.9453 12.1433C10.9251 12.387 10.9756 12.5698 11.0966 12.6916C11.2176 12.8135 11.389 12.8744 11.6109 12.8744C11.7722 12.8744 11.9033 12.8546 12.0041 12.8151C12.105 12.7756 12.226 12.7032 12.3672 12.5977C12.5621 12.4265 12.7436 12.303 12.9117 12.2272C13.0798 12.1515 13.2647 12.1136 13.4663 12.1136C13.8562 12.1136 14.1722 12.2437 14.4142 12.5039C14.6563 12.7641 14.7773 13.1082 14.7773 13.5363C14.7773 13.9711 14.6395 14.3301 14.3638 14.6134C14.0882 14.8966 13.742 15.0382 13.3251 15.0382C13.0226 15.0382 12.7504 14.9608 12.5083 14.806C12.2663 14.6512 12.0814 14.4454 11.9537 14.1885C11.8798 14.0633 11.7957 13.9662 11.7016 13.897C11.6075 13.8278 11.4966 13.7932 11.3689 13.7932C11.2008 13.7932 11.0646 13.8459 10.9604 13.9514C10.8562 14.0567 10.8041 14.1951 10.8041 14.3664C10.8041 14.4322 10.8109 14.4981 10.8243 14.564C10.8377 14.6298 10.8579 14.6957 10.8848 14.7616C11.0193 15.1172 11.2966 15.44 11.7167 15.7298C12.1369 16.0197 12.6528 16.1646 13.2646 16.1646Z"
          fill="#B2B6BD"
        />
      </g>
      <defs>
        <clipPath id="clip0_1373_75276">
          <rect width="20.5714" height="24" fill="white" transform="translate(0.800781)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Forward15Icon = () => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1373_75284)">
        <path
          d="M0.429688 11.995C0.429688 13.3722 0.698595 14.6702 1.23641 15.889C1.77422 17.1079 2.51708 18.1803 3.46497 19.106C4.41288 20.0317 5.50699 20.7582 6.74732 21.2852C7.98766 21.8124 9.31035 22.0759 10.7154 22.0759C12.1205 22.0759 13.4431 21.8124 14.6834 21.2852C15.9238 20.7582 17.0179 20.0317 17.9658 19.106C18.9137 18.1803 19.6566 17.1079 20.1943 15.889C20.7322 14.6702 21.0011 13.3722 21.0011 11.995C21.0011 10.8881 20.823 9.82901 20.4666 8.81765C20.1103 7.80627 19.6095 6.87726 18.9641 6.03059C18.3187 5.18394 17.5624 4.45424 16.6953 3.84148C16.4734 3.67676 16.2414 3.61581 15.9994 3.65864C15.7574 3.70147 15.5725 3.82171 15.4448 4.01938C15.3171 4.22363 15.2818 4.43447 15.3389 4.6519C15.3961 4.86932 15.5288 5.05381 15.7372 5.20535C16.4498 5.7061 17.0717 6.30568 17.6028 7.00409C18.1339 7.7025 18.5473 8.47503 18.8431 9.32169C19.1389 10.1683 19.2868 11.0594 19.2868 11.995C19.2868 13.1613 19.0666 14.2534 18.6263 15.2713C18.186 16.2893 17.5742 17.1821 16.791 17.9497C16.0078 18.7172 15.0969 19.3168 14.0582 19.7484C13.0196 20.18 11.9053 20.3957 10.7154 20.3957C9.52547 20.3957 8.41287 20.18 7.37758 19.7484C6.34229 19.3168 5.43304 18.7172 4.64985 17.9497C3.86666 17.1821 3.25489 16.2893 2.81456 15.2713C2.37422 14.2534 2.15405 13.1613 2.15405 11.995C2.15405 10.9936 2.31876 10.0465 2.64817 9.15367C2.97758 8.2609 3.43977 7.45212 4.03472 6.72736C4.62968 6.00259 5.33052 5.38984 6.13724 4.88909C6.94396 4.38835 7.82128 4.03256 8.76917 3.82172V5.235C8.76917 5.58421 8.87505 5.80328 9.08682 5.89223C9.29859 5.98118 9.54228 5.93012 9.81791 5.73905L13.0347 3.52522C13.2633 3.37368 13.3793 3.19084 13.3826 2.97671C13.3859 2.76257 13.27 2.57643 13.0347 2.41831L9.82799 0.204479C9.54564 0.00681589 9.29859 -0.0475413 9.08682 0.041407C8.87505 0.130356 8.76917 0.352726 8.76917 0.708519V2.10205C7.5927 2.33265 6.49859 2.74609 5.48682 3.34238C4.47506 3.93866 3.59102 4.6799 2.83472 5.56609C2.07843 6.45228 1.48851 7.44224 1.06498 8.53598C0.641452 9.62974 0.429688 10.7828 0.429688 11.995ZM7.72044 16.0471C7.91539 16.0471 8.07002 15.9862 8.1843 15.8644C8.29859 15.7424 8.35573 15.5761 8.35573 15.3652V9.12897C8.35573 8.87201 8.29522 8.67928 8.17422 8.5508C8.05321 8.42232 7.87842 8.35808 7.64985 8.35808C7.50867 8.35808 7.37758 8.38279 7.25657 8.4322C7.13556 8.48162 6.9843 8.56562 6.80279 8.68422L5.42127 9.60336C5.30699 9.68242 5.22128 9.76972 5.16413 9.86526C5.10699 9.9608 5.07842 10.0646 5.07842 10.1766C5.07842 10.3413 5.13556 10.483 5.24985 10.6016C5.36413 10.7202 5.50195 10.7795 5.66329 10.7795C5.76413 10.7795 5.84817 10.7663 5.91539 10.7399C5.98262 10.7135 6.05994 10.6641 6.14733 10.5917L7.11539 9.89986H7.09523V15.3652C7.09523 15.5695 7.15237 15.7342 7.26665 15.8594C7.38094 15.9845 7.5322 16.0471 7.72044 16.0471ZM12.8431 16.1657C13.6767 16.1657 14.3473 15.9236 14.8549 15.4394C15.3624 14.9551 15.6162 14.3143 15.6162 13.517C15.6162 12.7923 15.391 12.196 14.9406 11.7283C14.4901 11.2604 13.9053 11.0265 13.186 11.0265C12.8633 11.0265 12.549 11.099 12.2431 11.244C11.9372 11.3889 11.7171 11.5866 11.5826 11.837H11.633L11.8146 9.60336H14.8297C14.9776 9.60336 15.107 9.55065 15.2179 9.44523C15.3288 9.33981 15.3843 9.20144 15.3843 9.03013C15.3843 8.86541 15.3288 8.73199 15.2179 8.62986C15.107 8.52774 14.9776 8.47668 14.8297 8.47668H11.6129C11.0818 8.47668 10.7927 8.75011 10.7456 9.29698L10.5238 12.1433C10.5036 12.3871 10.554 12.57 10.6751 12.6918C10.7961 12.8137 10.9675 12.8747 11.1893 12.8747C11.3507 12.8747 11.4818 12.8549 11.5826 12.8154C11.6835 12.7759 11.8045 12.7034 11.9456 12.5979C12.1405 12.4266 12.3221 12.3031 12.4902 12.2273C12.6582 12.1515 12.8431 12.1137 13.0448 12.1137C13.4347 12.1137 13.7507 12.2438 13.9927 12.5041C14.2347 12.7643 14.3557 13.1086 14.3557 13.5369C14.3557 13.9717 14.2179 14.3308 13.9422 14.6141C13.6666 14.8975 13.3204 15.0391 12.9036 15.0391C12.6011 15.0391 12.3288 14.9617 12.0869 14.8069C11.8448 14.652 11.6599 14.4461 11.5322 14.1891C11.4582 14.064 11.3742 13.9668 11.2801 13.8976C11.186 13.8284 11.075 13.7938 10.9473 13.7938C10.7792 13.7938 10.6431 13.8465 10.5389 13.9519C10.4347 14.0574 10.3826 14.1957 10.3826 14.367C10.3826 14.4329 10.3893 14.4988 10.4028 14.5647C10.4162 14.6306 10.4364 14.6965 10.4633 14.7623C10.5977 15.1182 10.8751 15.441 11.2953 15.7309C11.7154 16.0208 12.2313 16.1657 12.8431 16.1657Z"
          fill="#B2B6BD"
        />
      </g>
      <defs>
        <clipPath id="clip0_1373_75284">
          <rect width="20.5714" height="24" fill="white" transform="translate(0.429688)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const AudioProgressBar = ({
  title,
  subtitle,
  seconds,
  playerRef,
  seekValue,
  isPlaying,
  getDuration,
  setIsPlaying,
  getTotalDuration,
  playedPercentage,
  handleSeekChange,
  handleSeekMouseUp,
  handleSeekMouseDown,
}) => {
  // ··································································
  // HANDLERS

  const handleGoForward = () => {
    playerRef.current.seekTo(seconds + 15);
  };

  const handleGoBackward = () => {
    playerRef.current.seekTo(seconds - 15);
  };

  // ··································································
  // COMPONENT

  const { classes } = AudioProgressBarStyles(
    { useSpaceBetween: title || subtitle },
    { name: 'AudioProgressBar' }
  );
  return (
    <Box className={classes.progressBarWrapper}>
      <Box className={classes.progressBar}>
        <Box
          className={classes.progressBarValue}
          style={{
            width: `${playedPercentage}%`,
          }}
        />
        <input
          className={classes.progressBarSeekSlider}
          type={'range'}
          min={0}
          max={0.999999}
          step={'any'}
          value={seekValue}
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
        />
      </Box>
      <Box className={classes.controlBar}>
        {(title || subtitle) && (
          <Box className={classes.titleWrapper}>
            {title && (
              <TextClamp lines={1}>
                <Box className={classes.title}>{title}</Box>
              </TextClamp>
            )}
            {subtitle && (
              <TextClamp lines={3}>
                <Box className={classes.subtitle}>{subtitle}</Box>
              </TextClamp>
            )}
          </Box>
        )}
        <Box className={classes.buttonDurationWrapper}>
          <Box className={classes.buttonWrapper}>
            <Box onClick={handleGoBackward} className={classes.iconWrapper}>
              <Back15Icon className={classes.controlIcon} />
            </Box>
            <Box onClick={() => setIsPlaying(!isPlaying)} className={classes.iconWrapper}>
              {isPlaying ? (
                <ControlsPauseIcon height={20} width={20} className={classes.controlIcon} />
              ) : (
                <ControlsPlayIcon
                  height={18}
                  width={18}
                  className={classes.controlIcon}
                  style={{ marginLeft: 2 }}
                />
              )}
            </Box>
            <Box onClick={handleGoForward} className={classes.iconWrapper}>
              <Forward15Icon className={classes.controlIcon} />
            </Box>
          </Box>
          <Box className={classes.durationWrapper}>
            <Text size={'xs'} role={'productive'} className={classes.duration}>
              {getDuration()} / {getTotalDuration()}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

AudioProgressBar.defaultProps = AUDIO_PROGRESS_BAR_DEFAULT_PROPS;
AudioProgressBar.propTypes = AUDIO_PROGRESS_BAR_PROP_TYPES;

export { AudioProgressBar };
