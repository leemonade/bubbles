import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { DeleteBinIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { ActionButton } from '../../form/ActionButton';
import { pxToRem } from '../../theme.mixins';

const defaultActions = {
  edit: {
    icon: EditWriteIcon,
    tooltip: 'edit',
    handler: 'onEdit',
    showOnHover: true,
    render: null,
  },
  delete: {
    icon: DeleteBinIcon,
    handler: 'onDelete',
    tooltip: 'delete',
    showOnHover: true,
    render: null,
  },
};

const NodeActions = ({ node, hover, ...props }) => {
  if (node.actions) {
    return node.actions.map((_action, i) => {
      if (typeof _action === 'string') {
        _action = {
          name: _action,
        };
      }

      const action = {
        handler: `on${_action.name.charAt(0).toUpperCase()}${_action.name.substr(1)}`,
        ...defaultActions[_action.name],
        ..._action,
      };
      if (typeof action.render === 'function') {
        return action.render(node, action);
      }
      const Icon = action.icon;
      return (
        <ActionButton
          tooltip={action.tooltip}
          rounded
          size="xs"
          icon={!isNil(Icon) ? Icon() : null}
          style={{
            opacity: !action.showOnHover || hover ? 1 : 0,
            marginLeft: pxToRem(i === 0 ? 16 : 4),
          }}
          key={i}
          onClick={(e) => {
            e.stopPropagation();
            // Call the given handler
            if (typeof action.handler === 'function') {
              action.handler(node, e);
            } else if (typeof action.handler === 'string') {
              const handler = props[action.handler];
              if (typeof handler === 'function') {
                handler(node, e);
              }
            }
          }}
        />
      );
    });
  }
  return <></>;
};

NodeActions.propTypes = {
  node: PropTypes.any,
  hover: PropTypes.bool,
};

export { NodeActions };
