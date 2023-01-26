import React from 'react';
import { Paper, Stack, IconButton } from '@bubbles-ui/components';
import { EditWriteIcon, DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { OpenIcon } from '@bubbles-ui/icons/outline';

const LinkBubbleMenu = ({ editor, getLinkAttributes, editHandler, removeHandler }) => {
  const handleOpenLink = () => {
    const { href } = getLinkAttributes(editor);
    window.open(href, '_blank', 'noreferrer');
  };

  return (
    <Paper padding={1} shadow="level100" style={{ display: 'flex', alignItems: 'center' }}>
      <Stack spacing={2}>
        <IconButton size="sm" icon={<OpenIcon height={20} width={20} />} onClick={handleOpenLink} />
        <IconButton
          size="sm"
          icon={<EditWriteIcon height={20} width={20} />}
          onClick={editHandler}
        />
        <IconButton
          size="sm"
          icon={<DeleteBinIcon height={20} width={20} />}
          onClick={removeHandler}
        />
      </Stack>
    </Paper>
  );
};

export { LinkBubbleMenu };
