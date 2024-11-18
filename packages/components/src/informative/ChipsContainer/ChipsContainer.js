import React, { useRef, useState, useEffect } from 'react';
import { HoverCard } from '@mantine/core';
import {
  CHIPS_CONTAINER_DEFAULT_PROPS,
  CHIPS_CONTAINER_PROP_TYPES,
} from './ChipsContainer.constants';
import { ChipsContainerStyles } from './ChipsContainer.styles';
import { Box } from '../../layout/Box';
import { Chip } from '../Chip/Chip';
import { Text } from '../../typography';

const ChipsContainer = ({
  items,
  changeOnResize,
  chipsToShow,
  isCollisionDetected,
  labels,
  style,
  truncate,
  truncateLines,
}) => {
  const { classes } = ChipsContainerStyles({ isCollisionDetected }, { name: 'ChipsContainer' });
  const containerRef = useRef(null);
  const chipRefs = useRef(items.map(() => React.createRef()));
  const [hiddenChips, setHiddenChips] = useState(new Array(items.length).fill(false));

  const getHiddenSubjectsLabel = () => items.filter((_, index) => hiddenChips[index]);

  const updateVisibleChips = React.useCallback(() => {
    if (typeof chipsToShow === 'number') {
      const newHiddenChips = items.map((_, index) => index >= chipsToShow);
      setHiddenChips(newHiddenChips);
    } else {
      let totalWidth = 0;
      const newHiddenChips = new Array(items.length).fill(true);
      const containerWidth = containerRef.current?.offsetWidth ?? 0;

      try {
        chipRefs.current.forEach((ref, index) => {
          const chip = ref.current;
          const chipWidth = chip?.offsetWidth ?? 0;
          const fullChipWidth = chipWidth + 8;

          if (totalWidth + fullChipWidth <= containerWidth) {
            newHiddenChips[index] = false;
            totalWidth += fullChipWidth;
          }
        });
      } catch (e) {
        console.error('ChipsContainer ERROR:');
        console.error(e);
      }

      const hiddenCount = newHiddenChips.filter((isHidden) => isHidden).length;
      if (hiddenCount > 0) {
        for (let i = newHiddenChips.length - 1; i >= 0; i--) {
          if (!newHiddenChips[i]) {
            newHiddenChips[i] = true;
            break;
          }
        }
      }
      setHiddenChips(newHiddenChips);
    }
  }, [chipsToShow, containerRef.current, chipRefs.current]);

  const handleResize = () => {
    if (changeOnResize && typeof chipsToShow !== 'number') {
      updateVisibleChips();
    }
  };

  useEffect(() => {
    updateVisibleChips();
  }, [JSON.stringify(items)]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hiddenCount = hiddenChips.filter((isHidden) => isHidden).length;
  return (
    <Box ref={containerRef} className={classes.root} style={style}>
      {items?.map((subject, index) => (
        <Chip
          key={index}
          subject={subject}
          ref={chipRefs.current[index]}
          isHidden={hiddenChips[index]}
          isCollisionDetected={isCollisionDetected}
          truncate={truncate}
          truncateLines={truncateLines}
        />
      ))}
      {hiddenCount > 0 && (
        <HoverCard withArrow position="top">
          <HoverCard.Target>
            <Text
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
