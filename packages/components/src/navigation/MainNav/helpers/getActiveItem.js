import { forEach } from 'lodash';

export const getActiveItem = (menuData) => {
  let activeItem = null;
  let activeSubItem = null;

  // console.log('menuData:', menuData);

  if (window && window.location) {
    const url = window.location.pathname;

    // console.log('url:', url);

    forEach(menuData, (item) => {
      // console.log('item.url:', item.url);
      if (item.url === url) {
        activeItem = item;
      }

      forEach(item.children, (subItem) => {
        // console.log('subItem.url:', subItem.url);
        if (subItem.url === url) {
          activeItem = item;
          activeSubItem = subItem;
          return false;
        }
      });

      if (activeItem) {
        // console.log('-> ActiveItem:', activeItem);
        // console.log('-> ActiveSubItem:', activeItem);
        return false;
      }
    });

    // Check if parent root is found in their children
    if (!activeItem) {
      // console.log('----- AÚN NO TENEMOS ITEM ----');
      forEach(menuData, (item) => {
        // console.log('item.url:', item.url);
        if (item.url) {
          const itemUrl = item.url.replace(/([\/][^\/]+$)/g, '');
          const match = url.indexOf(itemUrl);
          if (match > -1 && match < 4) {
            activeItem = item;
            return false;
          }
        }

        forEach(item.children, (subItem) => {
          // console.log('subItem.url:', subItem.url);
          if (subItem.url) {
            const subItemUrl = subItem.url.replace(/([\/][^\/]+$)/g, '');
            const matchUrl = url.indexOf(subItemUrl);
            if (matchUrl > -1 && matchUrl < 4) {
              activeItem = item;
              activeSubItem = subItem;
              return false;
            }
          }
        });

        if (activeItem) {
          // console.log('-> ActiveItem:', activeItem);
          // console.log('-> ActiveSubItem:', activeItem);
          return false;
        }
      });
    }
  }

  return { activeItem, activeSubItem };
};
