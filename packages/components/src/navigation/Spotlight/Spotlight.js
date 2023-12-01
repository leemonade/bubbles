import React from 'react';
import { isArray, isEmpty } from 'lodash';
import { SpotlightProvider } from '@mantine/spotlight';
import { SearchIcon } from '@bubbles-ui/icons/outline';
import { SPOTLIGHT_DEFAULT_PROPS, SPOTLIGHT_PROP_TYPES } from './Spotlight.constants';
import { SpotlightStyles } from './Spotlight.styles';
import { SpotlightAction } from './SpotlightAction';

const normalize = (value) => value.normalize('NFD').replace(/\p{Diacritic}/gu, '');

const Spotlight = ({ children, data, useRouter, ...props }) => {
  const { classes } = SpotlightStyles({}, { name: 'Spotlight' });

  const actions = React.useMemo(() => {
    if (isArray(data) && !isEmpty(data)) {
      const actionData = [];

      data.forEach((group) => {
        const groupName = group.label;
        const groupIcon = group.iconSvg;
        const groupUrl = group.url;
        const items = group.children;

        if (isArray(items) && !isEmpty(items)) {
          actionData.push({ title: groupName, useRouter, icon: groupIcon, isGroup: true });
          actionData.push(
            ...items.map((item) => ({
              title: item.label,
              useRouter,
              icon: item.iconSvg,
              url: item.url,
              description: groupName,
              isChild: true,
            })),
          );
        } else {
          actionData.push({ title: groupName, useRouter, icon: groupIcon, url: groupUrl });
        }
      });

      return actionData;
    }
    return [];
  }, [data, useRouter]);

  return (
    <SpotlightProvider
      {...props}
      actions={actions}
      classNames={classes}
      searchIcon={<SearchIcon width={{ height: 18 }} />}
      actionComponent={SpotlightAction}
      filter={(query, _actions) =>
        _actions.filter(
          (action) =>
            normalize(action.title.toLowerCase()).includes(normalize(query.toLowerCase())) ||
            normalize((action.description ?? '').toLowerCase()).includes(
              normalize(query.toLowerCase()),
            ),
        )
      }
    >
      {children}
    </SpotlightProvider>
  );
};

Spotlight.defaultProps = SPOTLIGHT_DEFAULT_PROPS;
Spotlight.propTypes = SPOTLIGHT_PROP_TYPES;

export { Spotlight };
