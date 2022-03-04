import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ExpandDiagonalIcon, TypeCursorIcon } from '@bubbles-ui/icons/outline';
import { TextEditorContext } from '../../form/TextEditorProvider';
import { Button } from '../../form/Button/Button';
import { Popover, Box, COLORS } from '@bubbles-ui/components';
import { ColorToolStyles } from './ColorTool.styles';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';

export const DEFAULT_SWATCHES = [
  COLORS.text01,
  COLORS.text05,
  '#7449F4',
  COLORS.interactive01,
  '#347A3B',
  '#C24B64',
  '#A86500',
  '#FFB300',
  '#FF8C00',
  '#FF5733',
  '#FF0000',
  '#FF00FF',
  '#00FF00',
  '#0000FF',
];

export const COLORTOOL_DEFAULT_PROPS = {
  swatches: DEFAULT_SWATCHES,
};

export const COLORTOOL_PROP_TYPES = {
  swatches: PropTypes.arrayOf(PropTypes.string),
};

const ColorTool = ({ swatches, ...props }) => {
  const { editor } = useContext(TextEditorContext);
  const [isOpened, setIsOpened] = useState(false);
  const color = editor?.getAttributes('textStyle').color;

  const onClickHandler = (color) => {
    editor?.chain().focus().setColor(color).run();
    setIsOpened(false);
  };

  const { classes } = ColorToolStyles({ color });
  return (
    <Popover
      opened={isOpened}
      onClose={() => setIsOpened(false)}
      width={250}
      position="bottom"
      placement="start"
      target={
        <Button
          {...props}
          icon={<ExpandDiagonalIcon />}
          onClick={() => setIsOpened(!isOpened)}
          actived={isOpened}
          classNames={classes}
        >
          <Box className={classes.preview}></Box>
        </Button>
      }
    >
      <Box className={classes.swatchBox}>
        {swatches.map((swatch, index) => (
          <Box
            key={`${swatch} ${index}`}
            className={classes.swatch}
            style={{ backgroundColor: swatch }}
            onClick={() => onClickHandler(swatch)}
          >
            {swatch === (color ? color : COLORS.text01) && (
              <TypeCursorIcon className={classes.swatchIcon} />
            )}
          </Box>
        ))}
      </Box>
    </Popover>
  );
};

ColorTool.defaultProps = COLORTOOL_DEFAULT_PROPS;
ColorTool.propTypes = COLORTOOL_PROP_TYPES;

ColorTool.extensions = [
  TextStyle,
  Color.configure({
    types: ['textStyle'],
  }),
];

export { ColorTool };
