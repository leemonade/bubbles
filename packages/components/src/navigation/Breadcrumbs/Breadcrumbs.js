import React from 'react';
import PropTypes from 'prop-types';
import { isObject, isString } from 'lodash';
import { Link } from 'react-router-dom';
import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import { ChevRightIcon, ArrowLeftIcon } from '@bubbles-ui/icons/outline';
import { BreadcrumbsStyles } from './Breadcrumbs.styles';
import { Text } from '../../typography';
import { Anchor } from '../Anchor';
import { Stack } from '../../layout';

export const BREADCRUMBS_DEFAULT_PROPS = {
  useRouter: false,
  items: [],
  backLabel: '',
};
export const BREADCRUMBS_PROP_TYPES = {
  useRouter: PropTypes.bool,
  items: PropTypes.array,
  backLabel: PropTypes.string,
};

const Breadcrumbs = ({ items, useRouter, backLabel, ...props }) => {
  const { classes, cx } = BreadcrumbsStyles({});

  const NavItem = ({ item, ...itemProps }) => {
    itemProps.role = 'expressive';

    if (isString(item)) {
      return <Text {...itemProps}>{item}</Text>;
    }

    if (isObject(item)) {
      if (!item.href || item.ref === '') {
        return <Text {...itemProps}>{item.label}</Text>;
      }

      if (useRouter) {
        itemProps.as = Link;
        itemProps.to = item.href;
      } else {
        itemProps.href = item.href;
      }

      return <Anchor {...itemProps}>{item.label}</Anchor>;
    }

    return null;
  };

  return (
    <Stack spacing={4}>
      {backLabel && backLabel !== '' && (
        <Stack alignItems="center" spacing={2}>
          <ArrowLeftIcon className={classes.backIcon} />
          <Anchor role="expressive" className={classes.backLabel}>
            {backLabel}
          </Anchor>
        </Stack>
      )}
      <MantineBreadcrumbs separator={<ChevRightIcon />} {...props} classNames={classes}>
        {items.map((item, i) => (
          <NavItem key={`b-${i}`} item={item} />
        ))}
      </MantineBreadcrumbs>
    </Stack>
  );
};

Breadcrumbs.defaultProps = BREADCRUMBS_DEFAULT_PROPS;
Breadcrumbs.propTypes = BREADCRUMBS_PROP_TYPES;

export { Breadcrumbs };
