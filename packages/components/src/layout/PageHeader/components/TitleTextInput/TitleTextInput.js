import React from 'react';
import { createStyles } from '@mantine/styles';
import { TextInput } from '../../../../form/TextInput';

export const TitleTextInputStyles = createStyles((theme) => {
  const globalTheme = theme.other.global;
  return {
    input: {
      borderColor: 'transparent !important',
      boxShadow: 'none !important',
      ...globalTheme.content.typo.heading.xlg,
      '&::placeholder': {
        color: `${globalTheme.content.color.text.subtle}!important`,
      },
    },
  };
});

export const TitleTextInput = ({ ...props }) => {
  const { classes } = TitleTextInputStyles({});
  const rootStyle = { flex: 1, maxWidth: 'unset' };
  return <TextInput {...props} style={rootStyle} classNames={classes} />;
};
