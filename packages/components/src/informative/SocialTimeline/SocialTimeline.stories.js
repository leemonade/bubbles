import React from 'react';
import { Box } from '@mantine/core';
import { SocialTimeline } from './SocialTimeline';
import { SOCIAL_TIMELINE_DEFAULT_PROPS } from './SocialTimeline.constants';
import mdx from './SocialTimeline.mdx';

export default {
  title: 'Organisms/Informative/SocialTimeline',
  parameters: {
    component: SocialTimeline,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    locale: {
      control: { type: 'select' },
      options: ['es-ES', 'ca', 'en-UK', 'en-US', 'it-IT', 'fr-FR'],
    },
  },
};

const Template = ({ ...props }) => {
  return <SocialTimeline {...props} />;
};

export const Playground = Template.bind({});

const today = new Date();

Playground.args = {
  ...SOCIAL_TIMELINE_DEFAULT_PROPS,
  messages: [
    {
      actor: {
        name: 'Nuevo mensage',
      },
      verb: 'en el chat',
      object: { id: 'id01', definition: { name: 'Grupo Moriscos 4' } },
      timestamp: new Date(new Date(today).setHours(today.getHours() - 24)),
    },
    {
      actor: {
        name: 'Josefina',
        avatar:
          'https://s3-alpha-sig.figma.com/img/86f5/00bf/5087006856da2fdf6b83170bc7c6e193?Expires=1658707200&Signature=c40gVblB1b9Jklq8YagxF6Q3o6~x3p-EjSl9fCXZMZZfyA5CU8rbDUNfi69Xp2jKK54Y79DwPaI0-J0qy-7qgWD~GUfCqZ4AR50A20h3n0sgEsUVkZg4Pbbci43TZi36B~fmPBzp4qQHUCL808Ew3gQZ0JiFc-VH3ygW3tcFIYEEN33jHbhdqfYJahQumJHgNDiNqISdzYRQMLujlMMPGshZ6aneF5M9H~4GxkEiQ9B5Vn1cpIu1E0Ho1-~G6RhyDJHU8b~FbnCvGovWoNNJzPsJPoABxBx8n947df-8CXJrncsugglplPfiZmdyrWIlBTvqU8LRXv9UQ-n5JrfQXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
      verb: 'te ha añadido a la tarea',
      object: { id: 'id01', definition: { name: 'Casas moriscas' } },
      timestamp: new Date(new Date(today).setHours(today.getHours() - 72)),
    },
    {
      actor: {
        name: 'Martina',
        avatar:
          'https://s3-alpha-sig.figma.com/img/903b/674a/5016cc8f074bb3bb469e48104d576af3?Expires=1658707200&Signature=VRysjNwraKeP-TKjpgfscvmr7yVIaTE37J2ZTGx8NRfp2Fo6WvR2FYSqv7-VgxM-8tjtFbMl-nJQaPz90rnpA6LQWiLGcTG-8yDTkMJz54wxLSMZYtV2bWIygo8i2MPVbHB0UoPom-bLLzNVb0REQMSgUsfSINc5tzu9O18KKoj~TauveiIwnao0Mgo1UD1F8xZZoIRH48zfOmKPJkAec9FahJAJkSr3LGOIOXcSJzJqbFyaqIKtK1nxz1FLUt~4-MU19j~EoVZcYyM4ykMLG2huN65FlhOTQKcw3CUvPAZrfU6j-GBh~jgJJmqugjMtnGxEPDurOSlRbpkeKATrlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
      verb: 'te ha añadido a la tarea',
      object: { id: 'id01', definition: { name: 'Casas moriscas' } },
      timestamp: today,
    },
    {
      actor: {
        name: 'Carlos',
        avatar:
          'https://s3-alpha-sig.figma.com/img/86f5/00bf/5087006856da2fdf6b83170bc7c6e193?Expires=1658707200&Signature=c40gVblB1b9Jklq8YagxF6Q3o6~x3p-EjSl9fCXZMZZfyA5CU8rbDUNfi69Xp2jKK54Y79DwPaI0-J0qy-7qgWD~GUfCqZ4AR50A20h3n0sgEsUVkZg4Pbbci43TZi36B~fmPBzp4qQHUCL808Ew3gQZ0JiFc-VH3ygW3tcFIYEEN33jHbhdqfYJahQumJHgNDiNqISdzYRQMLujlMMPGshZ6aneF5M9H~4GxkEiQ9B5Vn1cpIu1E0Ho1-~G6RhyDJHU8b~FbnCvGovWoNNJzPsJPoABxBx8n947df-8CXJrncsugglplPfiZmdyrWIlBTvqU8LRXv9UQ-n5JrfQXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
      verb: 'te ha añadido a la tarea',
      object: { id: 'id01', definition: { name: 'Casas moriscas' } },
      timestamp: new Date(new Date(today).setHours(today.getHours() + 4)),
    },
    {
      actor: { name: 'Dalinar' },
      verb: 'te ha añadido a la tarea',
      object: { id: 'id01', definition: { name: 'Casas moriscas' } },
      timestamp: new Date(new Date(today).setHours(today.getHours() + 2)),
    },
  ],
  locale: 'es-ES',
};
