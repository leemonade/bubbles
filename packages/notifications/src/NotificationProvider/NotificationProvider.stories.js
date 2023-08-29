import React from 'react';
import { Stack, Button, Title } from '@bubbles-ui/components';
import { NotificationProvider, NOTIFICATION_PROVIDER_DEFAULT_PROPS } from './NotificationProvider';
import { CONTEXT_TYPES } from './context';
import { useNotifications } from './hooks';
import mdx from './NotificationProvider.mdx';

export default {
  title: 'NotificationProvider',
  parameters: {
    component: NotificationProvider,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

function NotificationsDemo({ type }) {
  const notifications = useNotifications(type);

  return (
    <Stack direction="column" spacing={5} ml={10}>
      <Title>{type}</Title>
      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show default notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'You did great',
            message: 'Data was saved',
            avatar:
              'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
          })
        }
      >
        Show notification with avatar
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'You did great',
            message: 'Data was saved',
            severity: 'success',
          })
        }
      >
        Show success notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'Bummer!',
            message: 'You have no right to do this',
            severity: 'error',
          })
        }
      >
        Show error notification
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          notifications.showNotification({
            title: 'Custom autoClose timeout',
            message: 'notification will be closed in 3 seconds',
            autoClose: 3000,
          })
        }
      >
        Will close automatically in 3 seconds
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          notifications.showNotification({
            id: 'data-loading',
            severity: 'info',
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            disallowClose: true,
          });

          setTimeout(() => {
            notifications.updateNotification('data-loading', {
              id: 'data-loading',
              severity: 'success',
              title: 'Data was loaded',
              message: 'Notification will close in 3 seconds, you can close this notification now',
              autoClose: 3000,
            });
          }, 3000);
        }}
      >
        Update notification
      </Button>
    </Stack>
  );
}

const Template = ({ ...props }) => {
  return (
    <NotificationProvider {...props}>
      <NotificationsDemo type={props.type} />
    </NotificationProvider>
  );
};

const ChatTemplate = ({ ...props }) => {
  return (
    <NotificationProvider {...props}>
      <NotificationsDemo type={props.type} />
      <NotificationProvider {...props} type={CONTEXT_TYPES.CHAT}>
        <NotificationsDemo type={CONTEXT_TYPES.CHAT} />
      </NotificationProvider>
    </NotificationProvider>
  );
};

export const Playground = Template.bind({});
export const WithChat = ChatTemplate.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...NOTIFICATION_PROVIDER_DEFAULT_PROPS,
};

WithChat.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...NOTIFICATION_PROVIDER_DEFAULT_PROPS,
};
