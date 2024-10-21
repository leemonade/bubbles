import React from 'react';
import { ReactTyped } from 'react-typed';
import { TYPING_DEFAULT_PROPS, TYPING_PROP_TYPES } from './Typing.constants';

const Typing = ({ hideCursorOnComplete, onComplete, ...props }) => {
  const handleComplete = (self) => {
    if (hideCursorOnComplete) {
      self.cursor.remove();
    }
    onComplete(self);
  };

  return <ReactTyped {...props} onComplete={handleComplete} />;
};

Typing.defaultProps = TYPING_DEFAULT_PROPS;
Typing.propTypes = TYPING_PROP_TYPES;

export { Typing };
