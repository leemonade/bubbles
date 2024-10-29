import { useMemo } from 'react';

const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
const TOLERANCE = 5; // píxeles de tolerancia

export const useVisibleRange = (
  tabOffsets, // Map<React.Key, { width: number, height: number, left: number, top: number }>
  containerSize, // { width: number, height: number, left: number, top: number },
  tabContentNodeSize, // { width: number, height: number },
  addNodeSize, // { width: number, height: number },
  { tabs, rtl },
) => {
  // { tabs: Tab[] } & TabNavListProps
  const unit = 'width'; // 'width' | 'height';
  const position = rtl ? 'right' : 'left'; // 'left' | 'top' | 'right';
  const transformSize = Math.abs(containerSize.left); // number;

  const basicSize = containerSize[unit];
  const tabContentSize = tabContentNodeSize[unit];
  const addSize = addNodeSize[unit];

  let mergedBasicSize = basicSize;
  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return useMemo(() => {
    if (!tabs.length) {
      return [0, 0];
    }

    const len = tabs.length;
    let endIndex = len - 1;
    for (let i = 0; i < len; i += 1) {
      const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    let startIndex = 0;
    for (let i = 0; i < len; i += 1) {
      const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
      if (offset[position] + offset[unit] >= transformSize) {
        startIndex = i;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabs.map((tab) => tab.key).join('_'), rtl]);
};
