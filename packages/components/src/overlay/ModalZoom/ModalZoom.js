import React, { useState, useRef } from 'react';
import { Portal } from '@mantine/core';
import { noop } from 'lodash';
import { RemoveIcon, ZoomInIcon, ZoomOutIcon } from '@bubbles-ui/icons/outline';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Box } from '../../layout/Box';
import { ModalZoomStyles } from './ModalZoom.styles';
import { MODAL_ZOOM_DEFAULT_PROPS, MODAL_ZOOM_PROP_TYPES } from './ModalZoom.constants';

const ModalZoom = ({ children, canPlay, opened, hideButton, onClose = noop, style }) => {
  const [open, setOpen] = useState(opened);
  const center = useRef(null);

  const { classes } = ModalZoomStyles({}, { name: 'ModalZoom' });

  React.useEffect(() => {
    if (opened !== open) {
      setOpen(opened);
      center.current?.call();
    }
  }, [opened]);
  return (
    <>
      {!hideButton && (
        <Box
          style={{ cursor: canPlay && 'pointer', ...style }}
          onClick={() => {
            if (!canPlay) return;
            if (center.current) {
              center.current.call();
            }
            setOpen(true);
          }}
        >
          {children}
        </Box>
      )}

      {open && (
        <Portal zIndex={99999}>
          <Box className={classes.modalWrapper}>
            <Box
              className={classes.close}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            >
              <RemoveIcon />
            </Box>

            <TransformWrapper minScale={0.1} maxScale={50} centerOnInit={true} initialScale={1}>
              {({ zoomIn, zoomOut, resetTransform, centerView }) => {
                if (!center.current) {
                  center.current = { call: centerView };
                }
                return (
                  <React.Fragment>
                    <Box className={classes.tools}>
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          zoomIn();
                        }}
                      >
                        <ZoomInIcon />
                      </Box>
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          zoomOut();
                        }}
                      >
                        <ZoomOutIcon />
                      </Box>
                    </Box>

                    <TransformComponent
                      wrapperStyle={{
                        width: '100vw',
                        height: '100vh',
                        maxWidth: '100vw',
                        maxHeight: '100vh',
                      }}
                    >
                      {children}
                    </TransformComponent>
                  </React.Fragment>
                );
              }}
            </TransformWrapper>
          </Box>
        </Portal>
      )}
    </>
  );
};

ModalZoom.defaultProps = MODAL_ZOOM_DEFAULT_PROPS;
ModalZoom.propTypes = MODAL_ZOOM_PROP_TYPES;

export { ModalZoom };
