import { forEach } from 'lodash';

export const getActiveItem = (menuData) => {
  let activeItem = null;
  let activeSubItem = null;

  if (window && window.location) {
    const url = window.location.pathname;
    forEach(menuData, (item) => {
      if (item.url === url) {
        activeItem = item;
      }
      forEach(item.children, (subItem) => {
        if (subItem.url === url) {
          activeItem = item;
          activeSubItem = subItem;
          return false;
        }
      });
      if (activeItem) {
        return false;
      }
    });
  }

  return { activeItem, activeSubItem };
};
