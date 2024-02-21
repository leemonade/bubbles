import React, { useRef, useState, useEffect } from 'react';
import { Box, Text, HoverCard, Chip } from '@bubbles-ui/components';
import { ChipsContainerStyles } from './ChipsContainer.styles';
import {
  CHIPS_CONTAINER_DEFAULT_PROPS,
  CHIPS_CONTAINER_PROP_TYPES,
} from './ChipsContainer.constants';

const ChipsContainer = ({ subjects, chipsToShow, isCollisionDetected, labels }) => {
  const { classes } = ChipsContainerStyles({ isCollisionDetected }, { name: 'ChipsContainer' });
  const containerRef = useRef(null);
  const chipRefs = useRef(subjects.map(() => React.createRef()));
  const [hiddenChips, setHiddenChips] = useState(new Array(subjects.length).fill(false));

  const moreChipRef = useRef(null);
  const getHiddenSubjectsLabel = () => subjects.filter((_, index) => hiddenChips[index]);
  const updateVisibleChips = () => {
    if (typeof chipsToShow === 'number') {
      const newHiddenChips = subjects.map((_, index) => index >= chipsToShow);
      setHiddenChips(newHiddenChips);
    } else {
      const containerWidth = containerRef.current.offsetWidth;
      let totalWidth = 0;
      const newHiddenChips = new Array(subjects.length).fill(true);
      const moreChipWidth = moreChipRef.current ? moreChipRef.current.offsetWidth : 0;

      chipRefs.current.forEach((ref, index) => {
        const chip = ref.current;
        const chipWidth = chip.offsetWidth;
        const style = window.getComputedStyle(chip);
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        const fullChipWidth = chipWidth + margin;

        if (totalWidth + fullChipWidth + moreChipWidth <= containerWidth) {
          newHiddenChips[index] = false;
          totalWidth += fullChipWidth;
        }
      });

      setHiddenChips(newHiddenChips);
    }
  };

  useEffect(() => {
    updateVisibleChips();

    const handleResize = () => {
      if (typeof chipsToShow !== 'number') {
        updateVisibleChips();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [subjects, chipsToShow]); // Dependencias del efecto

  const hiddenCount = hiddenChips.filter((isHidden) => isHidden).length;
  return (
    <Box ref={containerRef} className={classes.root}>
      {subjects?.map((subject, index) => (
        <Chip
          key={index}
          subject={subject}
          ref={chipRefs.current[index]}
          isHidden={hiddenChips[index]}
          isCollisionDetected={isCollisionDetected}
        />
      ))}
      {hiddenCount > 0 && (
        <HoverCard withArrow position="top">
          <HoverCard.Target>
            <Text
              ref={moreChipRef}
              className={classes.moreChip}
            >{`${labels?.and} ${hiddenCount} ${labels?.more}...`}</Text>
          </HoverCard.Target>
          <HoverCard.Dropdown className={classes.dropdown}>
            {getHiddenSubjectsLabel().map((subject) => (
              <Text key={subject.value} className={classes.labelTooltip}>
                {subject}
              </Text>
            ))}
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    </Box>
  );
};

ChipsContainer.propTypes = CHIPS_CONTAINER_PROP_TYPES;
ChipsContainer.defaultProps = CHIPS_CONTAINER_DEFAULT_PROPS;

export { ChipsContainer };
