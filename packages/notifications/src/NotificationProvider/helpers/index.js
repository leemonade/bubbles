export function getPositionStyles([vertical, horizontal], containerWidth, spacing, leftOffset) {
  const styles = {};

  vertical === 'top' && (styles.top = spacing);
  vertical === 'bottom' && (styles.bottom = spacing);

  horizontal === 'left' && (styles.left = spacing + leftOffset);
  horizontal === 'right' && (styles.right = spacing);
  horizontal === 'center' &&
    (styles.left = `calc(50% - ${containerWidth / 2}px + ${leftOffset}px)`);

  return styles;
}

const TRANSFORMS = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  'top-center': 'translateY(-100%)',
  'bottom-center': 'translateY(100%)',
};

const NO_TRANSFORM = {
  left: 'translateX(0)',
  right: 'translateX(0)',
  'top-center': 'translateY(0)',
  'bottom-center': 'translateY(0)',
};

export function getNotificationStateStyles({ state, maxHeight, positioning, transitionDuration }) {
  const [vertical, horizontal] = positioning;
  const property = horizontal === 'center' ? `${vertical}-center` : horizontal;

  const commonStyles = {
    opacity: 0,
    maxHeight,
    transform: TRANSFORMS[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

  const inState = {
    opacity: 1,
    transform: NO_TRANSFORM[property],
  };

  const outState = {
    opacity: 0,
    maxHeight: 0,
    transform: TRANSFORMS[property],
  };

  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...commonStyles, ...transitionStyles[state] };
}

export function getAutoClose(autoClose, notification) {
  if (typeof notification.autoClose === 'number') {
    return notification.autoClose;
  }

  if (notification.autoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}
