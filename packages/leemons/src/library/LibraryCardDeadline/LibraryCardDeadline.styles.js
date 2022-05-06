import { createStyles, pxToRem, getFontProductive } from '@bubbles-ui/components';

const getTitleColor = (theme, remainingDays, isNew, severity, role) => {
  const isTeacher = role === 'teacher';
  const isStudent = role === 'student';
  if (isNew) return theme.colors.fatic02;
  if (isTeacher) return getTeacherColor(theme, remainingDays, severity);
  else if (isStudent) return getStudentColor(theme, remainingDays, severity);
};

const getTeacherColor = (theme, remainingDays, severity) => {
  console.log(remainingDays);
  return theme.colors.fatic01;
};

const getStudentColor = (theme, remainingDays, severity) => {
  return theme.colors.fatic01;
};

export const LibraryCardDeadlineStyles = createStyles(
  (theme, { isNew, direction, parentHovered, remainingDays, severity, role }) => {
    const isVertical = direction === 'vertical';

    const titleColor = getTitleColor(theme, remainingDays, isNew, severity, role);

    return {
      root: {
        ...getFontProductive(theme.fontSizes['2'], 400),
        display: isVertical ? 'inline-flex' : 'flex',
        padding: isVertical ? `${pxToRem(4)} ${pxToRem(8)}` : pxToRem(8),
        backgroundColor: 'white',
        borderRadius: isVertical && '4px',
      },
      icon: {
        color: theme.colors.text04,
        marginRight: 8,
        marginTop: 2,
      },
      title: {
        fontWeight: 600,
        fontSize: pxToRem(12),
        lineHeight: pxToRem(20),
        color: titleColor,
      },
      deadline: {
        display: !parentHovered && 'none',
        color: theme.colors.text02,
        fontSize: pxToRem(12),
        lineHeight: pxToRem(14),
        height: !isVertical ? (parentHovered ? 14 : 0) : 14,
        transition: 'all 0.2s ease-in',
        overflow: !isVertical && 'hidden',
        whiteSpace: isVertical && 'nowrap',
      },
      info: {
        display: isVertical && 'flex',
        alignItems: isVertical && 'center',
        gap: isVertical && pxToRem(8),
      },
    };
  }
);
